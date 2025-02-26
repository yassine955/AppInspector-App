import { BodyComp } from "@/components/Body";
import { LoadingComp } from "@/components/Loading";
import { NavbarComponent } from "@/components/Navbar";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const Article = () => {
  return (
    <article className="format lg:format-lg text-blue-950">
      <h3 className="text-blue-950">
        Over ons: Wij geloven in betere digitale veiligheid
      </h3>
      <p className="lead text-blue-950">
        Wij zijn een groep van ervaren onderzoekers die zich richten op het
        verbeteren van de digitale veiligheid van apps. Met onze kennis en
        ervaring helpen we organisaties en gebruikers te beschermen.
      </p>
      <p>
        Wij geloven dat heldere informatie over programma code (apps) helpt de
        wereld veiliger te maken. Met onze kennis, ervaring en hulpmiddelen
        willen we deze informatie maken en delen.
      </p>
      <p>
        Het is onze missie om een betrouwbare bron te zijn voor advies over de
        veiligheid van apps. We geven gebruikers de kennis en middelen die ze
        nodig hebben om goede keuzes te maken die hun privacy en digitale
        veiligheid beschermen. Ook willen we een gemeenschap opbouwen van mensen
        met dezelfde doelen en bewustzijn creëren over de beveiliging van apps.
      </p>

      <h3>Contact</h3>
      <p>
        Heeft u vragen of opmerkingen? Stuur een e-mail naar{" "}
        <a href="mailto:info@appinspector.nl">info@appinspector.nl</a>. Wij
        helpen u graag verder.
      </p>
    </article>
  );
};

export default function AboutUs() {
  const [dataRow, setDataRow] = useState<{
    icoon: string;
    id: number;
    naam: string;
    platform: string;
    resultaat: string;
    versie: string;
  }>();
  const {
    push,
    query: { id },
  } = useRouter();

  return (
    <Fragment>
      <NavbarComponent />
      <BodyComp results>
        <Article />
      </BodyComp>
    </Fragment>
  );
}
