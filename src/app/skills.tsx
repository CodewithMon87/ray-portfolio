"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  ShoppingCartIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { useEffect, useState } from "react";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "I build modern, engaging, and responsive web experiences that bring ideas to life. Using tools like WordPress, ReactJS, and Magento 2, I create seamless digital solutions—from sleek websites to powerful online stores—that combine performance with an exceptional user experience.",
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Development",
    children:
      "I create powerful e-commerce solutions that help businesses grow and sell online with confidence. From Magento 2 development to custom WordPress stores, I design and manage seamless shopping experiences that boost performance, streamline operations, and keep customers engaged.",
  },
  {
    icon: CubeTransparentIcon,
    title: "UI/UX Design",
    children:
      "I craft engaging and user-friendly designs that blend creativity with functionality. From wireframes to polished interfaces, I focus on creating digital experiences that are visually appealing, easy to navigate, and tailored to user needs.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO-Friendly Development",
    children:
      "I build websites that don’t just look great but also get found. By combining clean code, fast performance, and SEO best practices, I create digital experiences that rank higher in search results and attract the right audience—driving visibility, traffic, and growth.",
  },
];

export function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section className="px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase transition-transform duration-700 ease-out
          transform opacity-0 translate-y-5"
          style={{ ...(show && { opacity: 1, transform: "translateY(0)" }) }}
        >
          My key areas of expertise.
        </Typography>

        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12 transition-all duration-700 ease-out transform opacity-0 translate-y-5"
          style={{ ...(show && { opacity: 1, transform: "translateY(0)" }) }}
        >
          My key expertise is in frontend development, where I combine
          creativity and technical skill to craft user-friendly websites and
          applications.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((props, idx) => (
          <div
            key={idx}
            className={`transition-all duration-1000 ease-out transform
              ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ transitionDelay: `${idx * 200}ms` }} // staggered
          >
            <SkillCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
