import { AppType } from '@/src/drizzle/schema/apps';
import { useRouter } from 'next/router';
import IconWithLoading from './IconWithLoading';
import 'flowbite';
import { Tooltip } from 'flowbite-react';
import { useEffect } from 'react';

export function TableComponent({ all_apps }: { all_apps: AppType[] }) {
  const { push } = useRouter();

  return (
    <div className="w-full">
      <div className="relative overflow-x-auto max-h-[600px] custom-scrollbar fade-wrapper">
        <div className="min-w-full lg:max-w-[80vw] xl:max-w-[70vw] px-0 lg:px-0 custom-scrollbar ">
          <table className="rounded-3xl w-full lg:w-[70%] mx-auto text-sm text-left custom-scrollbar ">
            <thead className="sticky top-0 z-10 text-xs text-cyan-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 shadow-sm">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Icoon
                </th>
                <th scope="col" className="px-6 py-3">
                  Naam
                </th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">
                  Versie
                </th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3">
                  Resultaat
                </th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {all_apps.map((row, idx) => {
                let icon = '';
                const risks = [
                  row?.financial_risk,
                  row?.privacy_risk,
                  row?.reliability_risk,
                  row?.system_risk,
                ];

                const checkRiskRange = (risk: number, min: number, max: number) =>
                  risk > min && risk <= max;

                if (risks.some((risk) => checkRiskRange(risk!, 0.7, 1))) {
                  icon = '/angry.svg';
                } else if (risks.some((risk) => checkRiskRange(risk!, 0.4, 0.7))) {
                  icon = '/middle.svg';
                } else if (risks.some((risk) => risk! < 0.4)) {
                  icon = '/happy.svg';
                }

                return (
                  <tr
                    key={idx}
                    className="hover:bg-[#d5e2e9] font-medium bg-backgroundBlue border-b text-darkBlueText dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <IconWithLoading appId={row.id} />
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex flex-col flex-wrap break-words">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {row?.title}
                        </span>
                        <span className="mt-2 text-xs text-darkBlueText block md:hidden">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 inline-block mb-1">
                            {row?.version}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 inline-block">
                            {row?.platform}
                          </span>
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                        {row?.version}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                        {row?.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {/* Visible on small & medium (hidden on lg+) */}
                      <img
                        className="w-8 block lg:hidden cursor-pointer"
                        src={icon}
                        alt="risk icon"
                        onClick={(e) => {
                          e.preventDefault();
                          push({
                            pathname: `/app/result`,
                            query: { id: row?.id },
                          });
                        }}
                      />

                      {/* Visible on large+ screens (hidden on small/medium) */}
                      <img className="w-8 hidden lg:block" src={icon} alt="risk icon" />
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <svg
                        onClick={(e) => {
                          e.preventDefault();
                          push({
                            pathname: `/app/result`,
                            query: { id: row?.id },
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
        </div>
      </div>
    </div>
  );
}
