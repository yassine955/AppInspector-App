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
              <b>Disclaimer:</b> <br />
              {description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
