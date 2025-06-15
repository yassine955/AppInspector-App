import { BodyComp } from '@/components/Body';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

const Article = () => {
  return (
    <div className="flex justify-center py-6 px-4">
      <article className="format lg:format-sm text-darkBlueText">
        <h3 className="text-darkBlueText">Over ons</h3>
        <p className="text-darkBlueText">
          Wij zijn een groep van ervaren onderzoekers die zich richten op het verbeteren van de
          digitale veiligheid van apps. Met onze kennis en ervaring helpen we organisaties en
          gebruikers te beschermen.
        </p>
        <p>
          Wij geloven dat heldere informatie over programma code (apps) helpt de wereld veiliger te
          maken. Met onze kennis, ervaring en hulpmiddelen willen we deze informatie maken en delen.
        </p>
        <p>
          Het is onze missie om een betrouwbare bron te zijn voor advies over de veiligheid van
          apps. We geven gebruikers de kennis en middelen die ze nodig hebben om goede keuzes te
          maken die hun privacy en digitale veiligheid beschermen. Ook willen we een gemeenschap
          opbouwen van mensen met dezelfde doelen en bewustzijn creëren over de beveiliging van
          apps.
        </p>

        <h3 className="text-darkBlueText">Contact</h3>
        <p>
          Heeft u vragen of opmerkingen? Stuur een e-mail naar{' '}
          <a className="text-darkBlueText" href="mailto:info@appinspector.nl">
            info@appinspector.nl
          </a>
          . Wij helpen u graag verder.
        </p>
      </article>
    </div>
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
      <BodyComp>
        <Article />
      </BodyComp>
    </Fragment>
  );
}
