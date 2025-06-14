import { NavbarComponent } from './Navbar';

export const BodyComp = ({ children }: { children: any }) => {
  const description =
    'De informatie op deze website is uitsluitend bedoeld voor algemene informatieve doeleinden. Hoewel wij ons inspannen om de informatie actueel en correct te houden, doen wij geen enkele uitspraak of geven geen enkele garantie, noch uitdrukkelijk noch stilzwijgend, met betrekking tot de volledigheid, nauwkeurigheid, betrouwbaarheid, geschiktheid of beschikbaarheid van de website of de informatie, producten, diensten of gerelateerde afbeeldingen op de website voor welk doel dan ook. Elk vertrouwen dat u stelt in dergelijke informatie is derhalve uitsluitend voor eigen risico.';
  return (
    <div>
      <NavbarComponent />
      <div className="pb-28">{children}</div>
      <div
        id="bottom-banner"
        className="fixed bottom-0 inset-x-0 z-50 w-full bg-white/90 backdrop-blur-sm px-4 py-3 sm:px-8 sm:py-4 shadow-inner"
      >
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs sm:text-sm text-darkBlueText leading-relaxed">
            <strong>Disclaimer:</strong>
            <br />
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
