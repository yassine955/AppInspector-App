import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import { Footer } from "./Footer";
import { NavbarComponent } from "./Navbar";

export const BodyComp = ({
  children,
  results,
}: {
  children: any;
  results: boolean;
}) => {
  const description =
    "De informatie op deze website is uitsluitend bedoeld voor algemene informatieve doeleinden. Hoewel wij ons inspannen om de informatie actueel en correct te houden, doen wij geen enkele uitspraak of geven geen enkele garantie, noch uitdrukkelijk noch stilzwijgend, met betrekking tot de volledigheid, nauwkeurigheid, betrouwbaarheid, geschiktheid of beschikbaarheid van de website of de informatie, producten, diensten of gerelateerde afbeeldingen op de website voor welk doel dan ook. Elk vertrouwen dat u stelt in dergelijke informatie is derhalve uitsluitend voor eigen risico.";
  return (
    // <div
    //   className="w-screen"
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     flexFlow: "column",
    //     minHeight: "80vh",
    //     // Use minHeight instead of height
    //   }}
    // >
    //   {/* <div
    //     style={{
    //       alignItems: "flex-start",
    //     }}
    //     className={`text-red-900 ${results ? "mt-0" : "mt-48"} flex`}
    //   >
    //     {children}
    //   </div> */}
    //   <Banner>{/* <Footer /> */}x</Banner>
    // </div>

    <div>
      <NavbarComponent />
      {children}
      <div
        id="bottom-banner"
        className="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 "
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-darkBlueText">
            <span>
              <b>Disclaimer:</b> <br /> <br />
              {description}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            data-dismiss-target="#bottom-banner"
            type="button"
            className="shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    </div>
  );
};
