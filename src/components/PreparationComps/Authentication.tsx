"use client";
import React from "react";
import Section from "./Section";
import Image from "next/image";
import { Form, Input, Checkbox, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Authentication = ({ isLogin }: { isLogin?: boolean }) => {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  // Real-time password validation
  const getPasswordError = (value: string) => {
    if (value.length < 8) {
      return "Password must be 8 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }
    return null;
  };

  const onSubmit = (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!isLogin) {
      // Sign up validation
      const newErrors: { [key: string]: string } = {};
      const passwordError = getPasswordError(data.password as string);

      if (passwordError) {
        newErrors.password = passwordError;
      }

      if (data.name === "admin") {
        newErrors.name = "Nice try! Choose a different username";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors as { [key: string]: string });
        return;
      }

      if (data.terms !== "true") {
        setErrors({ terms: "Please accept the terms" } as {
          [key: string]: string;
        });
        return;
      }
    }

    setErrors({});
    setSubmitted(data);
    if (submitted && submitted.email && submitted.password && isLogin) {
      // Handle success response
      router.push("/");
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Section */}
      <div className="w-1/2 relative bg-blue-700 p-8 flex flex-col justify-between max-sm:hidden rounded-r-3xl shadow-2xl">
        <div className="absolute top-0 left-0">
          <Image
            src="/Authentication/SignupBg.svg"
            alt="FRINT"
            width={260}
            height={100}
          />
        </div>

        <div className="text-white absolute bottom-44">
          <p className="text-lg">Welcome to</p>
          <h1 className="text-3xl font-bold mb-2">
            Interviews Preparation, <span className="italic">FRINT</span>
          </h1>
          <p className="text-sm opacity-80">
            for secure your dream job and career.
          </p>
        </div>

        <div className="absolute bottom-0 left-0">
          <Image
            src="/Authentication/2.svg"
            alt="FRINT"
            width={260}
            height={100}
          />
        </div>
      </div>

      {/* Right Section */}
      <Section className="w-[40%] max-sm:w-full">
        {isLogin ? (
          // Login Form
          <div className="flex flex-col py-4 sm:pl-10 pt-12 justify-center items-center max-sm:items-center">
            <div>
              <p className="text-4xl font-medium text-neutral-800 max-lg:text-2xl whitespace-normal">
                Welcome Back! <br />
                Login to your <span className="text-[#1d4ed8]">account</span>
              </p>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal pt-2">
                It’s nice to see you again.
              </p>
            </div>
            <div className="py-4">
              <Form
                className="flex justify-center items-center py-2"
                validationBehavior="native"
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={onSubmit}
              >
                <div className="flex flex-col gap-4 ">
                  <Input
                    isRequired
                    errorMessage={({ validationDetails }) => {
                      if (validationDetails.valueMissing) {
                        return "Please enter your email";
                      }
                      if (validationDetails.typeMismatch) {
                        return "Please enter a valid email address";
                      }
                    }}
                    label="Email"
                    labelPlacement="inside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />

                  <Input
                    isRequired
                    errorMessage={getPasswordError(password)}
                    isInvalid={getPasswordError(password) !== null}
                    label="Password"
                    labelPlacement="inside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                  />

                  <Checkbox
                    isRequired
                    classNames={{
                      label: "text-small",
                    }}
                    isInvalid={!!errors.terms}
                    // name="terms"
                    validationBehavior="aria"
                    value="true"
                    onValueChange={() =>
                      setErrors((prev) => {
                        const { ...rest } = prev;
                        return rest;
                      })
                    }
                  >
                    Remember me{" "}
                    <span className="text-[#1d4ed8] opacity-0">
                      Term of <span className="max-lg:hidden">Service</span> and{" "}
                    </span>
                    <span className="text-[#1d4ed8] opacity-0">
                      Privacy Policy.
                    </span>
                  </Checkbox>

                  {errors.terms && (
                    <span className="text-danger text-small">
                      {errors.terms}
                    </span>
                  )}
                  <Link href="">
                    <Button className="w-full" color="primary" type="submit">
                      Log in
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center mt-4">
                  <div>
                    <p className="text-center text-gray-400">
                      _____________________
                      <span className="text-gray-500">or</span>
                      _______________________{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-base text-gray-500">
                      Don’t have an account ?{" "}
                      <Link
                        href={"/signup"}
                        className="font-medium text-[#1d4ed8] cursor-pointer"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        ) : (
          // Signup Form (Your existing signup form code)
          <div className="flex flex-col py-4 sm:pl-10 pt-12 justify-center items-center max-sm:items-center">
            <div>
              <p className="text-4xl font-medium text-neutral-800 max-lg:text-2xl whitespace-normal">
                Join us <br />
                Create an <span className="text-[#1d4ed8]">account</span>
              </p>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal pt-2">
                to preparing thoroughly in interviews.
              </p>
            </div>
            <div className="py-4">
              <Form
                className="flex justify-center items-center py-2"
                validationBehavior="native"
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={onSubmit}
              >
                <div className="flex flex-col gap-4">
                  <Input
                    isRequired
                    errorMessage={({ validationDetails }) => {
                      if (validationDetails.valueMissing) {
                        return "Please enter your name";
                      }
                      return errors.name;
                    }}
                    label="Name"
                    labelPlacement="inside"
                    name="name"
                    className="w-full"
                    placeholder="Enter your name"
                  />

                  <Input
                    isRequired
                    errorMessage={({ validationDetails }) => {
                      if (validationDetails.valueMissing) {
                        return "Please enter your email";
                      }
                      if (validationDetails.typeMismatch) {
                        return "Please enter a valid email address";
                      }
                    }}
                    label="Email"
                    labelPlacement="inside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />

                  <Input
                    isRequired
                    errorMessage={getPasswordError(password)}
                    isInvalid={getPasswordError(password) !== null}
                    label="Password"
                    labelPlacement="inside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                  />

                  <Checkbox
                    isRequired
                    classNames={{
                      label: "text-small",
                    }}
                    isInvalid={!!errors.terms}
                    // name="terms"
                    validationBehavior="aria"
                    value="true"
                    onValueChange={() =>
                      setErrors((prev) => {
                        const {...rest } = prev;
                        return rest;
                      })
                    }
                  >
                    I agree to FRINT&apos;s{" "}
                    <span className="text-[#1d4ed8]">Term of Service</span> and{" "}
                    <span className="text-[#1d4ed8]">Privacy Policy</span>.
                  </Checkbox>

                  {errors.terms && (
                    <span className="text-danger text-small">
                      {errors.terms}
                    </span>
                  )}

                  <Button
                    className="w-full"
                    color="primary"
                    type="submit"
                    onClick={() => handleNavigation("/survey/step-1")}
                  >
                    Sign up
                  </Button>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center mt-4">
                  <div>
                    <p className="text-center text-gray-400">
                      _____________________
                      <span className="text-gray-500">or</span>
                      _______________________{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-base text-gray-500">
                      Already have an account?{" "}
                      <Link
                        href={"/login"}
                        className="font-medium text-[#1d4ed8] cursor-pointer"
                      >
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Authentication;
