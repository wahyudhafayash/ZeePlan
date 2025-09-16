"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";

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
  const { user } = useUser();

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
      {!user ? (
        <SignInButton mode="modal">
          <Button className="bg-gradient-to-r from-primary to-secondary text-white cursor-pointer">
            Get Started
          </Button>
        </SignInButton>
      ) : (
        <Link href="/create-plan">
          <Button className="bg-gradient-to-r from-primary to-secondary text-white cursor-pointer">
            Create New Plan
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
