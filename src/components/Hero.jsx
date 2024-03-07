import React from "react";
const Hero = () => {
  return (
    <section className="relative bg-center bg-no-repeat h-screen w-full pb-12 dark:bg-gray-90 dark:text-white">
      <div className="max_pad_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem">Responsive Navbar</h1>
        <p>
          Here You can see a responsive navbar with light-dark mode as well as
          for mobile layout its full responsive
        </p>

        <button className="btn_secondary_rounded mt-12">vote for me</button>
      </div>
    </section>
  );
};

export default Hero;
