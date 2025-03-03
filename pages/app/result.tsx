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
    <div className="flex mb-5" style={{ alignItems: "center" }}>
      <article className="pl-4 font-bold text-blue-950 w-2/3">
        <h1 className="text-xl mb-2">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
      </article>
      <div className="flex w-1/3">
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
      <NavbarComponent />
      <BodyComp results>
        {loading ? (
          <LoadingComp />
        ) : (
          <div>
            <div className="mb-7" style={{ display: "flex" }}>
              <img
                className="w-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/77px-Firefox_logo%2C_2019.svg.png?20221020111440"
              />
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
              description="Een app die het systeem kan laten crashen - krijgt een hoge(re) score voor Systeem."
            />
            <RiskComponent
              riskValue={dataRow?.reliability_risk!}
              title="Betrouwbaarheid"
              description="Een app die het systeem kan laten crashen - krijgt een hoge(re) score voor Betrouwbaarheid."
            />
            <RiskComponent
              riskValue={dataRow?.financial_risk!}
              title="Financiën"
              description="Een app die bankgegevens niet goed beveiligt - krijgt een hoge(re) score voor Financiën."
            />
          </div>
        )}
      </BodyComp>
    </Fragment>
  );
}
