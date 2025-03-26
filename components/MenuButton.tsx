/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

export default function AnimatedFullscreenMenu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="z-50 fixed top-4 right-4 p-2 focus:outline-none"
      >
        {isOpen ? (
          <MdClose className="h-8 w-8 text-gray-900 transition-transform duration-1000 transform" />
        ) : (
          <HiOutlineBars3BottomRight className="h-8 w-8 text-[#F4F3E1] transition-transform duration-1000 transform" />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-[#F4F3E1] bg-opacity-80 flex flex-col items-center justify-center transition-all duration-1000 z-30 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="space-y-6 text-2xl text-gray-900">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#concept"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Concept
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 flex space-x-2 gap-5">
          <Link passHref
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Instagram.png"
              alt="Instagram"
              className="h-7 w-7"
            />
          </Link>
          <Link passHref
            href="https://keisho.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/KeishoTech.png"
              alt="Instagram"
              className="h-7 w-7"
            />
          </Link>
          <Link passHref
            href="https://www2.spc.ritsumei.ac.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/School.png"
              alt="School"
              className="h-7 w-7"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
