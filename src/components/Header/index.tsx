"use client";

import { Handbag } from "@phosphor-icons/react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="container flex items-center justify-between mt-10">
      <Image
        src={"/assets/logo.svg"}
        width={128}
        height={52}
        alt={"app logo"}
      />
      <div className="p-3 bg-gray-elements">
        <Handbag className="text-gray-icon" size={24} />
      </div>
    </header>
  );
};
