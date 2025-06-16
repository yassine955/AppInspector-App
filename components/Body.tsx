'use client';

import { NavbarComponent } from './Navbar';
import { useEffect, useRef, useState } from 'react';

export const BodyComp = ({ children }: { children: any }) => {
  const description =
    'De informatie op deze website is uitsluitend bedoeld voor algemene informatieve doeleinden. Hoewel wij ons inspannen om de informatie actueel en correct te houden, doen wij geen enkele uitspraak of geven geen enkele garantie, noch uitdrukkelijk noch stilzwijgend, met betrekking tot de volledigheid, nauwkeurigheid, betrouwbaarheid, geschiktheid of beschikbaarheid van de website of de informatie, producten, diensten of gerelateerde afbeeldingen op de website voor welk doel dan ook. Elk vertrouwen dat u stelt in dergelijke informatie is derhalve uitsluitend voor eigen risico.';
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(80); // default fallback

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarComponent />
      </div>

      {/* Scrollable content below navbar, above footer */}
      <main className="flex-grow overflow-y-auto pt-[140px]">{children}</main>

      <div
        ref={bannerRef}
        id="bottom-banner"
        className="fixed bottom-0 inset-x-0 z-50 w-full backdrop-blur-sm py-2 sm:py-4 border-t"
      >
        <div className="w-full px-[5%] lg:px-[20%]">
          <p className="align-justify text-[12px] lg:text-[13px] leading-snug text-darkBlueText">
            <strong>Disclaimer:</strong>
            <br />
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
