import { BodyComp } from "@/components/Body";
import { LoadingComp } from "@/components/Loading";
import { db } from "@/src/drizzle/db";
import { apps, AppType } from "@/src/drizzle/schema/apps";
import { eq } from "drizzle-orm";
import { GetServerSideProps } from "next/types";
import { Fragment, useEffect, useState } from "react";

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

  if (riskValue < 0.35) {
    happyOpacity = 100;
    middleOpacity = 20;
    angryOpacity = 5;
  } else if (riskValue >= 0.35 && riskValue <= 0.67) {
    happyOpacity = 20;
    middleOpacity = 100;
    angryOpacity = 20;
  } else if (riskValue > 0.67 && riskValue <= 1) {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const get_app_by_id = await db
    .select({
      id: apps.id,
      title: apps.title,
      version: apps.version,
      platform: apps.platform,
      financial_risk: apps.financial_risk,
      privacy_risk: apps.privacy_risk,
      reliability_risk: apps.reliability_risk,
      system_risk: apps.system_risk,
    })
    .from(apps)
    .where(eq(apps.id, Number(query?.id)))
    .limit(1);

  if (get_app_by_id.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      single_app: get_app_by_id[0],
    },
  };
};

export default function SingleResult({ single_app }: { single_app: AppType }) {
  const [loading, setLoading] = useState(true);
  const [iconLoading, setIconLoading] = useState(true);
  const [iconError, setIconError] = useState(false);

  useEffect(() => {
    if (single_app) {
      setLoading(false);
    }
  }, [single_app]);

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
              <div
                className="mb-7"
                style={{ display: "flex", alignItems: "center" }}
              >
                {single_app?.id && (
                  <div className="relative w-16 h-16">
                    {iconLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin h-5 w-5 border-4 border-blue-400 border-t-transparent rounded-full" />
                      </div>
                    )}
                    {!iconError ? (
                      <img
                        src={`/api/icon/${single_app.id}`}
                        alt="App icon"
                        onLoad={() => setIconLoading(false)}
                        onError={() => {
                          setIconLoading(false);
                          setIconError(true);
                        }}
                        className={`w-16 h-16 rounded-lg object-cover ${
                          iconLoading ? "invisible" : "visible"
                        }`}
                      />
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 text-xs text-gray-600 rounded-lg">
                        ❌
                      </div>
                    )}
                  </div>
                )}
                <article className="pl-4 text-xl font-bold text-blue-950">
                  <h1>{single_app?.title}</h1>

                  <h1>
                    {`Versienummer: `}
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                      {single_app?.version
                        ? single_app?.version
                        : "Version unknown"}
                    </span>
                  </h1>
                  <h1>
                    {`Genre: `}
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                      {single_app?.genre ? single_app?.genre : "Genre unknown"}
                    </span>
                  </h1>
                </article>
              </div>

              <RiskComponent
                riskValue={single_app?.privacy_risk!}
                title="Privacy"
                description="Een app die bijvoorbeeld je email deelt - krijgt een hogere score voor privacy."
              />
              <RiskComponent
                riskValue={single_app?.system_risk!}
                title="Systeem"
                description="Een app die bijvoorbeeld het systeem kan laten crashen - krijgt een hoge(re) score voor Systeem."
              />
              <RiskComponent
                riskValue={single_app?.reliability_risk!}
                title="Betrouwbaarheid"
                description="Een app die bijvoorbeeld slechte reviews heeft, krijgt een hoge(re) score voor de betrouwbaarheid van de ontwikkelaar."
              />
              <RiskComponent
                riskValue={single_app?.financial_risk!}
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
