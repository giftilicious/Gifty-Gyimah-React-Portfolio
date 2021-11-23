import React from "react";

export default function Footer(){
    return(
        <footer class="bg-gray-800 p-10 flex justify-between items-center">
    <h2 class="text-white">Get In Touch!</h2>
    <nav>
      <a href="mailto:giftilicious.dev@gmail.com" class="p-2 text-lg text-white hover:text-gray-100">Email</a>
      <a href="https://www.linkedin.com/in/giftygyimah/" class="p-2 text-lg text-white hover:text-gray-100">LinkedIn</a>
      <a href="https://github.com/giftilicious" class="p-2 text-lg text-white hover:text-gray-100">GitHub</a>
     
    </nav>
  </footer>
    )
}