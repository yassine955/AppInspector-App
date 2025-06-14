export const Footer = ({ loading = false }: { loading?: boolean }) => {
  if (loading) {
    return (
      <div className="text-darkBlueText px-10 animate-pulse" style={{ flex: '0 1 40px' }}>
        <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-11/12" />
          <div className="h-3 bg-gray-300 rounded w-10/12" />
          <div className="h-3 bg-gray-300 rounded w-9/12" />
        </div>
      </div>
    );
  }

  return (
    <div className="text-darkBlueText px-10" style={{ flex: '0 1 40px' }}>
      <p>
        <b>Disclaimer:</b>
      </p>
      <p className="text-justify max-sm:text-xs max-md:text-sm max-lg:text-base xl:text-base">
        De informatie op deze website is uitsluitend bedoeld voor algemene informatieve doeleinden.
        Hoewel wij ons inspannen om de informatie actueel en correct te houden, doen wij geen enkele
        uitspraak of geven geen enkele garantie, noch uitdrukkelijk noch stilzwijgend, met
        betrekking tot de volledigheid, nauwkeurigheid, betrouwbaarheid, geschiktheid of
        beschikbaarheid van de website of de informatie, producten, diensten of gerelateerde
        afbeeldingen op de website voor welk doel dan ook. Elk vertrouwen dat u stelt in dergelijke
        informatie is derhalve uitsluitend voor eigen risico.
      </p>
    </div>
  );
};
