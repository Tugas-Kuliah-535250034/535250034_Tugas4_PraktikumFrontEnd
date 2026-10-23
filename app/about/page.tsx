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

export default function About() {
  return (
    <div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-start text-start container"
           style={{height: '35vh'}}
      >
        <h2 className="fw-bold display-3"> ABOUT US </h2>
      </div>

      <div className="bg-white">
        <div className="container">
          <br /> <br />

          <div className="d-flex flex-column justify-content-around align-items-center gap-5">
            <div className="col-md-12 d-flex">
              <div className="card bg-light rounded-5 p-4 h-100">
                <h2 className={`text-dark ${poppins.className} fw-bold`}> Our Story </h2>
                <h5 className={`text-dark ${poppins.className}`}>
                  Cimone Palace is a premier global hospitality group specializing in
                  diverse culinary concepts.
                  With a robust portfolio of over 100 successful restaurants across more than 20 countries,
                  we combine operational excellence with innovative gastronomy.
                  From our flagship Cimone Fried Chicken to our rapid-growth Cimone Sanctuary concepts,
                  we are dedicated to scaling world-class dining experiences while maintaining deep roots
                  in local food cultures and uncompromising service standards
                </h5>
              </div>
            </div>

            <div className="row justify-content-center align-items-stretch gap-4 w-100">
              <div className="col-12 col-lg-5">
                <div className="card bg-light rounded-5 p-4 h-100">
                  <h2 className={`text-dark ${poppins.className} fw-bold`}> Our Vision </h2>
                  <h5 className={`text-dark ${poppins.className}`}>
                    <ul>
                      <li>
                        The Experience Focus: To deliver extraordinary culinary experiences across the globe
                        by blending local flavors with world-class hospitality.
                      </li>
                      <li>
                        The Quality Focus: To operate a diverse portfolio of exceptional dining concepts,
                        connecting people through innovative menus, sustainable sourcing, and genuine service.
                      </li>
                      <li>
                        The Fill-in-the-Blank: To provide every guest with unforgettable dining moments by
                        maintaining a relentless commitment to culinary excellence across all our global locations.
                      </li>
                    </ul>
                  </h5>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="card bg-light rounded-5 p-4 h-100">
                  <h2 className={`text-dark ${poppins.className} fw-bold`}> Our Mission </h2>
                  <h5 className={`text-dark ${poppins.className}`}>
                    <ul>
                      <li>
                        The Industry Leader: To be the world’s most respected hospitality group, setting the
                        global standard for dining innovation and operational excellence.
                      </li>
                      <li>
                        The Cultural Impact: To connect cultures and communities worldwide through the
                        universal language of exceptional food.
                      </li>
                      <li>
                        The Fill-in-the-Blank: To become the premier destination for dining style globally,
                        recognized for our dedication to empowering local chefs and redefining modern hospitality.
                      </li>
                    </ul>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <br /> <br />
        </div>
      </div>

    </div>

  );
}