import React from "react";
const imgURL =
  "https://images.hindustantimes.com/tech/img/2022/08/10/original/Galaxy_Fold4_Flip4_Buds2pro_PR_main4-845x563_1660141016450.jpg";

const Hero = () => {
  return (
    <section class="relative bg-[url(https://img.freepik.com/premium-photo/cardboard-boxes-with-isolated-white-screen-smartphone-with-living-room-sofa-furniture-shopping-cart-mockup-pink-pastel-background-business-shopping-online-concept-3d-illustration-rendering_10307-1579.jpg?w=826)] bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent "></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong class="block font-extrabold text-rose-700">Dreams Phone.</strong>
          </h1>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
