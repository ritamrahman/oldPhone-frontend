import React from "react";

const SocialLogin = () => {
  return (
    <>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <a
        className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        // style="background-color: #3b5998"
        href="#!"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {/* <!-- Facebook --> */}
        <img
          className="w-5 mr-2"
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          alt=""
        />
        Continue with Google
      </a>
    </>
  );
};

export default SocialLogin;
