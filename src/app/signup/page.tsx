"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from 'react-toastify';

export default function SignUp(){
    const router = useRouter();
    const [user , setuser] = React.useState({
        email:"",
        password :"",
        username:"",
    })
    

    const [buttonDisabled , setbuttonDisabled] = React.useState(false);
    const [loading , setloading] = React.useState(false)
    const onSignup = async()=>{
        try {
            setloading(true);
            const response = await axios.post("/api/users/signup",user);
            router.push("/login");
        } catch (error:any) {
            console.log('signUp failed', error.message);
            toast.error(error.message);
        }finally{
            setloading(false);
        }
    }
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length>0){
            setbuttonDisabled(false);
        }else{
            setbuttonDisabled(true);
        }
    }, [user]);

    return(
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "processing" : "SignUp"}</h1>
        <br />
        <label htmlFor="username">username</label>
        <input 
        className=" flex justify-center align-center p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-1/2 text-black"
        type="text" 
        id="username"
        value={user.username}
        onChange={(e)=>setuser({...user ,username:e.target.value})}
        placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input 
        className=" flex justify-center align-center p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-1/2 text-black"
        type="text" 
        id="email"
        value={user.email}
        onChange={(e)=>setuser({...user ,email:e.target.value})}
        placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input 
        className=" flex justify-center align-center p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-1/2 text-black"
        type="password" 
        id="password"
        value={user.password}
        onChange={(e)=>setuser({...user ,password:e.target.value})}
        placeholder="password"
        />
        <button 
        onClick={onSignup}
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-red-500">
            {buttonDisabled ? "No SignUp" : "SignUp"}
        </button>
        <Link  href="/login">Login Page</Link>
       </div>
    );
}