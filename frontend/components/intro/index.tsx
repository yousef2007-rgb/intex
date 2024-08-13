"use client";
import React, { useState, useEffect } from "react";

export const intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component cleanup
  }, []);
  return (
    <div className="px-2">
      <div className="relative w-full mx-auto  h-[50vh] transition-all overflow-hidden rounded-xl">
        <div
          className="flex transition-transform h-full rounded-xl duration-300 ease-in-out transform"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          <div className="w-full h-full flex-shrink-0">
            <img
              className="object-cover w-full rounded-lg h-full"
              src="/images/hero.jpg"
              alt="Slide 1"
            />
          </div>
          <div className="w-full h-full flex-shrink-0">
            <img
              className="object-cover rounded-lg w-full h-full"
              src="/images/hero2.jpg"
              alt="Slide 1"
            />
          </div>
          <div className="w-full h-full flex-shrink-0">
            <img
              className="object-cover rounded-lg w-full h-full"
              src="/images/hero3.jpg"
              alt="Slide 1"
            />
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`mx-2 w-4 h-4 rounded-full ${
                index === currentSlide
                  ? "bg-gray-500" // Active dot color
                  : "bg-gray-300" // Inactive dot color
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
