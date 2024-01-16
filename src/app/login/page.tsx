"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login(){
    const [user , setuser] = React.useState({
        email:"",
        password :"",
        
    })
    const onLogIn = async()=>{

    }
    return(
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>LogIn</h1>
        <br />
       
        <label htmlFor="email">email</label>
        <input 
        className=" flex justify-center align-center p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-1/2 mx-auto"
        type="text" 
        id="email"
        value={user.email}
        onChange={(e)=>setuser({...user ,email:e.target.value})}
        placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input 
        className=" flex justify-center align-center p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-1/2 mx-auto"
        type="password" 
        id="password"
        value={user.password}
        onChange={(e)=>setuser({...user ,password:e.target.value})}
        placeholder="password"
        />
        <button 
        onClick={onLogIn}
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-red-500">
            LogIn
        </button>
        <Link href="/signup">SignUp Instead</Link>   
       </div>
    );
}