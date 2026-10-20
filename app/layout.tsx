import type { Metadata } from "next";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // 1. CSS framework
import "./globals.css";                        // 2. CSS global milik kita
import BootstrapClient from "@/components/BootstrapClient";

export const metadata: Metadata = {
    title: "Cimone Palace | Company Profile",
    description: "Proyek Praktikum",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="id">
        <body>
        <main className="container py-4 grow">{children}</main>
        <BootstrapClient />
        </body>
        </html>
    );
}