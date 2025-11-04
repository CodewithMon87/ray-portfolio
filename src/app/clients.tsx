"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "html",
  "css",
  "Bootstrap",
  "Foundation",
  "JavaScript",
  "Nextjs",
  "Tailwind",
  "ReactJS",
  "Magento",
  "Wordpress",
  "Laravel",
  "MySQL",
];

export function Clients() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography
          variant="h6"
          color="blue-gray"
          className={`mb-8 transition-all duration-700 ease-out transform
    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
  `}
        >
          My Tech Stack
        </Typography>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {CLIENTS.map((logo, key) => (
            <div
              key={key}
              className={`flex flex-col items-center group
                transition-all duration-1000 ease-out
                ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }
              `}
              style={{ transitionDelay: `${key * 150}ms` }} // staggered effect
            >
              <Image
                alt={logo}
                width={768}
                height={768}
                className="w-20 md:w-28 transition-transform duration-500 ease-in-out group-hover:scale-150"
                src={`/logos/logo-${logo}.png`}
              />
              <Typography
                variant="small"
                color="blue-gray"
                className="mt-2 text-sm font-medium capitalize"
              >
                {logo}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
