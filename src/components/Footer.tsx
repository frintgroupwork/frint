"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="#" className="inline-block">
              <Image
                src="/frint_logo.svg" // Make sure to add your logo to public folder
                alt="FRINT Logo"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              FRINT is the preparation platform to secure job interview.
            </p>
            <p className="text-gray-500 text-sm">
              Copyright © 2024 All Rights Reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Contact Us</h3>
            <div className="space-y-2 text-gray-600 text-sm">
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                #12, Street 2001, Phum Paprek Khang Tboung,
                <br />
                Sangkat Kakab, Khan Porsenchey, Phnom Penh,
                <br />
                Cambodia
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +855 78 974 850
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                frint.groupwork@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Follow us on</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://t.me"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="w-6 h-6" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;