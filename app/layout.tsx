import type { Metadata } from "next";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // 1. CSS framework
import "./globals.css";                        // 2. CSS global milik kita
import { Geist, Geist_Mono } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import {NavBar} from "@/components/Navbar";
import {FootBar} from "@/components/FooterBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cimone Palace | Company Profile",
    description: "Proyek Praktikum",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className={`body-gradient text-white d-flex flex-column min-vh-100v`}>
                <NavBar />
                <main className="flex-grow-1">{children}</main>
                <BootstrapClient />
                <FootBar />
            </body>
        </html>
    );
}