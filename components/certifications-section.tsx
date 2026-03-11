"use client"

import { Award, Shield, CheckCircle, Building2, Layers, Lock, Droplets } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t("certifications.title")}</h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">{t("certifications.our.title")}</h3>
          <p className="text-gray-600">{t("certifications.our.description")}</p>

          <div className="space-y-4">
            <div className="flex items-start">
              <Award className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("certifications.iso.title")}</h4>
                <p className="text-gray-600">{t("certifications.iso.description")}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("certifications.ce.title")}</h4>
                <p className="text-gray-600">{t("certifications.ce.description")}</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-8 w-8 text-brand-blue mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">{t("certifications.energy.title")}</h4>
                <p className="text-gray-600">{t("certifications.energy.description")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">{t("partners.title")}</h3>
          <p className="text-gray-600">{t("partners.description")}</p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="h-12 w-12 text-brand-blue" />
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 mb-2">{t("partners.profine.title")}</div>
                <p className="text-gray-600 text-sm">{t("partners.profine.description")}</p>
              </div>
            </div>

            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Layers className="h-12 w-12 text-brand-blue" />
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 mb-2">{t("partners.glasstech.title")}</div>
                <p className="text-gray-600 text-sm">{t("partners.glasstech.description")}</p>
              </div>
            </div>

            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-12 w-12 text-brand-blue" />
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 mb-2">{t("partners.securelock.title")}</div>
                <p className="text-gray-600 text-sm">{t("partners.securelock.description")}</p>
              </div>
            </div>

            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Droplets className="h-12 w-12 text-brand-blue" />
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 mb-2">{t("partners.ecoseal.title")}</div>
                <p className="text-gray-600 text-sm">{t("partners.ecoseal.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
