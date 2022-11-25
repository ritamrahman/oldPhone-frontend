import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[url(https://img.freepik.com/premium-photo/cardboard-boxes-with-isolated-white-screen-smartphone-with-living-room-sofa-furniture-shopping-cart-mockup-pink-pastel-background-business-shopping-online-concept-3d-illustration-rendering_10307-1579.jpg?w=826)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-secondaryColor">Dreams Phone.</strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="#"
              className="block w-full rounded bg-baseSecondary px-12 py-3 text-sm font-medium text-primaryColor shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              to="#"
              className="block w-full rounded bg-primaryColor px-12 py-3 text-sm font-medium text-baseSecondary shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
