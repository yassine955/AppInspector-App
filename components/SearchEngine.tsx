import { useRouter } from "next/router";
import { Fragment } from "react";

export const SearchEngineComponent = () => {
  const { push } = useRouter();
  return (
    <Fragment>
      <input
        type="text"
        id="default-input"
        style={{
          width: "22rem",
        }}
        placeholder="Type de naam van de app"
        className="mr-2 shadow-lg bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={() => push("/results")}
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Zoeken
      </button>
    </Fragment>
  );
};
