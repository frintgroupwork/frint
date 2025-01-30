"use client";
import Section from "../PreparationComps/Section";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

const Collabration = () => {

  return (
    <>
      <Section className="flex flex-col items-center gap-4 w-full justify-center max-sm:mx-auto z-50 shadow-md bg-white py-5">
        <p className=" text-xl font-medium">
          COLLABORATION <span className="text-[#1d4ed8]">TEAM</span>
        </p>
        <div className="w-3/4 max-sm:w-full max-sm:pt-2">
          <div className="flex flex-wrap gap-4 justify-center items-center max-sm:py-2">
            <Link
              href={"https://frontend-empower-u-566k.vercel.app/"}
              className="block cursor-pointer transform transition-transform duration-300 hover:scale-105"
              target="_blank"
            >
              <Card className="relative group w-[300px] py-4 overflow-hidden hover:bg-black/30 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">Empower U</h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/collabration/empoweru.svg"
                    height={200}
                    width={270}
                  />

                  {/* Animated hover overlay */}
                  <div className="absolute inset-0  group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 transform translate-y-full group-hover:translate-y-0">
                    <p className="text-white font-bold uppercase mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      reliable information on labor laws
                    </p>
                    <p className="text-white text-start transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      A platform providing students and graduates with easy
                      access to reliable labor law information.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Link>
            <Link
              href={"https://frint-phi.vercel.app/"}
              className="block cursor-pointer transform transition-transform duration-300 hover:scale-105"
              target="_blank"
            >
              <Card className="relative group w-[300px] py-4 overflow-hidden hover:bg-black/30 ">
                <CardHeader className=" pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">FRINT</h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/collabration/frint.svg"
                    height={200}
                    width={270}
                  />

                  {/* Animated hover overlay */}
                  <div className="absolute inset-0  group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 transform translate-y-full group-hover:translate-y-0">
                    <p className="text-white font-bold uppercase mb-4  text-start transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      Interview Preparation
                    </p>
                    <p className="text-white text-start transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      FRINT - Digital preparation for confident youth in
                      interviews
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Link>
            <Link
              href={"https://oppteens.com/"}
              className="block cursor-pointer transform transition-transform duration-300 hover:scale-105"
              target="_blank"
            >
              <Card className="relative group w-[300px] py-4 overflow-hidden hover:bg-black/30 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">
                    Opportunity for Teenager
                  </h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2 hover:opacity-70">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl "
                    src="/collabration/oppteens.svg"
                    height={200}
                    width={270}
                  />

                  {/* Animated hover overlay */}
                  <div className="absolute inset-0  group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 transform translate-y-full group-hover:translate-y-0">
                    <p className="text-white font-bold uppercase mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      Scholarship Provider in Cambodia
                    </p>
                    <p className="text-white text-start transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      OppTEENs - Empowering Cambodian youth with scholarships
                      for higher education.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Collabration;
