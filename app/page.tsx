'use client';

import Image from 'next/image'
import Head from 'next/head'
import { useRef, useState } from 'react'; 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCof0GJ_P0ntqdM0tJoSj4TSHoAYdcLzJg",
  authDomain: "gtfol-workshop.firebaseapp.com",
  projectId: "gtfol-workshop",
  storageBucket: "gtfol-workshop.appspot.com",
  messagingSenderId: "147805482218",
  appId: "1:147805482218:web:5ea6e343014dd596263b93",
  measurementId: "G-R1TY074LY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 

export default function Home() {

  const [email, setEmail] = useState("");

  // const [status, setStatus] = useState<ResponseStatus>(ResponseStatus.Waiting);
  const [loading, setLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const signup = async (e: any) => {
    e.preventDefault()
    addEmail(email)
  }

  const addEmail = async (email: string) => {
    console.log("user entered email: ", email)
  };


  return (
    <div className="h-full min-h-screen lg:h-screen w-full flex flex-col bg-white">
      <Head>
        <title> ENTER YOUR APP NAME </title>
        <meta name="description" content={`A social productivity tool designed to help you find your flow.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="nav" className="flex flex-row justify-between w-full py-8 px-12">
      </div>

      <div id="main" className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-12 mx-auto mx-8 sm:px-8">
        <div id="hero" className='flex flex-col gap-y-5 sm:min-w-[24rem] px-6 sm:px-0'>
          <img className="h-24 w-24 sm:h-32 sm:w-32" alt="logo" src="/logo.png" />
          <h1 className='text-6xl sm:text-7xl font-bold text-[#001122]'> ENTER YOUR APP NAME </h1>
          <h2 className='text-[#999999] text-xl font-medium'> ENTER APP DESCRIPTION </h2>
          <div className="flex flex-row gap-x-3">
            <div>
              <input ref={emailInputRef}
                name="email_address"
                onChange={(e) => {
                  // validateEmail(e.target.value)
                  setEmail(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    signup(e);
                  }
                }}
                type="email"
                value={email}
                required={true}
                autoComplete='off'
                aria-label="Email address"
                className={
                  `appearance-none shadow rounded-xl ring-1 ring-silver leading-5 border border-transparent px-6 py-3 placeholder:text-black placeholder:text-opacity-25 block max-w-[360px] w-full text-[#222222] focus:outline-none focus:ring-2 bg-[#f2f2f2],
                    'focus:ring-red-500',
                    'focus:ring-electric-blue`
                }
                placeholder="name@email.com"
              />


            </div>
            <button onClick={(e) => signup(e)} className="px-5 py-3 border-none rounded-xl text-lg font-medium w-2/5 bg-blue hover:bg-electric-blue-accent text-white">
              Submit
            </button>
          </div>
        </div>
        <div id="demo" className="w-full sm:w-[40rem] h-auto aspect-auto">
          <img
            src="logo.png" onContextMenu={() => false}
            className="object-cover w-96 h-96 sm:shadow-2xl sm:rounded-lg bg-black"
          />
        </div>
      </div>
      <div id="footer" className="flex flex-row justify-between w-full py-8 px-12 flex-grow items-end">
        <p className="text-metallic-gray font-medium">© 2023 <a href="https://rev.school" target='_blank' referrerPolicy='no-referrer' className="hover:underline">rev</a></p>
        <div className="flex flex-row gap-x-4">
          <a target='_blank' referrerPolicy='no-referrer' href="https://twitter.com/rev_neu" className="text-metallic-gray font-medium hover:underline">Twitter</a>
          <a target='_blank' referrerPolicy='no-referrer' href="https://github.com/teamrevspace/flowwork" className="text-metallic-gray font-medium hover:underline">Github</a>
        </div>
      </div>
    </div>
  )
}
