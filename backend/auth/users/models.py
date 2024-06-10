from django.db import models
from django.contrib.auth.models import AbstractUser

from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
# Create your models here.

class CustomUser(AbstractUser):
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=255,unique=True)
    password = models.CharField(max_length=255)
    confirm_password = models.CharField(max_length=255)
    profile_image = models.ImageField(upload_to="profile_image/", blank=True, null=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args,**kwargs):
    
    print("Token object:", reset_password_token)
    print("Generated Token:", reset_password_token.key)
    
    sitelink = "http://localhost:5173/"
    token = "{}".format(reset_password_token.key)
    full_link = str(sitelink)+str("password-reset/")+str(token)
    
    print(token)
    print(full_link)
    
    context = {
        'full_link': full_link,
        'email_address':reset_password_token.user.email
    }

    html_message = render_to_string('backend/email.html', context=context)
    plain_message = strip_tags(html_message)
    
    msg = EmailMultiAlternatives(
        subject='Request for reseting password for {title}'.format(title=reset_password_token.user.email),
        body=plain_message,
        from_email='senterexample@gmail.com',
        to=[reset_password_token.user.email]
    )
    msg.attach_alternative(html_message, 'text/html')
    msg.send()
