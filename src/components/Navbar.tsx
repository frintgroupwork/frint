import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export const Nav = ({className}:{className?: string}) => {
  return (
    <>
      <Navbar shouldHideOnScroll className={`bg-[#F8F8F8] ${className}`}>
        <NavbarBrand>
          <Image
            src={"/frint_logo.svg"}
            alt="frint_logo"
            width={100}
            height={70}
          />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4 bg-white sm:px-8 sm:rounded-2xl sm:shadow-sm" justify="center">
          <NavbarItem isActive>
            <Link color="primary" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Resources
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Blogs
            </Link>
          </NavbarItem>
          Contact
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="bordered">
              Log In
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="solid">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};
