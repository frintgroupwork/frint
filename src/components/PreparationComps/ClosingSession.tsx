"use client";
import React, { useState, useEffect } from "react";
import { Progress, Button, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SessionTemplate from "@/components/PreparationComps/SessionTemplate";
import Section from "./Section";
import CongratulationsModal from "./ClosingModal";

const ClosingSession = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [showExample, setShowExample] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleContinueQuiz = () => {
    // Navigate to quiz page
    router.push("/quiz");
  };

  const handleSkipQuiz = () => {
    // Navigate to next section or dashboard
    router.push("/");
  };

  // Delay rendering the main component by 0.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const handlePath = (path: string) => {
    router.push(path);
  };

  if (loading) {
    // Skeleton state
    return (
      <SessionTemplate>
        <Section className="w-full h-screen flex flex-col justify-evenly items-center gap-4 bg-gray-50 animate-pulse">
          {/* Progress Bar Skeleton */}
          <div className="hidden sm:block w-1/2 h-4 bg-gray-200 rounded" />

          {/* Main Content Skeleton */}
          <div className="mx-auto w-1/2 flex flex-col gap-4">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-3/4 bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
              <div className="h-8 w-full bg-gray-200 rounded" />
              <div className="h-8 w-full bg-gray-200 rounded" />
              <div className="h-8 w-full bg-gray-200 rounded" />
            </div>
          </div>

          {/* Example Section Skeleton */}
          <div className="w-1/2 mx-auto flex flex-col gap-4">
            <div className="h-6 w-1/4 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-row justify-start gap-4 w-1/2 mx-auto max-sm:flex-col">
            <div className="h-10 w-40 bg-gray-200 rounded" />
            <div className="h-10 w-40 bg-gray-200 rounded" />
          </div>
        </Section>
      </SessionTemplate>
    );
  }

  return (
    <SessionTemplate>
      <Section className="w-full h-screen flex flex-col justify-evenly max-sm:justify-center gap-2">
        <div className="hidden sm:block ">
          <Progress value={95} className="w-1/2 mx-auto" />
        </div>
        <div
          className={`${
            showExample
              ? "mx-auto w-1/2 flex flex-col items-start gap-2 max-sm:hidden"
              : "mx-auto w-1/2 flex flex-col items-start gap-2"
          }`}
        >
          <p className="text-sm text-neutral-500 flex flex-row justify-center items-center gap-2">
            <Link
              className="text-[#1d4ed8] font-medium underline flex flex-row justify-center gap-2 items-center"
              href={`${"backPath"}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33325 16L4.62615 15.2929L3.91904 16L4.62615 16.7071L5.33325 16ZM25.3333 17C25.8855 17 26.3333 16.5523 26.3333 16C26.3333 15.4477 25.8855 15 25.3333 15V17ZM12.6261 7.29289L4.62615 15.2929L6.04036 16.7071L14.0404 8.70711L12.6261 7.29289ZM4.62615 16.7071L12.6261 24.7071L14.0404 23.2929L6.04036 15.2929L4.62615 16.7071ZM5.33325 17H25.3333V15H5.33325V17Z"
                  fill="#0F172A"
                />
              </svg>
              {"Final Question"}{" "}
            </Link>
            of 14
          </p>
          <p className="text-xl font-bold text-neutral-800 md:text-3xl">
            {"Do you have any questions for us?"}
          </p>
          <p className="text-base text-neutral-600">
            {
              "Ask thoughtful questions about the role, team culture, or company values."
            }
          </p>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
            <Chip
              startContent={<IdeaIcon size={18} />}
              variant="flat"
              color="warning"
              className="text-amber-500"
            >
              {"Role"}
            </Chip>
            <Chip
              startContent={<IdeaIcon size={18} />}
              variant="flat"
              color="warning"
              className="text-amber-500"
            >
              {"Team culture"}
            </Chip>
            <Chip
              startContent={<IdeaIcon size={18} />}
              variant="flat"
              color="warning"
              className="text-amber-500"
            >
              {"Opportunities"}
            </Chip>
          </div>
        </div>
        {/* Show Example - Only render when showExample is true */}
        {showExample && (
          <div className="flex flex-col w-1/2 mx-auto justify-start gap-2">
            <p className="text-medium font-medium text-neutral-500 md:text-xl">
              Example Questions that support to me ask them
            </p>
            <Chip
              variant="flat"
              color="primary"
              style={{ fontWeight: 600 }}
              className="text-blue-900 font-semibold"
            >
              “What does success look like in this role?”
            </Chip>
            <Chip
              variant="flat"
              color="primary"
              style={{ fontWeight: 600 }}
              className="text-blue-900 font-semibold"
            >
              “Can you describe the team I’ll be working with?”
            </Chip>
            <Chip
              variant="flat"
              color="primary"
              style={{ fontWeight: 600 }}
              className="text-blue-900 font-semibold"
            >
              “What opportunities for growth and learning are available here?”
            </Chip>
          </div>
        )}
        <div className="flex flex-row justify-start gap-2 w-1/2 mx-auto max-sm:flex-col max-sm:mt-10">
          <Button
            className="bg-white shadow-md font-medium text-[#1d4ed8]"
            onClick={() => setShowExample(!showExample)} // Toggle example visibility
          >
            {showExample ? "Hide Question Examples" : "Show Question Examples"}
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setIsModalOpen(true);
              handlePath("#");
            }}
          >
            Continue
          </Button>

          <CongratulationsModal
            isOpen={isModalOpen}
            onOpenChange={setIsModalOpen}
            onContinueQuiz={handleContinueQuiz}
            onSkipQuiz={handleSkipQuiz}
          />
        </div>
      </Section>
    </SessionTemplate>
  );
};

export default ClosingSession;

export const IdeaIcon = ({
  size,
  height,
  width,
}: {
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8562 16.1858L14.8562 16.1858C14.8219 16.269 14.7885 16.3525 14.7562 16.4363C12.9685 17.0341 11.0314 17.034 9.24375 16.4362C9.21144 16.3524 9.17811 16.2689 9.14377 16.1858C9.04854 15.9554 9.00093 15.8401 8.91839 15.7337C8.83585 15.6273 8.69186 15.5193 8.40387 15.3033C6.94433 14.2089 6 12.4647 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.4647 17.0557 14.2089 15.5961 15.3033L15.5961 15.3034C15.3081 15.5193 15.1641 15.6273 15.0816 15.7337C14.9991 15.8401 14.9515 15.9554 14.8562 16.1858ZM9.85021 18.6664C9.93686 19.1932 9.98631 19.727 9.99753 20.2639C10.0006 20.4086 10.0817 20.5409 10.2111 20.6056C11.3373 21.1686 12.6627 21.1686 13.7889 20.6056C13.9183 20.5409 13.9994 20.4086 14.0025 20.2639C14.0137 19.727 14.0631 19.1933 14.1498 18.6665C12.7318 18.9573 11.2682 18.9573 9.85021 18.6664Z"
        fill="#EAB308"
      />
    </svg>
  );
};
