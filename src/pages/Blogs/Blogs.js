import React from "react";

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-700">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What are the different ways to manage a state in a React application?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              The Four Kinds of React State to Manage
              <ol className="">
                <li>1. Local state </li>
                <li>2. Global state </li>
                <li>3. Server state </li>
                <li>4. URL state</li>
              </ol>
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
            <p className="md:pl-0 md:col-span-7">
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is
              a method by which an object can inherit the properties and methods of another object. Traditionally, in
              order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
            <p className="md:pl-0 md:col-span-7">
              The main objective of unit testing is to isolate written code to test and determine if it works as
              intended. Unit testing is an important step in the development process, because if done correctly, it can
              help detect early flaws in code which may be more difficult to find in later testing stages.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">React vs. Angular vs. Vue?</h3>
            <p className="md:pl-0 md:col-span-7">
              Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.
              Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a
              progressive open-source front-end JavaScript framework created by Evan You.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
