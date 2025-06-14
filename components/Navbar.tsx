import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export const NavbarComponent = () => {
  const { push } = useRouter();
  return (
    <Fragment>
      <div className="bg-white pb-2">
        <img
          onClick={() => push('/')}
          className="h-auto max-sm:w-full max-md:w-1/2 max-lg:w-1/2  max-w-sm pt-2 px-4 hover:cursor-pointer"
          src="/logo-app.svg"
          alt="image description"
        />
      </div>

      <nav style={{ background: '#0096c9' }}>
        <div className="flex flex-wrap justify-between items-center w-full p-4">
          <Link
            href="/"
            className="hover:text-darkBlueText flex items-center text-base space-x-3 rtl:space-x-reverse font-bold text-white"
          >
            Home
          </Link>
          <Link href="/info" className="hover:text-darkBlueText text-base font-bold text-white">
            Meer weten?
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};
