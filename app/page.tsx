'use client';

import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';

// Import the functions you need from the SDKs you need

import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore"; // firestore module
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useRouter } from 'next/navigation';
import app from './firebase';

// Initialize Auth
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export default function Home() {

  const [id, setID] = useState("")
  const [user, setUser] = useState<User | null>(auth.currentUser)

  // const [status, setStatus] = useState<ResponseStatus>(ResponseStatus.Waiting);
  const [loading, setLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter()

  const signup = async (e: any) => {
    e.preventDefault()
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const u = result.user;
        const name = u.displayName;
        const email = u.email;
        const phone = u.phoneNumber
        setUser(u)
        navigateToDashboard(e)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        await addEmail(u.email!)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const navigateToDashboard = async (e: any) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  const addEmail = async (email: string) => {
    console.log("user entered email: ", email)

    // reference to the currently logged in user
    const userRef = doc(db, 'users', email)

    // creating user data from auth to be stored
    const userData = {
      name: user?.displayName,
      dataLoggedIn: Timestamp.now(),
      pfp: user?.photoURL,
    }

    // storing it in a document on Firestore
    await setDoc(userRef, userData)
  };

  useEffect(() => {
    setUser(auth.currentUser)
  }, [])


  return (
    <div className="h-full min-h-screen lg:h-screen w-full flex flex-col bg-white">
      <Head>
        <title> NeuroGrants </title>
        <meta name="description" content={`Description.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="nav" className="flex flex-row justify-between w-full py-8 px-12">
      </div>

      <div id="main" className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-12 mx-auto mx-8 sm:px-8">
        <div id="hero" className='flex flex-col gap-y-5 sm:min-w-[24rem] px-6 sm:px-0'>
          <img className="h-24 w-24 sm:h-32 sm:w-32" alt="logo" src="/logo.png" />
          <h1 className='text-6xl sm:text-7xl font-bold text-[#001122]'> neurogrants.com </h1>
          <h2 className='text-[#999999] text-xl font-medium'> Enabling biomedical disease researchers to more easily find private grant funding sources. </h2>
          <div className="flex flex-row gap-x-3">
            <div>
              <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded shadow"
                onClick={async (e) => { !user ? signup(e) : navigateToDashboard(e) }}
              >{!user ? (
                <div className="flex flex-row items-center">
                  <img src="google_icon.png"></img>
                  Log In with Google
                </div>) : (
                <div>
                  Go to Dashboard
                </div>
              )}
              </button>
            </div>
          </div>
        </div>
        <div id="demo" className="w-full sm:w-[40rem] h-auto aspect-auto">
          <img
            // TODO Change this logo
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
