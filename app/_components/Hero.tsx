"use client";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowDown, Globe2, Landmark, Plane, Send } from "lucide-react";
import React from "react";

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire Me Where to go",
    icon: <Plane className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Discover Hidden gems",
    icon: <Landmark className="text-orange-500 h-5 w-5" />,
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className="text-yellow-600 h-5 w-5" />,
  },
];

const Hero = () => {
  const router = useRouter();

  const { user } = useUser();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
  };

  return (
    <div className="mt-20 w-full flex justify-center">
      {/* Wrapper content */}
      <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <h1 className="text-xl md:text-5xl font-bold">
          Plan your trips effortlessly with{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ZeePlan
          </span>{" "}
          - Your ultimate travel companion!
        </h1>

        {/* Subheading */}
        <p className="text-lg font-semibold">
          Tell me what you want, and I'll handle the rest: Flight, Hotels, trip
          Planner - all in seconds
        </p>

        {/* Input box */}
        <div className="w-full">
          <div className="border rounded-2xl p-4 shadow relative">
            <Textarea
              placeholder="Create a trip for Paris From New York"
              className="w-full font-semibold h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />

            <div className="flex justify-between items-center gap-2">
              {/* suggestion list */}
              <div className="flex gap-2">
                {suggestions.map((suggestions, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white duration-200 transition-all"
                  >
                    {suggestions.icon}
                    <h2 className="text-xs font-medium ">
                      {suggestions.title}
                    </h2>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => onSend()}
                size={"icon"}
                className="bg-gradient-to-r from-primary to-secondary cursor-pointer "
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <h2 className="my-7 mt-14 flex gap-2 text-center">
          Not Sure where to start? <strong>See how it works</strong>
          <ArrowDown />
        </h2>

        {/* Video section */}
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.example.com/dummy-video"
          thumbnailSrc="https://media.discordapp.net/attachments/887154883512401932/1417246801647632404/image.png?ex=68c9c970&is=68c877f0&hm=7e2360c2a1e29cfefae791bc6e0be1c62ce0d55c552877f721f58bb24a698793&=&format=webp&quality=lossless&width=1036&height=544"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>
    </div>
  );
};

export default Hero;
