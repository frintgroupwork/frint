"use client";
import React from "react";
import Section from "./Section";
import Image from "next/image";
import { Form, Input, Checkbox, Button } from "@nextui-org/react";

const Authentication = ({
  isLogin,
  isSignup,
}: {
  isLogin?: boolean;
  isSignup?: boolean;
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  // Real-time password validation
  const getPasswordError = (value: string) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
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

    // Custom validation checks
    const newErrors: { [key: string]: string } = {};

    // Password validation
    const passwordError = getPasswordError(data.password as string);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
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

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <>
      <div className="flex flex-row ">
        <Section className="w-[60%] max-sm:hidden bg-blue-600">
          <div className="">
            <Image
              alt="bg"
              src={"Authentication/SignupBg.svg"}
              width={200}
              height={100}
            />
          </div>
        </Section>
        <Section className="w-[40%] max-sm:w-full">
          <div className="flex flex-col py-4 sm:pl-10 justify-center items-start max-sm:items-center">
            <div>
              <p className="text-4xl font-medium text-neutral-800 max-lg:text-2xl whitespace-normal">
                Join us <br />
                Create an <span className="text-[#1d4ed8]">account</span>
              </p>
              <p className="text-base text-neutral-500 max-lg:text-sm whitespace-normal">
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
                    name="terms"
                    validationBehavior="aria"
                    value="true"
                    onValueChange={() =>
                      setErrors((prev) => {
                        const { terms, ...rest } = prev;
                        return rest;
                      })
                    }
                  >
                    I agree to FRINT’s <span className="text-[#1d4ed8]">Term of Service</span> and <span className="text-[#1d4ed8]">Privacy Policy</span>.
                  </Checkbox>

                  {errors.terms && (
                    <span className="text-danger text-small">
                      {errors.terms}
                    </span>
                  )}

                  <div className="flex gap-4">
                    <Button className="w-full" color="primary" type="submit">
                      Sign up
                    </Button>
                  </div>
                </div>

                {submitted && (
                  <div className="text-small text-default-500 mt-4">
                    Submitted data:{" "}
                    <pre>{JSON.stringify(submitted, null, 2)}</pre>
                  </div>
                )}
              </Form>
            </div>
            <div></div>
            <div></div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Authentication;
