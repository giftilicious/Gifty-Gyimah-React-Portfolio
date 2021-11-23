import React from "react";

export default function Contact(){
return(
    <main class="pb-20">
    <section class="container mx-auto p-10 md:p-20 transform duration-500">
      <div class="flex flex-wrap md:flex-nowrap  mx-auto">
        <div class="lg:p-10 lg:my-10 lg:mx-5">
          <h1 class="text-2xl font-semibold text-gray-800 mb-6">Contact Me</h1>
          <p class="text-gray-700 mt-2">
            Looking for a creative, think-outside-the-box developer who will blow you away with her impressive skills
            and talents? Get in touch
            with me!
          </p>
         
          <div class="flex flex-wrap gap-6 mb-8">
            <a href="https://www.linkedin.com/in/giftygyimah/"><img alt="LinkedIn"
                src="./assets/images/LinkedIn_icon.jpg" width="50" height="50"/></a>
            <a href="mailto:giftilicious.dev@gmail.com"><img alt="Email" src="./assets/images/Email_icon copy.jpg"
                width="50" height="50"/></a>
            <a href="https://github.com/giftilicious"><img alt="GitHub" src="./assets/images/GitHub_icon.jpg" width="50"
                height="50"/></a>
          </div>
        </div>
        <img class="hidden md:flex w-full md:w-100 h-auto" src="./assets/images/contact-me.gif" alt="Contact me" />
        <div class="flex md:hidden w-full md:w-100 h-auto">
          <img src="./assets/images/contact-me_2.gif" alt="Contact me" />
        </div>
      </div>
    </section>
  </main>
)
}