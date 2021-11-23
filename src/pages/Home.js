import React from "react";


export default function Home(){

    return(
        <div>
            <section class="hero-image relative">
    <img src="./assets/images/hero-image-3.jpg" alt="Hero image" />
  </section>


  <section class="bg-gray-50 pt-16">
    <div class="container mx-auto pb-32">

      <div class="pt-24 sm:w-3/4 lg:w-1/2 mx-auto px-8">
        <div class="divider">
          <h2 class="text-gray-600 text-2xl text-center ">Some of my latest projects</h2>
        </div>
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
      </div>
    </div>
  </section>
        </div>
    )
}