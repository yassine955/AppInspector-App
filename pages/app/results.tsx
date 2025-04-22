import { BodyComp } from "@/components/Body";
import { LoadingComp } from "@/components/Loading";
import { NavbarComponent } from "@/components/Navbar";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export interface VulnerableApp {
  vulnerable: boolean;
  id: string;
  hash: string;
  name: string;
  package_name: string;
  platform: string;
  publisher: string | null;
  social_media_scan: string | null;
  version: string;
  permissions_friendly_names: string | null;
  risk: number;
  num_tests: number | null;
  last_update: string | null;
  total_score: number | null;
  system_risk: number | null;
  privacy_risk: number | null;
  reliability_risk: number | null;
  risk_description: string | null;
  financial_risk: number | null;
  icon: string | null;
  git_repo_hash: string | null;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    state: false,
    msg: "",
  });
  const {
    push,
    query: { name },
  } = useRouter();
  const [rows, setRows] = useState<VulnerableApp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (name) {
        try {
          const response = await fetch(`/api/results?naam=${name}`);
          const data = (await response.json()) as VulnerableApp[];

          console.log({ data });

          if (data.length > 0) {
            setRows(data);
            setLoading(false);
          } else {
            setLoading(false);
            setError({ state: true, msg: "Deze applicatie bestaat niet" });
            push("/");
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };
    fetchData();
  }, [name]);

  return (
    <Fragment>
      <BodyComp results>
        {loading ? (
          <div className="flex justify-center mt-5">
            <LoadingComp />
          </div>
        ) : (
          <div
            className="relative overflow-x-hidden"
            style={{
              height: "60vh",
              justifyItems: "center",
            }}
          >
            {loading ? (
              <div className="flex justify-center mt-5">
                <LoadingComp />
              </div>
            ) : (
              <table className="mt-5 max-md:w-screen max-lg:w-5/6 max-xl:w-4/5 w-6/12 text-sm text-left bg-backgroundBlue">
                <thead
                  className="text-xs text-cyan-600  sticky top-0 bg-white "
                  style={{
                    zIndex: 1,
                  }}
                >
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Icoon
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Naam
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Versie
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Platform
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Resultaat
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="text-blue-950 bg-backgroundBlue">
                  {rows.map((row) => {
                    let icon = "";

                    const risks = [
                      row?.financial_risk,
                      row?.privacy_risk,
                      row?.reliability_risk,
                      row?.system_risk,
                    ];

                    const checkRiskRange = (
                      risk: number,
                      min: number,
                      max: number
                    ) => risk > min && risk <= max;

                    if (risks.some((risk) => checkRiskRange(risk!, 35, 50))) {
                      icon = "/angry.svg";
                    } else if (
                      risks.some((risk) => checkRiskRange(risk!, 16, 35))
                    ) {
                      icon = "/middle.svg";
                    } else if (risks.some((risk) => risk! < 16)) {
                      icon = "/happy.svg";
                    }

                    return (
                      <tr
                        key={row?.id}
                        className="font-medium bg-backgroundBlue border-b text-darkBlueText"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                        >
                          <img className="w-8 rounded-lg" src={row?.icon!} />
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                        >
                          {row?.name}
                        </th>
                        <td className="px-6 py-4"> {row?.version}</td>
                        <td className="px-6 py-4"> {row?.platform}</td>
                        <td className="px-6 py-4">
                          <img className="w-8" src={icon} />
                        </td>
                        <td className="px-6 py-4">
                          <svg
                            onClick={() => {
                              push({
                                pathname: `/app/result`,
                                query: {
                                  id: row?.id,
                                },
                              });
                            }}
                            width="29"
                            height="31"
                            viewBox="0 0 29 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hover:cursor-pointer w-6 h-6 text-teal-500 dark:text-white"
                          >
                            <path
                              d="M7.59998 2.10004L2.29999 7.40002H7.59998V2.10004Z"
                              fill="#0096C9"
                            />
                            <path
                              d="M22.2 22.4L23.7 20.9L28.9 26.1L27.4 27.6L22.2 22.4Z"
                              fill="#0096C9"
                            />
                            <path
                              d="M16.5 21.9C15.2 21.9 13.9 21.5 12.9 20.8H4.5V19.7H11.4C10.6 18.8 10 17.8 9.70001 16.6H4.40002V15.5H9.5V15.1C9.5 14.1 9.69998 13.2 10.1 12.4H4.40002V11.3H10.7C12 9.50002 14 8.30002 16.3 8.30002C18.6 8.30002 20.8 9.60002 22 11.4V0.900024H8.5V8.70004H0.700012V30.5H22V18.9C20.8 20.7 18.7 22 16.3 22L16.5 21.9Z"
                              fill="#0096C9"
                            />
                            <path
                              d="M12.4 18.9001C13.5 20.0001 14.9 20.7001 16.5 20.7001C19.7 20.7001 22.2 18.1001 22.2 15.0001C22.2 11.9001 19.6 9.30005 16.5 9.30005C13.4 9.30005 12.1 10.8 11.2 12.8H17.2V14.9001H10.8C10.8 15.7001 10.9 16.3001 11.1 16.9001H17.2V19.0001H12.3L12.4 18.9001Z"
                              fill="#0096C9"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </BodyComp>
    </Fragment>
  );
}
