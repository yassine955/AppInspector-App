import { BodyComp } from "@/components/Body";
import { LoadingComp } from "@/components/Loading";
import { NavbarComponent } from "@/components/Navbar";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { VulnerableApp } from "./results";

const RiskComponent = ({
  description,
  title,
  riskValue,
}: {
  title: string;
  description: string;
  riskValue: number;
}) => {
  let happyOpacity = 0;
  let middleOpacity = 0;
  let angryOpacity = 0;
  if (riskValue < 16) {
    happyOpacity = 100;
    middleOpacity = 20;
    angryOpacity = 5;
  } else if (riskValue >= 16 && riskValue <= 35) {
    happyOpacity = 20;
    middleOpacity = 100;
    angryOpacity = 20;
  } else if (riskValue > 35 && riskValue <= 50) {
    happyOpacity = 5;
    middleOpacity = 20;
    angryOpacity = 100;
  }

  return (
    <div className="flex mb-12" style={{ alignItems: "center" }}>
      <article className="font-bold text-blue-950 w-6/12">
        <h1 className="text-xl mb-2">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
      </article>
      <div className="flex w-6/12 justify-center">
        <img
          className="mr-2"
          style={{ opacity: `${happyOpacity}%` }}
          src="/happy.svg"
        />
        <img
          className="mr-2"
          style={{ opacity: `${middleOpacity}%` }}
          src="/middle.svg"
        />
        <img style={{ opacity: `${angryOpacity}%` }} src="/angry.svg" />
      </div>
    </div>
  );
};

export default function SingleResult() {
  const [dataRow, setDataRow] = useState<VulnerableApp>();

  const {
    push,
    query: { id },
  } = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        try {
          const response = await fetch(`/api/single_result?id=${id}`);
          const data = await response.json();

          if (data) {
            setDataRow(data[0]);
            setLoading(false);
          } else {
            push("/");
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <Fragment>
      <BodyComp results>
        {loading ? (
          <div className="flex justify-center mt-5">
            <LoadingComp />
          </div>
        ) : (
          <div className="w-full flex justify-center py-8">
            <div className="w-7/12 max-xl:w-10/12 max-lg:w-11/12">
              <div className="mb-7" style={{ display: "flex" }}>
                <img className="w-14 h-14 rounded-lg" src={dataRow?.icon!} />
                <article className="pl-4 text-xl font-bold text-blue-950">
                  <h1>{dataRow?.name}</h1>
                  <h1>{`Versienummer: ${dataRow?.version}`}</h1>
                </article>
              </div>

              <RiskComponent
                riskValue={dataRow?.privacy_risk!}
                title="Privacy"
                description="Een app die bijvoorbeeld je email deelt - krijgt een hogere score voor privacy."
              />
              <RiskComponent
                riskValue={dataRow?.system_risk!}
                title="Systeem"
                description="Een app die bijvoorbeeld het systeem kan laten crashen - krijgt een hoge(re) score voor Systeem."
              />
              <RiskComponent
                riskValue={dataRow?.reliability_risk!}
                title="Betrouwbaarheid"
                description="Een app die bijvoorbeeld slechte reviews heeft, krijgt een hoge(re) score voor de betrouwbaarheid van de ontwikkelaar."
              />
              <RiskComponent
                riskValue={dataRow?.financial_risk!}
                title="Financiën"
                description="Een app die bijvoorbeeld bankgegevens niet goed beveiligt - krijgt een hoge(re) score voor Financiën."
              />
            </div>
          </div>
        )}
      </BodyComp>
    </Fragment>
  );
}
