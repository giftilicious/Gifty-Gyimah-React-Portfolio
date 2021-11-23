import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header>
 
    <nav class="flex items-center pb-2  sm:mt-8">
      <div class="px-6"><Link to="/">
      <img src="./assets/images/logo-gg_final-2.jpg"
            alt="Gifty Gyimah logo" />
      
      </Link></div>
      <ul class="hidden md:flex flex-1 justify-end items-center gap-12 text-gray-800 uppercase text-md px-6">
        <div class="inline-block p-2 uppercase text-lg text-gray-700 hover:text-gray-400"><Link to="/about">About</Link></div>
        <div
          class="inline-block p-2 uppercase text-lg text-gray-700 hover:text-gray-400"><Link to="/portfolio">Portfolio</Link></div>
        <div class="inline-block p-2 uppercase text-lg text-gray-700 hover:text-gray-400"><Link to="/contact">Contact</Link></div>
        <div class="inline-block p-2 uppercase text-lg text-gray-700 hover:text-gray-400"><Link to="/resume">Resume</Link></div>
      </ul>
     
      <div class="flex md:hidden flex-1 justify-end pr-2">
        <div class="w-full sm:w-6/12 md:w-4/12 px-4">
          <div class="relative inline-flex align-middle w-full">
            <button
              class="bg-gray-700 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" onclick="openDropdown(event,'dropdown-example-1')">
              <i class="text-2xl fas fa-bars"></i>
            </button>
            <div class="hidden bg-white  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              style={{"min-width":"12rem"}} id="dropdown-example-1">
              <a href="./about.html"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                About
              </a>
              <a href="./portfolio.html"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                Portfolio
              </a>
              <a href="./resume.html"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                Resume
              </a>
              <div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25"></div>
              <a href="./contact.html"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
    )
}