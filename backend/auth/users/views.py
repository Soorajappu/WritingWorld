from django.shortcuts import render
from rest_framework import viewsets,permissions,status
from .serializers import *
from .models import *
from rest_framework.response import Response
from knox.models import AuthToken
from rest_framework.parsers import MultiPartParser, FormParser
import base64
from django.core.files.base import ContentFile
from django.contrib.auth import get_user_model,authenticate
User = get_user_model()



class ProfileImageViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = RegisterSerializer
    queryset = User.objects.all()


    def create(self, request, *args, **kwargs):
        print("request.data", request.data)
        if not request.user.is_authenticated:
            return Response({'error': 'User is not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)

        if 'profile_image' not in request.data:
            return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)

        user_profile = request.user
        format, imgstr = request.data['profile_image'].split(';base64,')
        ext = format.split('/')[-1]
        data = ContentFile(base64.b64decode(imgstr), name=f'{user_profile.username}.{ext}')
        user_profile.profile_image = data
        user_profile.save()

        return Response({
            'message': 'Profile image uploaded successfully',
            'profile_image': user_profile.profile_image.url
        }, status=status.HTTP_200_OK)



class LoginViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    # queryset = User.objects.all()
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            user = authenticate(request, email=email, password=password)
            
            if user:
                _, token = AuthToken.objects.create(user)
                return Response({
                    'user': self.serializer_class(user).data,
                    'token': token,
                    'username': user.username
                })
            else:
                return Response({"error": "Invalid credentials"}, status=401)
            
        else:
            return Response(serializer.errors, status=400)


class RegisterViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
    
class UserViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)