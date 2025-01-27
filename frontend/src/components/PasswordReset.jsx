import {React, useState} from 'react'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import MyMessage from './Message'

const PasswordReset = () => {

    const {handleSubmit, control} = useForm()
    const navigate = useNavigate()
    const {token} = useParams()
    console.log(token)

    const [showMessage, setShowMessage] = useState(false)

    const submission = (data) => {
        AxiosInstance.post("api/password_reset/confirm/", {
            password: data.password,
            token: token,
        })
            .then((response) => {
                setShowMessage(true)
                setTimeout(() => {
                    navigate("/")
                }, 5000)
            })
            
    }

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-black'>
        {showMessage ? <MyMessage text="Your password reset is successful, you will be redirected to login page in a second" color={"#3ca60e"} /> : null}
        <form onSubmit={handleSubmit(submission)}>

            <Box className='bg-white p-5 min-w-[300px] h-[80%] lg:h-[77%] xl:h-[70%] w-[30%] border border-gray-500'>
                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <Box className=' text-3xl'>Reset Password</Box>
                </Box>

                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <MyPassField 
                        name={"password"} 
                        control={control}
                        label="Password"
                    />
                </Box>

                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <MyPassField 
                        name={"password2"} 
                        control={control}
                        label={"Confirm_Password"}
                    />
                </Box>


                <Box className='flex justify-center items-center w-full h-[82px]'>
                    <MyButton 
                    type={"submit"}
                    label={"Reset Password" }
                    />
                </Box>

                <Box className='flex justify-center items-center w-full h-[82px]' sx={{flexDirection: "column"}}>
                    
                </Box>
            </Box>

        </form>
    </div>
  )
}

export default PasswordReset