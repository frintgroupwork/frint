"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Nav = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/resource", label: "Resources" },
    { path: "/about-us", label: "About Us" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <Navbar 
        shouldHideOnScroll 
        className={`${className}`}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
              src={"/frint_logo.svg"}
              alt="frint_logo"
              width={100}
              height={70}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 bg-white sm:px-8 sm:rounded-2xl sm:shadow-sm"
          justify="center"
        >
          {navItems.map((item) => (
            <NavbarItem key={item.path} isActive={isActivePath(item.path)} className="">
              <Link 
                href={item.path}
                color={isActivePath(item.path) ? "primary" : "foreground"}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">
              <Button 
                color={isActivePath("/login") ? "primary" : "primary"} 
                variant="bordered" 
                size="lg"
              >
                Login
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/signup">
              <Button 
                color={isActivePath("/signup") ? "primary" : "primary"} 
                variant="solid" 
                size="lg"
              >
                Sign Up
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-background/70 backdrop-blur-md">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.path}>
              <Link
                href={item.path}
                color={isActivePath(item.path) ? "primary" : "foreground"}
                size="lg"
                className={`w-full ${isActivePath(item.path) ? "font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link 
              href="/login"
              color={isActivePath("/login") ? "primary" : "foreground"}
              size="lg"
            >
              Login
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              href="/signup"
              color={isActivePath("/signup") ? "primary" : "foreground"}
              size="lg"
            >
              Sign Up
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;