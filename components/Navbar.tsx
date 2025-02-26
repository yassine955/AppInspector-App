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
          className="h-auto max-w-sm pt-2 pl-4 hover:cursor-wait"
          src="/logo.png"
          alt="image description"
        />
      </div>
      <Navbar fluid className="bg-customBlue text-white px-4">
        <Link href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Home
          </span>
        </Link>
        <Link href="/meer">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Meer weten?
          </span>
        </Link>

        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse>
      <Navbar.Link href="/navbars" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">About</Navbar.Link>
      <Navbar.Link href="/navbars">Services</Navbar.Link>
      <Navbar.Link href="/navbars">Pricing</Navbar.Link>
      <Navbar.Link href="/navbars">Contact</Navbar.Link>
    </Navbar.Collapse> */}
      </Navbar>
    </Fragment>
  );
};
