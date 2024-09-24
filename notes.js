/*
  
   lets start by building our header components. With it we have a few features tthat will make it unique. 

   first when the page is not at the top of the windown, the background will be transparent. 

   when we are at the top of the page the background will be white. 

   based on the tailwindcss configuration, when the window view is small or medium, there will be a mobile menu that when click, the menu icon transitions to a x

   the menu will ttransition from the left with a spring animation using framer motion

   You will notice 3 sections on it, a header which has the logo, the body, which has the links, and a simple footer

   finally u will notice that as we hover over each link there is a underline effect that transitons under the link name. 

   this is accomplished by using tailwindcss class utlity which gives more flexibility to right css but also creates a mini component thats reusable

   

   <--herosection->
   import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen px-8 flex flex-col mx-auto max-w-screen-lg justify-center items-center'>
        <Image
          src='/hero.png'
          alt='hero'
          width={500}
          height={500}
          className='lg:w-4/6 md:w-3/6 w-5/6 object-cover object-center rounded'
        />
        
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Elevate Your Skills with Our Training Programs
          </h1>
          <p className="mb-8 leading-relaxed">
            Join our community of learners and gain hands-on experience in various fields. Our courses are designed to be interactive, engaging, and practical, helping you to succeed in your career. Sign up today and take the first step towards your future!
          </p>
          
          <div className="flex justify-center">
            <Link
              href='/sign-in'
              className="w-full text-center text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Sign Up
            </Link>
            <Link 
              href='/sign-in'
              className="ml-4 w-full text-gray-900 bg-gray-100 border-gray-900 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Log In
            </Link>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


<-with animation->
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen px-8 flex flex-col mx-auto max-w-screen-lg justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src='/hero.png'
            alt='hero'
            width={600}
            height={600}
            className='lg:w-4/6 md:w-3/6 w-5/6 object-cover object-center rounded'
          />
        </motion.div>
        
        <div className='text-center lg:w-2/3 w-full'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            Elevate Your Skills with Our Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 leading-relaxed"
          >
            Join our community of learners and gain hands-on experience in various fields. Our courses are designed to be interactive, engaging, and practical, helping you to succeed in your career. Sign up today and take the first step towards your future!
          </motion.p>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href='/sign-in'
                className="w-full text-center text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
              >
                Sign Up
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link 
                href='/sign-in'
                className="ml-4 w-full text-gray-900 bg-gray-100 border py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Log In
              </Link>
            </motion.div>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

  
 */