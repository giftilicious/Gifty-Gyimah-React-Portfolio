import React from "react";

export default function About(){
    return(
        <main class="about mt-20 mb-10">
        <section class="container mx-auto p-10 md:p-20 transform duration-500">
          <div class="flex flex-wrap md:flex-nowrap  mx-auto">
            <div class="lg:p-10 lg:my-10 lg:mx-5">
              <h1 class="text-2xl font-semibold text-gray-800 mb-6">Hi, I'm Gifty!</h1>
              <p class="text-gray-700 mt-2">
                I'm a software developer who loves to build responsive websites and awesome applications. I specialize in
                Full Stack development and enjoy seeing projects through from beginning to end.
              </p>
              <p class="text-gray-700 mt-4">
                Besides English, I'm fluent in many other languages such as HTML, CSS, and JavaScript. I also have
                experience in the NodeJS framework and data management tools like SQL. Feel free to look through some of the
                projects I've worked on.
              </p>
              <a href='./portfolio.html'>
                <button
                  class="mt-4 mb-4 py-3 px-4 border-gray-800 border-2 bg-transparent text-md text-gray-700 rounded-sm hover:bg-gray-800 hover:text-gray-100 transition duration-300">
                  LEARN MORE
                </button>
              </a>
            </div>
            <img class="w-full md:w-100 h-auto" src="./assets/images/about-portrait.jpg"
              alt="Gifty typing on laptop outside"/>
          </div>
        </section>
      </main>
    )
}