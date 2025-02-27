import { BodyComp } from "@/components/Body";
import { LoadingComp } from "@/components/Loading";
import { NavbarComponent } from "@/components/Navbar";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { VulnerableApp } from "./results";

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

            <div className="flex mb-5" style={{ alignItems: "center" }}>
              <article className="pl-4 font-bold text-blue-950 w-2/3">
                <h1 className="text-xl mb-2">Privacy</h1>
                <p className="text-sm font-normal">
                  Een app die bijvoorbeeld je email deelt - krijgt een hogere
                  score voor privacy.
                </p>
              </article>
              <div className="flex w-1/3">
                <img className="mr-2" src="/happy.svg" />
                <img className="mr-2" src="/middle.svg" />
                <img src="/angry.svg" />
              </div>
            </div>
            <div className="flex mb-5" style={{ alignItems: "center" }}>
              <article className="pl-4 font-bold text-blue-950 w-2/3">
                <h1 className="text-xl mb-2">Financiën</h1>
                <p className="text-sm font-normal">
                  Een app die bankgegevens niet goed beveiligt - krijgt een
                  hoge(re) score voor Financiën.
                </p>
              </article>
              <div className="flex w-1/3">
                <img className="mr-2" src="/happy.svg" />
                <img className="mr-2" src="/middle.svg" />
                <img src="/angry.svg" />
              </div>
            </div>

            <div className="flex mb-5" style={{ alignItems: "center" }}>
              <article className="pl-4 font-bold text-blue-950 w-2/3">
                <h1 className="text-xl mb-2">Systeem</h1>
                <p className="text-sm font-normal">
                  Een app die het systeem kan laten crashen - krijgt een
                  hoge(re) score voor Systeem.
                </p>
              </article>
              <div className="flex w-1/3">
                <img className="mr-2" src="/happy.svg" />
                <img className="mr-2" src="/middle.svg" />
                <img src="/angry.svg" />
              </div>
            </div>

            <div className="flex mb-5" style={{ alignItems: "center" }}>
              <article className="pl-4 font-bold text-blue-950 w-2/3">
                <h1 className="text-xl mb-2">Betrouwbaarheid</h1>
                <p className="text-sm font-normal">
                  Een app die het systeem kan laten crashen - krijgt een
                  hoge(re) score voor Betrouwbaarheid.
                </p>
              </article>
              <div className="flex w-1/3">
                <img className="mr-2" src="/happy.svg" />
                <img className="mr-2" src="/middle.svg" />
                <img src="/angry.svg" />
              </div>
            </div>
          </div>
        )}
      </BodyComp>
    </Fragment>
  );
}
