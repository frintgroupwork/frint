"use client";
import React from "react";
import Image from "next/image";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Button } from "@nextui-org/react";

export function DragAndDropActivity() {
  const correctCategories = {
    aboutYourself: ["Professional background", "Relevant experience", "Career goals"],
    whyWorkWithUs: ["Role alignment", "Company research", "Enthusiasm"],
    enthusiasm: ["Values", "Mission", "Recent projects"],
  };

  const initialItems = {
    unassigned: [
      "Company research",
      "Relevant experience",
      "Career goals",
      "Mission",
      "Recent projects",
      "Values",
      "Professional background",
      "Role alignment",
      "Enthusiasm"

    ],
    categories: {
      aboutYourself: [],
      whyWorkWithUs: [],
      enthusiasm: [],
    },
  };

  const isItemInCorrectCategory = (item: string, category: keyof typeof correctCategories) => {
    return correctCategories[category].includes(item);
  };

  const getItemClassName = (item: string, category: keyof typeof correctCategories) => {
    const baseClasses = "p-2 rounded-md shadow transition";
    const correctClasses = "text-[#16A34A] bg-[#16A34A]/20 border-[#16A34A]/50";
    const incorrectClasses = "text-[#BE123C] bg-[#BE123C]/20 border-[#BE123C]/50";

    return `${baseClasses} ${
      isItemInCorrectCategory(item, category) ? correctClasses : incorrectClasses
    }`;
  };

  const [unassignedRef, unassignedItems] = useDragAndDrop<HTMLDivElement, string>(
    initialItems.unassigned,
    { group: "dragItems" }
  );

  const [aboutRef, aboutItems] = useDragAndDrop<HTMLDivElement, string>(
    initialItems.categories.aboutYourself,
    { group: "dragItems" }
  );

  const [whyWorkRef, whyWorkItems] = useDragAndDrop<HTMLDivElement, string>(
    initialItems.categories.whyWorkWithUs,
    { group: "dragItems" }
  );

  const [enthusiasmRef, enthusiasmItems] = useDragAndDrop<HTMLDivElement, string>(
    initialItems.categories.enthusiasm,
    { group: "dragItems" }
  );

  // Check if all items are correctly categorized and unassigned is empty
  const allItemsCorrect = () => {
    const categories = {
      aboutYourself: aboutItems,
      whyWorkWithUs: whyWorkItems,
      enthusiasm: enthusiasmItems,
    };

    const allCategorizedCorrectly = Object.entries(categories).every(([category, items]) => {
      return items.every((item) =>
        isItemInCorrectCategory(item, category as keyof typeof correctCategories)
      );
    });

    return unassignedItems.length === 0 && allCategorizedCorrectly;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col gap-6">
      <div className="absolute top-0 left-0 max-sm:-top-14 max-sm:hidden">
        <Image alt="top-left" src={"/prepare/top-left.svg"} height={150} width={200} />
      </div>
      <div className="absolute top-0 right-0 max-sm:-top-14 max-sm:hidden">
        <Image alt="top-right" src={"/prepare/top-right.svg"} height={200} width={150} />
      </div>
      <h1 className="text-2xl font-bold text-center">Drag-and-Drop Activity</h1>
      <p className="text-center text-gray-600">Fill the correct key points of each question.</p>

      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30 max-sm:text-sm text-center cursor-pointer backdrop:blur-md font-medium border-4 border-white/30 px-6 py-2 rounded-3xl transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] mb-2">
            Tell me about yourself.
          </h2>
          <div ref={aboutRef} className="border border-dashed border-gray-300 font-medium text-center p-4 rounded-lg min-h-[150px] space-y-2">
            {aboutItems.map((item) => (
              <div key={item} className={getItemClassName(item, "aboutYourself")}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30 max-sm:text-sm text-center cursor-pointer backdrop:blur-md font-medium border-4 border-white/30 px-6 py-2 rounded-3xl transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] mb-2">
            Why do you want to work with us?
          </h2>
          <div ref={whyWorkRef} className="border border-dashed border-gray-300 text-center font-medium p-4 rounded-lg min-h-[150px] space-y-2">
            {whyWorkItems.map((item) => (
              <div key={item} className={getItemClassName(item, "whyWorkWithUs")}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30 max-sm:text-sm text-center cursor-pointer backdrop:blur-md font-medium border-4 border-white/30 px-6 py-2 rounded-3xl transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] mb-2">
             Why do you want to work with us?
          </h2>
          <div ref={enthusiasmRef} className="border border-dashed border-gray-300 text-center font-medium p-4 rounded-lg min-h-[150px] space-y-2">
            {enthusiasmItems.map((item) => (
              <div key={item} className={getItemClassName(item, "enthusiasm")}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Drag items from here:</h2>
        <div ref={unassignedRef} className="border border-dashed border-gray-300 p-4 rounded-lg min-h-[150px] flex flex-wrap gap-2">
          {unassignedItems.map((item) => (
            <div key={item} className="px-4 py-2 h-1/2 rounded-lg bg-yellow-400/20 text-[#EAB308] border-[4.5px] border-white/30">
              {item}
            </div>
          ))}
        </div>
      </div>

      <Button
        className="mt-4 text-white font-medium py-2 px-4 rounded-lg transition self-center"
        color="primary"
        isDisabled={!allItemsCorrect()}
      >
        Next Question
      </Button>
    </div>
  );
}
