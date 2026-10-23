import Image from "next/image";
import {Geist, Poppins} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-poppins'
});

export default function Home() {
  return (
    <div>
      <div className={`bg-light text-dark fw-bold text-center ${poppins.className}`}>
        <Image src="/main-banner.jpeg"
               width={2752}
               height={1536}
               alt="banner"
               style={{ width: '100%', height: 'auto' }}
               className="d-inline-block"
        />
      </div>

      <br />

      <div className="d-flex flex-row gap-5 justify-content-center w-100 text-center">
        <div className="card col-2 rounded-5 border-3 border-dark">
          <div className="card-body">
            <span className={`text-dark ${poppins.className} fw-bold text-center fs-5`}>
              Restaurants
            </span>
            <br />
            <span className={`text-dark ${geistSans.className} text-center fs-5`}> 100+ </span>
          </div>
          <br />
        </div>

        <div className="card col-2 rounded-5 border-3 border-dark">
          <div className="card-body">
            <span className={`text-dark ${poppins.className} fw-bold text-center fs-5`}>
              Countries
            </span>
            <br />
            <span className={`text-dark ${geistSans.className} text-center fs-5`}> 20 </span>
          </div>
          <br />
        </div>

        <div className="card col-2 rounded-5 border-3 border-dark">
          <div className="card-body">
            <span className={`text-dark ${poppins.className} fw-bold text-center fs-5`}>
              Flagship
            </span>
            <br />
            <span className={`text-dark ${geistSans.className} text-center fs-5`}> 3 </span>
          </div>
          <br />
        </div>
      </div>

      <br />

      <div className="container card w-55 rounded-5 border-3 border-dark">
        <div className="card-body">
          <h2 className={`text-dark ${poppins.className} fw-bold text-center`}> Discover Our Flagship Brands </h2>
          <br />
          <div id="popularBrands" className="carousel slide carousel-dark">
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <Image
                  src="/brand1.png"
                  alt="brand1"
                  width={500}
                  height={500}
                  style={{ width: '30%', height: 'auto' }}
                  className="d-inline-block"
                />
              </div>

              <div className="carousel-item text-center">
                <Image
                  src="/brand2.png"
                  alt="brand2"
                  width={500}
                  height={500}
                  style={{ width: '30%', height: 'auto' }}
                  className="d-inline-block"
                />
              </div>

              <div className="carousel-item text-center">
                <Image
                  src="/brand3.png"
                  alt="brand3"
                  width={500}
                  height={500}
                  style={{ width: '30%', height: 'auto' }}
                  className="d-inline-block"
                />
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#popularBrands" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#popularBrands" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <br />

      </div>

      <br />
    </div>
  );
}