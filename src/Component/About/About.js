import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-col p-10 md:flex-row items-center justify-center md:justify-between gap-10 min-h-[80vh] p-2">
      <div className="w-full p-10 md:w-1/2 h-full  flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl md:text-7xl font-bold">About Us</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center">
          Welcome to Keska Global Trade, your passport to a world of aromatic
          delights! We take pride in sourcing and delivering the finest spices
          from across the globe, ensuring each jar is a flavorful journey in
          itself. Our commitment to quality and authenticity is woven into the
          fabric of Keska, bringing you the essence of diverse culinary
          cultures. At Keska Global Trade, we believe in elevating your culinary
          experiences with the purest, handpicked spices, transforming every
          dish into a masterpiece. Join us on this flavorful adventure, where
          passion for spice meets a commitment to excellence. Spice up your life
          with Keska Global Trade - where taste knows no boundaries!
        </p>

        <div className="flex">
          <button className="px-3 md:px-6 py-2 md:py-3 bg-red-500 text-white text-lg md:text-xl rounded-lg">
            <Link to="/readmore">Read More</Link>
          </button>
        </div>
      </div>
      <div className="w-full px-5 md:w-1/2 h-full flex items-center justify-center ">
        <img
          className="w-full md:w-[400px] h-[400px] object-cover object-center rounded-2xl "
          src="https://i.ibb.co/vvp5fs2/spice.png"
          alt="About"
        />
      </div>
    </div>
  );
};

export default About;
