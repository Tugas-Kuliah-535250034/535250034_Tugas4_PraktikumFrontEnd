import {Geist, Poppins} from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins'
});

export default function Hiring() {
  return (
    <div>
      <div className="container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-start text-start container"
             style={{height: '35vh'}}
        >
          <h2 className="fw-bold display-3"> CAREERS </h2>
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <br /> <br />

          <h2 className={`text-dark ${poppins.className} fw-bold fs-2`}> Open Position (3) </h2>

          <br /> <br />

          <Link href="/careers/head-cook" className="card w-100 text-start">
            <div className={`card text-dark ${poppins.className}`}>
              <div className="container">
                <h3 className="fw-bold opacity-75 text-primary fs-4"> Cimone Lounge - Head Cook </h3>
                <span> Full Time - Location: China, Singapore and Saudi Arabia </span>
              </div>
            </div>
          </Link>

          <br /> <br />

          <Link href="/careers/junior-cook" className="card w-100 text-start">
            <div className={`card text-dark ${poppins.className}`}>
              <div className="container">
                <h3 className="fw-bold opacity-75 text-primary fs-4"> Cimone Lounge - Junior Cook </h3>
                <span> Contract - Location: South Korea </span>
              </div>
            </div>
          </Link>

          <br /> <br />

          <Link href="/careers/waiter" className="card w-100 text-start">
            <div className={`card text-dark ${poppins.className}`}>
              <div className="container">
                <h3 className="fw-bold opacity-75 text-primary fs-4"> Cimone Lounge - Waiter </h3>
                <span> Contract - Location: Malaysia and Indonesia </span>
              </div>
            </div>
          </Link>

          <br /> <br />
        </div>
      </div>
    </div>
  );
}