import React from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import Image from "next/image";

export function Navbar() {
  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/raylogos.jpg" // <-- your logo
            alt="CodeWithRay Logo"
            width={200}
            height={200}
            className="w-10 h-10 object-contain"
          />
          <Typography color="blue-gray" className="text-2xl font-bold">
            CodeWithRay
          </Typography>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
