"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-context";

export default function TeamSection() {
  const { t } = useLanguage();

  const workshopImages = [
    {
      src: "/images/workshop-1.jpg",
      alt: "Main workshop production area with PVC window and door frames",
    },
    {
      src: "/images/workshop-2.jpeg",
      alt: "Workshop technician working on PVC window assembly",
    },
    {
      src: "/images/workshop-3.jpg",
      alt: "Industrial machinery and equipment for PVC manufacturing",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t("team.title")}
        </h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          {t("team.workshop.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshopImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t("team.workshop.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
