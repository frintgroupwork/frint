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
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const Nav = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  // Simulate authentication state (replace with actual token check)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Assume user is authenticated
  const user = { name: "John Doe", avatar: "/user-avatar.png" }; // Replace with actual user data

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/introduction/step-1", label: "Questions" },
    { path: "/about-us", label: "About Us" },
    { path: "/resource", label: "Resources" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  const handleResourceClick = (path: string) => {
    router.push(path);
    setIsResourcesOpen(false); // Close the dropdown after navigation
  };

  const handleLogout = () => {
    // Clear token or authentication state
    setIsAuthenticated(false);
    router.push("/login"); // Redirect to login page
  };

  return (
    <>
      <Navbar 
        shouldHideOnScroll 
        className={`${className} max-sm:bg-white shadow-sm`}
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
          className="hidden sm:flex gap-4 bg-white"
          justify="center"
        >
          {navItems.map((item) => (
            item.label === "Resources" ? (
              <Dropdown 
                isOpen={isResourcesOpen} 
                onOpenChange={setIsResourcesOpen} 
                key={item.path}
              >
                <DropdownTrigger>
                  <NavbarItem 
                    isActive={isActivePath(item.path)}
                    onMouseEnter={() => setIsResourcesOpen(true)} // Open on hover
                    onMouseLeave={() => setIsResourcesOpen(false)} // Close on hover out
                  >
                    <Link
                      color={isActivePath(item.path) ? "primary" : "foreground"}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </NavbarItem>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Resource Links"
                  onMouseEnter={() => setIsResourcesOpen(true)} // Keep open when hovering over dropdown
                  onMouseLeave={() => setIsResourcesOpen(false)} // Close when hovering out
                >
                  <DropdownItem 
                    key="blogs" 
                    onPress={() => handleResourceClick("/blogs")}
                  >
                    Blogs
                  </DropdownItem>
                  <DropdownItem 
                    key="resource" 
                    onPress={() => handleResourceClick("/resource")}
                  >
                    Resource
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={item.path} isActive={isActivePath(item.path)}>
                <Link 
                  href={item.path}
                  color={isActivePath(item.path) ? "primary" : "foreground"}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            )
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          {isAuthenticated ? (
            <Dropdown 
              isOpen={isProfileOpen} 
              onOpenChange={setIsProfileOpen}
            >
              <DropdownTrigger>
                <NavbarItem>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      size="sm"
                    />
                    <span className="font-medium">{user.name}</span>
                  </div>
                </NavbarItem>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Menu">
                <DropdownItem key="profile" onPress={() => router.push("/profile")}>
                  Profile
                </DropdownItem>
                <DropdownItem key="settings" onPress={() => router.push("/settings")}>
                  Settings
                </DropdownItem>
                <DropdownItem key="logout" onPress={handleLogout} className="text-danger" color="danger">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
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
            </>
          )}
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