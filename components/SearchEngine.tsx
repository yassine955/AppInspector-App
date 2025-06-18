'use client';

import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Button } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';

export const SearchEngineComponent = () => {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    state: false,
    msg: '',
  });

  const handleSearch = async () => {
    setError({ state: false, msg: '' });

    if (inputValue.trim() === '') {
      setError({ state: true, msg: 'Vul een app-naam in!' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/find_app?title=${inputValue}`);
      const look_for_app = await response.json();

      if (look_for_app === true) {
        await push({
          pathname: '/app/results',
          query: { title: inputValue },
        });
      } else {
        setError({
          state: true,
          msg: 'Geen resultaat gevonden, probeer iets anders...',
        });
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        {/* Input + Button */}
        <div className="w-full max-w-sm sm:max-w-md sm:flex sm:items-center sm:justify-center gap-2">
          <input
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
              }
            }}
            autoFocus
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type de naam van de app"
            className="w-full sm:flex-1 shadow-lg bg-gray-50 border border-gray-300 font-bold text-darkBlueText text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 p-2.5 placeholder-darkBlueText"
          />

          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            disabled={loading}
            className="mt-2 sm:mt-0 w-full sm:w-auto text-white bg-customBlue hover:bg-BlueHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm focus:outline-none"
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
              <HiOutlineSearch className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Error message */}
        {error?.state && (
          <div
            id="toast-warning"
            className="animate-pulse mt-5 max-w-md w-full flex items-center w-full p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{error?.msg}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-warning"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
