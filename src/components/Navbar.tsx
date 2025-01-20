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

export const Nav = ({ className }: { className?: string }) => {
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

        <NavbarContent
          className="hidden sm:flex gap-4 bg-white sm:px-8 sm:rounded-2xl sm:shadow-sm"
          justify="center"
        >
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/resource">
              Resources
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about-us">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">
              <Button color="primary" variant="bordered" size="lg">
                Login
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/signup">
              <Button color="primary" variant="solid" size="lg">
                Sign Up
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};
