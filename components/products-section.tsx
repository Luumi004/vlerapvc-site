"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-context";

export default function ProductsSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: t("products.windows.title"),
      description: t("products.windows.description"),
      features: [
        t("products.windows.features.f1"),
        t("products.windows.features.f2"),
        t("products.windows.features.f3"),
        t("products.windows.features.f4"),
      ],
      image: "/images/pvc-profile.jpg",
    },
    {
      id: 2,
      name: t("products.doors.title"),
      description: t("products.doors.description"),
      features: [
        t("products.doors.features.f1"),
        t("products.doors.features.f2"),
        t("products.doors.features.f3"),
        t("products.doors.features.f4"),
      ],
      image: "/images/House-door.jpg",
    },
    {
      id: 3,
      name: t("products.sliding.title"),
      description: t("products.sliding.description"),
      features: [
        t("products.sliding.features.f1"),
        t("products.sliding.features.f2"),
        t("products.sliding.features.f3"),
        t("products.sliding.features.f4"),
      ],
      image:
        "https://www.profine-group.com/cms16/files/Objekt_7-KoemaPan.jpg?w=268&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      name: t("products.custom.title"),
      description: t("products.custom.description"),
      features: [
        t("products.custom.features.f1"),
        t("products.custom.features.f2"),
        t("products.custom.features.f3"),
        t("products.custom.features.f4"),
      ],
      image: "/images/Custom-solution.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t("products.title")}
        </h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-gray-600">
          {t("products.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-brand-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-[28rem]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <h4 className="font-medium text-gray-800 mb-2">
                {t("features")}:
              </h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-brand-blue text-white p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {t("products.profine.title")}
            </h3>
            <p className="mb-4">{t("products.profine.p1")}</p>
            <p>{t("products.profine.p2")}</p>
          </div>
          <div className="bg-brand-white p-8 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-800 font-bold text-xl mb-2">
                {t("products.profine.official")}
              </div>
              <div className="text-gray-600">Profine Group</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
