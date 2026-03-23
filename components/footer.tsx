"use client";

import Link from "next/link";
import { Facebook, Mail, ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Define footer links with Workshop instead of Team
  const footerLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.products"), href: "#products" },
    { name: t("nav.certifications"), href: "#certifications" },
    { name: "Our Workshop", href: "#team" }, // Changed from Team to Our Workshop but keeping the same anchor
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-blue to-[#001240] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <Image
                src="/images/VleraLeo.jpeg"
                alt="Vlera Ekskluziv Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://facebook.com/VleraPvc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:info@vlerapvc.ch"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/41762131916"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .22 5.31.22 11.84c0 2.08.54 4.11 1.57 5.9L0 24l6.45-1.69a11.8 11.8 0 0 0 5.61 1.43h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.39-8.42Zm-8.46 18.26h-.01a9.79 9.79 0 0 1-4.99-1.37l-.36-.21-3.83 1 1.03-3.73-.24-.38a9.83 9.83 0 0 1-1.5-5.2C2.16 6.39 6.61 1.94 12.06 1.94c2.62 0 5.08 1.02 6.94 2.88a9.74 9.74 0 0 1 2.87 6.93c0 5.46-4.44 9.99-9.81 9.99Zm5.47-7.49c-.3-.15-1.79-.88-2.06-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.19-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.45.13-.59.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.58-.9-2.17-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.5.08-.76.38-.26.3-1 1-.99 2.43 0 1.43 1.02 2.8 1.16 2.99.15.2 2 3.06 4.84 4.29.68.29 1.21.47 1.62.6.68.22 1.29.19 1.77.12.54-.08 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wide">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1.5 text-gray-400 group-hover:text-white transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wide">
              {t("footer.contactInfo")}
            </h3>
            <address className="not-italic text-gray-300 space-y-3 text-sm">
              <p className="flex items-start">
                <span className="block w-20 text-gray-400">Address:</span>
                <span>
                  Mara Ugrinova 32
                  <br />
                  Gostivar, North Macedonia, 1230
                </span>
              </p>
              <p className="flex items-start">
                <span className="block w-20 text-gray-400">Phone:</span>
                <span>
                  +41 76 213 19 16
                  <br />
                  +389 70 378 389
                </span>
              </p>
              <p className="flex items-start">
                <span className="block w-20 text-gray-400">Email:</span>
                <span>info@vlerapvc.ch</span>
              </p>
            </address>
          </div>

          {/* Business Hours Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wide">Business Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Monday - Friday</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Saturday</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link
                  href="#contact"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Vlera Ekskluziv. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
