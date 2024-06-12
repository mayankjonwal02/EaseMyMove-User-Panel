'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Logo from '../../../assets/Easemymovelogo.png'
import TitleImage from '../../../assets/EasemymoveTitle.png'
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import { styleText } from 'util';
import Link from 'next/link';
import { BallTriangle, Bars, Oval, Puff, Rings, TailSpin, ThreeCircles, ThreeDots } from "react-loader-spinner";
import { Grid } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function Signin() {

    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast()


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = () => {

        setIsLoading(true);
        fetch(`${process.env.API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        )
            .then((response) => response.json())
            .then((data) => {

                setIsLoading(false);
                if (data.executed) {
                    if (data.userData.category === "user") {
                        localStorage.setItem('user', JSON.stringify(data.userData));
                        localStorage.setItem('login', "true");
                        toast({
                            title: "Success",
                            description: data.message,
                            variant: "default",
                            className: "bg-green-1 text-white"
                        })
                        router.push('/orders');
                    }
                    else {
                        toast({
                            title: "Not Authorized",
                            description: "You are not a user. Please contact admin",
                            variant: "destructive",
                        })
                    }
                } else {
                    console.log(data.message)
                    toast({
                        title: "Error",
                        description: data.message,
                        variant: "destructive",
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error as Error);
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                })
            });

    }

    const handleForgotPassword = () => {
        try {
            if(email === "") {
                toast({
                    title: "Error",
                    description: "Please enter your email address",
                    variant: "destructive",
                })
                return;
            }
            setIsLoading(true);
            fetch(`${process.env.API_ENDPOINT}/api/auth/reset`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            }
            )
                .then((response) => response.json())
                .then((data) => {
    
                    setIsLoading(false);
                    if (data.executed) {
                        toast({
                            title: "Success",
                            description: data.message,
                            variant: "default",
                            className: "bg-green-1 text-white"
                        })
                    } else {
                        console.log(data.message)
                        toast({
                            title: "Error",
                            description: data.message,
                            variant: "destructive",
                        })
                    }
                })
                .catch((error) => {
                    console.error('Error:', error as Error);
                    toast({
                        title: "Error",
                        description: error.message,
                        variant: "destructive",
                    })
                });
        } catch (error : any) {
            console.log(error);
            toast({
                title: "Error",
                description: "Error in resetting password",
                variant: "destructive",
            })
        }
    }


    return (
        <div>

            <div className='flex flex-row bg-white w-full h-screen'>
                <div className='bg-gray-1 h-screen w-2/4 flex flex-col justify-center items-center'>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <Image
                            src={Logo}
                            alt="Description of my image"
                            width={300} // Desired width in pixels
                            height={300} // Desired height in pixels
                        />
                    </motion.div>

                    <Image
                        className='mt-10'
                        src={TitleImage}
                        alt="Description of my image"
                        width={500} // Desired width in pixels
                        height={300} // Desired height in pixels
                    />

                </div>
                <div className='bg-white h-screen w-2/4 flex flex-col justify-center items-center gap-11'>
                    <div className='text-green-1 font-bold text-5xl mb-10'>Login</div>
                    <div className='w-full justify-center items-center flex flex-col gap-5'>

                        <Input type="email" placeholder="Email" className='w-3/5' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <div className="relative w-3/5">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer"
                            >
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <div className='flex flex-row justify-center items-center w-3/5 gap-3'>
                            <Button className="bg-green-1 " onClick={() => { handleLogin() }}>Sign In</Button>
                            {/* <TailSpin
                                height="60"
                                width="60"
                                color="#4fa94d"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass="ms-5"
                                visible={isLoading}



                            /> */}

                            <Oval
                            height="60"
                            width="60"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            
                            wrapperStyle={{}}
                            wrapperClass="ms-5"
                            visible={isLoading}
                            />
                        </div>
                        <div className = "flex flex-row justify-center items-center w-3/5 gap-6">

                        <Link href='/signup' className='underline underline-offset-4 text-green-1 font-bold'>Not Registered Yet, Signup</Link>
                        <Dialog>
                <DialogTrigger>
                <div  className='underline underline-offset-4 text-green-1 font-bold'>Forgot Password</div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className=' flex flex-col justify-center items-center gap-7'>
                        <DialogTitle className='font-extrabold text-center'>Get Password-Reset Link</DialogTitle>
                        <Input type="email" placeholder="Enter Asscociated Email" className='w-3/5 ' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Button className='bg-green-1 hover:bg-green-300' onClick={() => { handleForgotPassword() }}>Send</Button>
                        <Oval
                            height="60"
                            width="60"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            
                            wrapperStyle={{}}
                            wrapperClass="ms-5"
                            visible={isLoading}
                            />

                    </DialogHeader>
                </DialogContent>
            </Dialog>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
