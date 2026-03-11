"use client"

import { Building2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t("about.title")}</h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">{t("about.whoWeAre.title")}</h3>
          <p className="text-gray-600 leading-relaxed">{t("about.whoWeAre.p1")}</p>
          <p className="text-gray-600 leading-relaxed">{t("about.whoWeAre.p2")}</p>
          <div className="flex items-center space-x-4 text-gray-700">
            <Building2 className="h-6 w-6" />
            <span className="font-medium">{t("about.established")}</span>
          </div>
        </div>

        <div className="bg-gray-100 border-l-4 border-brand-blue p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("about.values.title")}</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("about.values.quality.title")}</h4>
                <p className="text-gray-600">{t("about.values.quality.description")}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("about.values.innovation.title")}</h4>
                <p className="text-gray-600">{t("about.values.innovation.description")}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("about.values.customerSatisfaction.title")}</h4>
                <p className="text-gray-600">{t("about.values.customerSatisfaction.description")}</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("about.values.sustainability.title")}</h4>
                <p className="text-gray-600">{t("about.values.sustainability.description")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
