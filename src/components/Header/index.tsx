"use client";

import Image from "next/image";
import Link from "next/link";
import { Cart } from "../Cart";

export const Header = () => {
  return (
    <header className="container flex items-center justify-center mt-10 mb-8">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.svg"}
          width={128}
          height={52}
          alt={"app logo"}
        />
      </Link>
      <Cart />
    </header>
  );
};
