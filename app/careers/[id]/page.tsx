import React from "react";
import {Geist, Poppins} from "next/font/google";
import Link from "next/link";
import {redirect} from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins'
});

export default async function CareerPage({ params }: { params: Promise<{ id: string }> }){
  const { id } = await params;
  const jobId = id;

  let jobName = "";
  let jobDesc = "";
  let jobReq = "";
  let jobSalary = "";

  switch(jobId){
    case "head-cook":
      jobName = "Head Cook";
      jobDesc = "As the Executive Chef of Cimone Lounge, you are the creative and operational force"
        + " behind our kitchen. You will be responsible for designing seasonal fine-dining menus, "
        + "managing back-of-house staff, and ensuring that every plate meets our Michelin-level standard "
        + "of perfection. You will manage food costs, build vendor relationships for premium ingredients, "
        + "and maintain an immaculate, disciplined kitchen environment."
      jobReq = "5+ years of leadership experience in a fine-dining or luxury hotel kitchen. "
        + "Deep knowledge of culinary techniques, plating aesthetics, and kitchen management."
      jobSalary = "$85,000 – $110,000 / year"
      break;

    case "junior-cook":
      jobName = "Junior Cook";
      jobDesc = "The Junior Cook is the backbone of our daily kitchen operations. Working closely"
        + " under the Executive Chef and Sous Chef, you will master the art of mise en place"
        + " (ingredient preparation), manage your specific kitchen station during high-pressure service hours,"
        + " and assist with precise plating. This is a high-growth role designed for passionate culinary"
        + " professionals looking to elevate their technique."
      jobReq = "1–2 years of culinary experience or a degree from a recognized culinary arts program. "
        + "Ability to work fast, maintain strict hygiene standards, and follow complex recipes perfectly."
      jobSalary = "$35,000 – $45,000 / year"
      break;

    case "waiter":
      jobName = "Waiter";
      jobDesc = "As a Fine Dining Server at Cimone Lounge, you are the face of our guest experience."
        + " You will guide guests through our tasting menus, provide expert wine pairing recommendations,"
        + " and deliver anticipatory, invisible service. You must read the table’s mood, adapt to VIP clients,"
        + " and ensure a seamless, elegant dining atmosphere from the moment guests are seated until"
        + " their departure"
      jobReq = "2+ years of front-of-house experience in a high-end dining establishment. "
        + "Extensive knowledge of wine, spirits, and allergy management."
      jobSalary = "$50,000 – $75,000+ / year"
      break;

    default:
      redirect("/careers");
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="container bg-white card rounded-3">
        <div className="container">
          <br /> <br />

          <h2 className={`${poppins.className} text-center text-dark fw-bold`}> {jobName} </h2>

          <ul className={`${poppins.className} text-dark fs-5`}>
            <li> {jobDesc} </li>
            <li> Requirements : {jobReq} </li>
            <li> Salary : {jobSalary} </li>
          </ul>

          <br />

          <span className={`${poppins.className} text-dark fs-5`}>
            Send us your CV at: <span className="text-primary">hiring@cimonepalace.id</span>
          </span>

          <br /> <br />

          <Link href="/careers" className={`${poppins.className} text-primary fs-5 `}>
            {"<< Back to careers page"}
          </Link>

          <br /> <br />
        </div>
      </div>
    </div>
  );
}