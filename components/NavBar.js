import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

const NavBar = ({profile}) => { 
  
  return (
    <div className='bg-[#5540af]'>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=' '>
              <a href="/">
              <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <a href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Services</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Portfolio</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#clients"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Clients</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Work</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Blog</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  )
}

export default NavBar