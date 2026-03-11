"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t("contact.title")}
        </h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("contact.getInTouch")}
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">
                  {t("contact.phone")}
                </h4>
                <p className="text-gray-600">+389 70 271 289</p>
                <p className="text-gray-600">+389 70 378 389</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">
                  {t("contact.email")}
                </h4>
                <p className="text-gray-600">info@vlerapvc.ch</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">
                  {t("contact.address")}
                </h4>
                <p className="text-gray-600">Mara Ugrinova 32</p>
                <p className="text-gray-600">Gostivar, North Macedonia, 1230</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("contact.location")}
          </h3>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.927093460089!2d20.9196915!3d41.7956282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157153f200a11%3A0x4fd731d12e2d11cf!2sVlera%20Ekskluziv!5e0!3m2!1sen!2smk!4v1718397600000!5m2!1sen!2smk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
