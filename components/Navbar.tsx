import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

export const NavbarComponent = () => {
  const { push } = useRouter();
  return (
    <Fragment>
      <div className="bg-white pb-2">
        <img
          onClick={() => push("/")}
          className="h-auto max-sm:w-full max-md:w-1/2 max-lg:w-1/2  max-w-sm pt-2 px-4 hover:cursor-pointer"
          src="/logo-app.svg"
          alt="image description"
        />
      </div>
      <Navbar fluid className="bg-customBlue text-white px-4">
        <Navbar.Toggle className=" text-white hover:bg-transparent " />
        <Navbar.Collapse>
          <Link
            className="cursor-pointer self-center whitespace-nowrap text-xl font-semibold text-white hover:text-BlueHover  border-none "
            href="/"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer self-center whitespace-nowrap text-xl font-semibold text-white hover:text-BlueHover  border-none"
            href="/info"
          >
            Meer weten?
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};
