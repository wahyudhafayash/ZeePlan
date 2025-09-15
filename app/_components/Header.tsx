import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src="/logoremoved.png" alt="Logo" width={45} height={45} />
        <h2 className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          ZeePlan
        </h2>
      </div>

      {/* Menus */}
      <div className="flex gap-8 items-center">
        {menuOptions.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2 className="text-lg font-semibold hover:scale-105 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all cursor-pointer">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <SignInButton mode="modal">
        <Button className="bg-gradient-to-r from-primary to-secondary text-white">
          Get Started
        </Button>
      </SignInButton>
    </div>
  );
};

export default Header;
