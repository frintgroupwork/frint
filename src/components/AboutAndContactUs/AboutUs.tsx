"use client";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import Carousel from "react-multi-carousel";
import CarouselComponent from "./CarouselComponent";

export default function AboutUs() {
  const [openItems, setOpenItems] = useState<OpenItems>({});
  const faqData = [
    {
      category: "General Questions",
      items: [
        {
          key: "1",
          question: "What is FRINT?",
          answer:
            "FRINT is an innovative platform designed to help students and job seekers prepare for interviews. It includes helpful tips, personalized progress tracking, and resources to boost confidence and improve the chances of getting hired.",
        },
        {
          key: "2",
          question: "Who can benefit from FRINT?",
          answer:
            "FRINT is ideal for students and job seekers who want to enhance their interview skills. It is especially helpful for individuals who have faced rejections in the past and are looking for strategies to improve their outcomes.",
        },
        {
          key: "3",
          question: "How does FRINT help with interviews?",
          answer:
            "FRINT provides valuable interview tips, tailored advice, and tools to track your progress. These resources are designed to reduce stress, build confidence, and equip you with the skills needed to succeed in interviews.",
        },
      ],
    },
    {
      category: "Features",
      items: [
        {
          key: "4",
          question: "What are the key features of FRINT?",
          answer:
            "• Helpful Tips: Expert advice and strategies for acing interviews.\n• Personalized Progress Tracking: Tools to monitor and improve your interview readiness.\n• Confidence Boosting Resources: Techniques to help reduce anxiety and build self-assurance.",
        },
        {
          key: "5",
          question: "Does FRINT offer customized advice?",
          answer:
            "Yes! FRINT uses personalized progress tracking to provide tailored tips and feedback to help users improve specific areas of their interview preparation.",
        },
        {
          key: "6",
          question: "Can I track my progress on FRINT?",
          answer:
            "Absolutely. FRINT includes progress tracking features that allow you to measure your growth and see how you're improving over time.",
        },
      ],
    },
    {
      category: "Usage",
      items: [
        {
          key: "7",
          question: "How do I get started with FRINT?",
          answer:
            "You can sign up for FRINT on our website. Once registered, you can start accessing tips, tracking your progress, and preparing for interviews right away.",
        },
        {
          key: "8",
          question: "Is FRINT only for students?",
          answer:
            "No, while FRINT is especially useful for students, it is also suitable for job seekers of all backgrounds who want to improve their interview skills.",
        },
        {
          key: "9",
          question: "Does FRINT provide mock interviews?",
          answer:
            "Currently, FRINT focuses on providing tips and progress tracking. Mock interview features may be introduced in future updates.",
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          key: "10",
          question: "What if I have trouble using FRINT?",
          answer:
            "We're here to help! You can contact our support team through the website or email us at frint.group@gmail.com.",
        },
        {
          key: "11",
          question: "Are there any costs associated with using FRINT?",
          answer:
            "FRINT offers both free and premium plans. The premium plan provides access to additional features and more advanced resources for interview preparation.",
        },
        {
          key: "12",
          question: "Can I suggest features or improvements for FRINT?",
          answer:
            "Yes! We value user feedback and are constantly working to improve FRINT. Feel free to reach out to us with suggestions.",
        },
      ],
    },
  ];
  interface FaqItem {
    key: string;
    question: string;
    answer: string;
  }

  interface FaqCategory {
    category: string;
    items: FaqItem[];
  }

  interface OpenItems {
    [key: string]: boolean;
  }

  const toggleItem = (categoryIndex: number, itemKey: string): void => {
    setOpenItems((prev: OpenItems) => ({
      ...prev,
      [`${categoryIndex}-${itemKey}`]: !prev[`${categoryIndex}-${itemKey}`],
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="p-4 relative w-full mx-auto ">
          <Image
            alt="team members"
            src={"/about-us/team.svg"}
            width={900}
            height={400}
            className="rounded-md opacity-10 max-sm:hidden mx-auto"
          />
          <div className="flex flex-col gap-2 sm:absolute inset-0 justify-center items-center">
            <p className=" text-2xl font-semibold">Our Mission</p>
            <p className="w-1/2 mx-auto text-center max-sm:w-full max-sm:text-start ">
              <span className="font-semibold text-[#1d4ed8] max-sm:text-start">
                At FRINT
              </span>
              , our mission is to make interviews less stressful and more
              successful for students and job seekers. We are committed to
              empowering individuals with the skills, confidence, and resources
              they need to overcome challenges, face interviews with
              self-assurance, and achieve their career goals.
            </p>
          </div>
        </div>

        {/* who are we */}
        <div className="flex flex-row justify-center items-center mx-auto max-sm:flex-col max-sm:p-4 gap-2 pt-14">
          <div className="w-1/3 flex flex-col gap-2 max-sm:w-full">
            <p className="text-2xl text-neutral-800 font-medium">Who We Are</p>
            <p className="text-neutral-600">
              FRINT is a dedicated platform designed for anyone seeking to
              improve their interview preparation. Our team is passionate about
              helping students and job seekers build confidence, track their
              progress, and maximize their potential in job interviews.
            </p>
          </div>
          <div className="max-sm:w-full ">
            <Image
              src={"/about-us/team2.svg"}
              alt="team 2"
              width={400}
              height={400}
              className="rounded-xl "
            />
          </div>
        </div>

        {/* Meet our team */}
        <div className="p-4 pt-16">
          <p className="flex justify-center items-center text-2xl font-medium ">
            Meet Our team
          </p>
          <div className="flex flex-wrap gap-4 mx-auto justify-center p-4">
            <Card isFooterBlurred className="border-none shadow-lg" radius="lg">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={250}
                src={"/about-us/sokleng.svg"}
                width={250}
              />
              <CardFooter className="flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-xl font-medium text-white/80">
                  Phen Sokleng
                </p>
                <div className="justify-between">
                  <p className="text-tiny text-white/80">
                    UI/UX Designer & Frontend Developer
                  </p>
                  {/* <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  View More
                </Button> */}
                </div>
              </CardFooter>
            </Card>
            <Card isFooterBlurred className="border-none shadow-lg" radius="lg">
              <Image
                alt="Houn Sreylen"
                className="object-cover"
                height={250}
                src={"/about-us/sreylen.svg"}
                width={250}
              />
              <CardFooter className="flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-xl font-medium text-white/80">
                  Houn Sreylen
                </p>
                <div className="justify-between">
                  <p className="text-tiny text-white/80">Content Creator</p>
                  {/* <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  View More
                </Button> */}
                </div>
              </CardFooter>
            </Card>
            <Card isFooterBlurred className="border-none shadow-lg" radius="lg">
              <Image
                alt="kimsong"
                className="object-cover"
                height={250}
                src={"/about-us/kimsong.svg"}
                width={250}
              />
              <CardFooter className="flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-xl font-medium text-white/80">Tuy Kimsong</p>
                <div className="justify-between">
                  <p className="text-tiny text-white/80">Backend Developer</p>
                  {/* <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  View More
                </Button> */}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Why & Vision */}
        <div className="flex flex-row max-sm:flex-col justify-between p-4 gap-4 pt-10">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="text-2xl font-medium ">Why We Started</p>
            <p className="text-neutral-600 w-[80%] mx-auto">
              We understand the frustration and discouragement that come with
              job rejections. FRINT was created to address these challenges and
              provide a supportive solution for individuals striving to improve
              and succeed in their career journeys.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="text-2xl font-medium ">Our Vision</p>
            <p className="text-neutral-600 w-[80%] mx-auto">
              We envision a world where every individual feels prepared and
              confident to showcase their abilities in interviews, regardless of
              past setbacks.
            </p>
          </div>
        </div>

        {/* Activy */}
        <div className="flex flex-col justify-end items-center">
          <p className="text-2xl  font-medium text-[#1d4ed8] p-4">
            Our Activity
          </p>
          <div className="w-full">
          <CarouselComponent />
          </div>
        </div>

        {/* Frequently Asked Questions (FAQs) */}
        <div className="w-full max-w-4xl mx-auto px-4 p-4">
          <p className="text-2xl font-semibold pt-10 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </p>
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-medium">{category.category}</h3>
                <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                  {category.items.map((item) => (
                    <AccordionItem
                      key={item.key}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}-${item.key}`]}
                      onClick={() => toggleItem(categoryIndex, item.key)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
