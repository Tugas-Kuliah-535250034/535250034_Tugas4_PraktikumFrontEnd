'use client';

import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const NavBar = () => {
  const current = usePathname();
  const check = (path: string) => current === path;

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark bg-opacity-75 top-0 start-0 w-100">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center m-0">
          <Image src="/logo.png" width={250} height={50} alt="Logo" />
        </div>

        <button className="navbar-toggler"
                type="button"
                onClick={() => setOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className={`navbar-nav ms-auto ${geistSans.className} fw-bold gap-4 align-items-center`}>
            <li className="nav-item">
              <Link className={`nav-link ${check('/') ? 'active' : ''}`}
                    aria-current={check('/') ? 'page' : undefined}
                    href="/"
              > Home </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${check('/careers') ? 'active' : ''}`}
                    aria-current={check('/careers') ? 'page' : undefined}
                    href="/careers"
              > Careers </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${check('/about') ? 'active' : ''}`}
                    aria-current={check('/about') ? 'page' : undefined}
                    href="/about"
              > About Us </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}