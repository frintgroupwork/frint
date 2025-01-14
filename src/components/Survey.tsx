"use client";
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Survey = ({
  IsQa1,
  IsQa2,
  IsQa3,
}: {
  IsQa1?: boolean;
  IsQa2?: boolean;
  IsQa3?: boolean;
}) => {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select your graduation year"])
  );
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedInterview, setSelectedInterview] = React.useState<
    string | null
  >(null);
  const [isChecked, setIsChecked] = React.useState(false);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  // Array of valid graduation years
  const validYears = ["2024", "2025", "2026", "2027", "Graduate"];

  // Check if selected value is valid
  const isValidSelection = React.useMemo(
    () => validYears.includes(selectedValue),
    [selectedValue]
  );

  const handleInterviewSelect = (timing: string) => {
    setSelectedInterview(timing);
  };

  const getButtonStyle = (timing: string) => {
    if (selectedInterview === timing) {
      return "bg-[#1d4ed8] font-medium text-white shadow-md";
    }
    return "bg-white font-medium text-[#1d4ed8] shadow-md";
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="flex flex-row w-full h-screen bg-[#F1F1F1]">
        {/* Left Panel */}
        <div className="w-1/2 relative bg-white shadow-lg rounded-r-3xl max-lg:hidden">
          <div>
            <Image src="/survey/1.svg" alt="1" width={120} height={70} />
          </div>
          <div className="absolute top-10 right-12">
            <Image alt="logo" src={"/survey/2.svg"} width={150} height={70} />
          </div>
          <div className="flex flex-col items-center justify-center h-[70%] gap-4 px-8">
            <div className="flex flex-col gap-2 items-start pb-8">
              <p className="text-3xl font-medium text-neutral-800 max-lg:text-2xl">
                Welcome, Your Name
              </p>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal w-[80%]">
                Help us personalize your experience by telling us a bit about
                yourself.
              </p>
            </div>
            <div>
              <Image
                alt="panel"
                src={"/survey/5.svg"}
                width={400}
                height={250}
              />
            </div>
          </div>
          <div className="absolute bottom-0 -left-4">
            <Image alt="panel" src={"/survey/3.svg"} width={190} height={70} />
          </div>
        </div>

        {/* Right Panel: Conditional Content */}
        <div className="w-[40%] flex flex-col items-center justify-center max-lg:w-full">
          {IsQa1 ? (
            <div className="flex flex-col items-start gap-4">
              <div className="hidden max-lg:block">
                <Image
                  alt="logo"
                  src={"/survey/2.svg"}
                  width={150}
                  height={70}
                />
              </div>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal">
                Step 1 of 3
              </p>
              <p className="text-4xl font-medium text-neutral-800 max-lg:text-2xl">
                I am a
              </p>
              <div className="flex flex-row gap-4">
                <Button
                  className="bg-white font-medium text-neutral-800 shadow-md"
                  size="lg"
                  onClick={() => handleNavigation("/survey/step-2")}
                >
                  Student
                </Button>
                <Button
                  className="bg-white font-medium text-neutral-800 shadow-md"
                  size="lg"
                  onClick={() => handleNavigation("/survey/step-2")}
                >
                  Working Professional
                </Button>
              </div>
            </div>
          ) : IsQa2 ? (
            <div className="flex flex-col items-start gap-4">
              <div className="hidden max-lg:block w-[17rem]">
                <Image
                  alt="logo"
                  src={"/survey/2.svg"}
                  width={150}
                  height={70}
                />
              </div>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal">
                Step 2 of 3
              </p>
              <p className="text-4xl font-medium text-neutral-800 max-lg:text-2xl">
                I will graduate in
              </p>
              <div className="flex flex-col gap-4 w-full">
                <Dropdown onOpenChange={(open) => setIsDropdownOpen(open)}>
                  <DropdownTrigger>
                    <Button
                      className="capitalize bg-white shadow-md text-md text-neutral-600 w-full"
                      variant="solid"
                    >
                      <div className="absolute left-6">{selectedValue}</div>
                      <div className="absolute right-4">
                        {isDropdownOpen ? (
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 4.5L12.7071 3.79289L12 3.08579L11.2929 3.79289L12 4.5ZM11 19.5C11 20.0523 11.4477 20.5 12 20.5C12.5523 20.5 13 20.0523 13 19.5L11 19.5ZM18.7071 9.79289L12.7071 3.79289L11.2929 5.20711L17.2929 11.2071L18.7071 9.79289ZM11.2929 3.79289L5.29289 9.79289L6.70711 11.2071L12.7071 5.20711L11.2929 3.79289ZM11 4.5L11 19.5L13 19.5L13 4.5L11 4.5Z"
                              fill="#33363F"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 20.5L11.2929 21.2071L12 21.9142L12.7071 21.2071L12 20.5ZM13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5L13 5.5ZM5.29289 15.2071L11.2929 21.2071L12.7071 19.7929L6.70711 13.7929L5.29289 15.2071ZM12.7071 21.2071L18.7071 15.2071L17.2929 13.7929L11.2929 19.7929L12.7071 21.2071ZM13 20.5L13 5.5L11 5.5L11 20.5L13 20.5Z"
                              fill="#33363F"
                            />
                          </svg>
                        )}
                      </div>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="Single selection example"
                    selectedKeys={selectedKeys}
                    selectionMode="single"
                    variant="flat"
                    onSelectionChange={(keys) =>
                      setSelectedKeys(new Set(keys as unknown as string[]))
                    }
                  >
                    <DropdownItem key="2024">2024</DropdownItem>
                    <DropdownItem key="2025">2025</DropdownItem>
                    <DropdownItem key="2026">2026</DropdownItem>
                    <DropdownItem key="2027">2027</DropdownItem>
                    <DropdownItem key="Graduate">Graduate</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Button
                  color="primary"
                  isDisabled={!isValidSelection}
                  size="md"
                  className="w-1/3"
                  onClick={() => handleNavigation("/survey/step-3")}
                >
                  Next step
                </Button>
              </div>
            </div>
          ) : IsQa3 ? (
            <div className="flex flex-col items-start gap-4 pl-4">
              <div className="hidden max-lg:block">
                <Image
                  alt="logo"
                  src={"/survey/2.svg"}
                  width={150}
                  height={70}
                />
              </div>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal">
                Step 3 of 3
              </p>
              <p className="text-4xl font-medium text-neutral-800 max-lg:text-2xl">
                I have my interview in
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  className={getButtonStyle("week")}
                  size="lg"
                  onClick={() => handleInterviewSelect("week")}
                >
                  a week
                </Button>
                <Button
                  className={getButtonStyle("month")}
                  size="lg"
                  onClick={() => handleInterviewSelect("month")}
                >
                  a month
                </Button>
                <Button
                  className={getButtonStyle("3months")}
                  size="lg"
                  onClick={() => handleInterviewSelect("3months")}
                >
                  3 months
                </Button>
                <Button
                  className={`${getButtonStyle("more")} col-span-2`}
                  size="lg"
                  onClick={() => handleInterviewSelect("more")}
                >
                  more than 3 months
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <Checkbox
                  isSelected={isChecked}
                  onValueChange={setIsChecked}
                  classNames={{
                    label: "text-small",
                  }}
                >
                  I am also interested in search Internship & job opportunities.
                </Checkbox>
                <Button
                  color="primary"
                  className="w-1/4"
                  isDisabled={!selectedInterview}
                  onClick={() => handleNavigation("/")}
                >
                  Let's go
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-medium text-neutral-800">
                No Step Selected
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Survey;
