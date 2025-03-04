import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Button } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";

type Resultaat = {
  id: number;
  naam: string;
  versie: string;
  platform: "Windows" | "MacOS" | "Linux" | "Android" | "iOS";
  resultaat: "Succes" | "Fout" | "Waarschuwing";
  icoon: string;
};
export const SearchEngineComponent = () => {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    state: false,
    msg: "",
  });

  const handleSearch = async () => {
    setError({
      state: false,
      msg: "",
    });
    try {
      setLoading(true);
      if (inputValue === "") {
        setLoading(false);
        return setError({
          state: true,
          msg: "Vul een app-naam in!",
        });
      }
      const response = await fetch(`/api/results?naam=${inputValue}`);

      const data = (await response.json()) as Resultaat[];

      if (data.length) {
        setLoading(false);
        push({
          pathname: "/app/results",
          query: {
            name: inputValue,
          },
        });
      } else {
        setError({
          state: true,
          msg: "Geen resultaat gevonden, probeer iets anders...",
        });
        setLoading(false);
      }

      // setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <Fragment>
      <div
        style={{
          justifyContent: "center",
          marginTop: "10%",
          justifyItems: "center !important",
        }}
      >
        <div className="sm:flex justify-center self-center justify-self-center">
          <input
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            id="default-input"
            style={{
              width: "22rem",
            }}
            placeholder="Type de naam van de app"
            className=" placeholder-darkBlueText sm:mr-2 shadow-lg bg-gray-50 border border-gray-300 font-bold text-darkBlueText text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            disabled={loading ? true : false}
            className="max-sm:w-full max-sm:mt-4 max-sm:justify-self-center text-white bg-customBlue hover:bg-BlueHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm focus:outline-none "
          >
            {loading ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <Fragment>
                <HiOutlineSearch className="h-5 w-5" />
              </Fragment>
            )}
          </Button>
        </div>

        {error?.state ? (
          <div className="mt-5">
            <div
              style={{
                justifySelf: "center !important",
              }}
              className="animate-pulse transition-opacity duration-1000 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 self-center justify-self-center"
              role="alert"
            >
              <span className="font-medium">Let op!</span> {error?.msg}
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
