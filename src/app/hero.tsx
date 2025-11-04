"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade in after mount
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className={`mb-4 lg:text-5xl !leading-tight text-3xl
              transition-all duration-1000 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>

          <Typography
            variant="lead"
            className={`mb-4 !text-gray-500 md:pr-16 xl:pr-28
              transition-all duration-1000 ease-out delay-300
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            I&apos;m Raymond Sabado, a passionate frontend web developer based
            in Philippines. Here, you&apos;ll get a glimpse of my journey in the
            world of web development, where creativity meets functionality.
          </Typography>
        </div>

        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/main_profile.png`}
          className={`h-[36rem] w-full rounded-xl object-cover
            transition-all duration-1000 ease-out delay-500
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        />
      </div>
    </header>
  );
}

export default Hero;
