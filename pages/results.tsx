import { BodyComp } from "@/components/Body";
import { NavbarComponent } from "@/components/Navbar";
import { Fragment } from "react";

export default function Home() {
  const rows = [
    {
      name: "Firefox",
      version: "123.2.0",
      platform: "Android",
      result: "angry",
    },
    {
      name: "Firefox Beta",
      version: "143.2.0",
      platform: "Android",
      result: "angry",
    },
  ];

  return (
    <Fragment>
      <NavbarComponent />
      <BodyComp results>
        <div className="relative overflow-x-auto">
          <table
            style={{
              width: "60rem",
            }}
            className="text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead className="text-xs text-cyan-600 dark:bg-gray-700 dark:text-gray-400">
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
            <tbody className="text-blue-950">
              {rows.map((row) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/77px-Firefox_logo%2C_2019.svg.png?20221020111440"
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row?.name}
                  </th>
                  <td className="px-6 py-4"> {row?.version}</td>
                  <td className="px-6 py-4"> {row?.platform}</td>
                  <td className="px-6 py-4">
                    <img className="w-8" src="/angry.svg" />
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      className="w-6 h-6 text-teal-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BodyComp>
    </Fragment>
  );
}
