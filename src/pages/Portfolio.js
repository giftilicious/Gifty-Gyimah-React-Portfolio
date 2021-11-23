import React from "react";

export default function Portfolio(){
    return(
        <section class="bg-gray-50 pt-8">
    <div class="container mx-auto pb-32">
    
      <div class="pt-24 sm:w-3/4 lg:w-1/2 mx-auto px-8">
        <h2 class="text-gray-800 text-2xl text-center font-semibold">Projects</h2>
        <p class="text-gray-700 text-center mt-4">
          Check out some of my latest projects. I have created and contributed to various projects, everything from
          backend databases to full stack applications.
        </p>
      </div>
     
      <div class="p-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-16 justify-items-center">
       
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://inout-app.herokuapp.com/" target="_blank"><img class="w-full"
              src="./assets/images/in-or-out.jpg" alt="In or Out Project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">In Or Out</div>
            <p class="text-gray-700 text-base">
              A dynamic web application that generates indoor and outdoor activities based on user preference.
            </p>
          </div>
        </div>
       
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://github.com/giftilicious/Team-Profile-Generator" target="_blank"><img class="w-full"
              src="./assets/images/team-profile.jpg" alt="Team profile project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Team Profile Generator</div>
            <p class="text-gray-700 text-base">
              An application that generates an HTML webpage with summaries of employees on a software engineering team.
            </p>
          </div>
        </div>
      
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://github.com/giftilicious/ecommerce-database" target="_blank"><img class="w-full"
              src="./assets/images/ecommerce.jpg" alt="Ecommerce project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Ecommerce Database</div>
            <p class="text-gray-700 text-base">
              Back-end for an ecommerce site.
            </p>
          </div>
        </div>
      
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://giftilicious.github.io/Travel-Guide/" target="_blank"><img class="w-full"
              src="./assets/images/trailr-portfolio.jpg" alt="Bike trail project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Trailr</div>
            <p class="text-gray-700 text-base">
              Web application for cycling enthusiasts to plan biking trips.
            </p>
          </div>
        </div>
       
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://giftilicious.github.io/Weather-App/" target="_blank"><img class="w-full"
              src="./assets/images/weather-portfolio.jpg" alt="Weather dashboard project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Weather Dashboard</div>
            <p class="text-gray-700 text-base">
              Users are able to check the weather report for multiple cities.
            </p>
          </div>
        </div>
      
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://giftilicious.github.io/Work-Day-Scheduler/" target="_blank"><img class="w-full"
              src="./assets/images/planner-portfolio.jpg" alt="Digital planner project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Digital Planner</div>
            <p class="text-gray-700 text-base">
              Interactive day planner that allows a user to enter tasks for the work day.
            </p>
          </div>
        </div>
    
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://giftilicious.github.io/Coding-Quiz/" target="_blank"><img class="w-full"
              src="./assets/images/quiz-portfolio.jpg" alt="Code quiz game"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Code Quiz</div>
            <p class="text-gray-700 text-base">
              A fun quiz game that tests your coding knowledge.
            </p>
          </div>
        </div>
       
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://github.com/giftilicious/README-Generator" target="_blank"><img class="w-full"
              src="./assets/images/readme-portfolio.jpg" alt="Readme generator project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">README Generator</div>
            <p class="text-gray-700 text-base">
              A generator for developers to quickly and easily create a professional README file.
            </p>
          </div>
        </div>
     
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a href="https://giftilicious.github.io/Password-Generator/" target="_blank"><img class="w-full"
              src="./assets/images/password-portfolio.jpg" alt="Password generator project"/></a>
          <div class="px-6 py-4">
            <div class="text-gray-800 font-semibold text-xl mb-2">Password Generator</div>
            <p class="text-gray-700 text-base">
              A simple application that randomly generates a password based on criteria the user inputs.
            </p>
          </div>
        </div>
        </div>
    </div>
  </section>
    )
}