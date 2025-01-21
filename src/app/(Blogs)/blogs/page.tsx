import CardBlogs from "@/components/CardBlog";
import Section from "@/components/PreparationComps/Section";
import SearchInput from "@/components/SearchInput";
import { Pagination } from "@nextui-org/react";
import React from "react";

export default function page() {
  return (
    <>
      <Section className="flex flex-col w-full">
        <div className="w-[80%] mx-auto p-4">
          <SearchInput />
          <p className="text-xs text-neutral-500 pt-2 ">
            Showing 6 of 10 results
          </p>
        </div>

        <div className="w-[80%] mx-auto pb-4 flex flex-wrap">
          <CardBlogs
            date="11 December 2024"
            imageUrl="/about-us/team.svg"
            title="You must read all those keys to prepare your self before going to an interview."
          />
        </div>

        <div className="w-[80%] mx-auto pb-4 flex justify-center items-center">
        <Pagination initialPage={1} total={10} />
        </div>
      </Section>
    </>
  );
}
