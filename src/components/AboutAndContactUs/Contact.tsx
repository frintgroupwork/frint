"use client";
import React from 'react';
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Input, Textarea, Button } from "@nextui-org/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <div className="p-4 relative w-full mx-auto">
        <Image
          alt="contact background"
          src="/frint_logo.svg"
          width={800}
          height={400}
          className="rounded-md opacity-5 max-sm:hidden mx-auto"
        />
        <div className="flex flex-col gap-2 sm:absolute inset-0 justify-center items-center">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p className="w-1/2 mx-auto text-center max-sm:w-full max-sm:text-start  text-neutral-600">
            Have questions about FRINT? We&apos;re here to help! Reach out to us through any of the channels below.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 py-8">
        <Card className="p-6 text-center space-y-4">
          <Mail className="w-8 h-8 mx-auto text-blue-600" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-neutral-600">frint.group@gmail.com</p>
        </Card>
        
        <Card className="p-6 text-center space-y-4">
          <Phone className="w-8 h-8 mx-auto text-blue-600" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-neutral-600">+855 12 345 678</p>
        </Card>
        
        <Card className="p-6 text-center space-y-4">
          <MapPin className="w-8 h-8 mx-auto text-blue-600" />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-neutral-600">Phnom Penh, Cambodia</p>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl px-4 py-8">
        <Card className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                label="First Name"
                placeholder="Enter your first name"
                isRequired
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Enter your last name"
                isRequired
              />
            </div>
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              isRequired
            />
            <Input
              type="text"
              label="Subject"
              placeholder="Enter message subject"
              isRequired
            />
            <Textarea
              label="Message"
              placeholder="Type your message here..."
              minRows={4}
              isRequired
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white"
              endContent={<Send className="w-4 h-4" />}
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Quick Help</h2>
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-2">When will I receive a response?</h3>
            <p className="text-neutral-600">We typically respond to all inquiries within 24-48 hours during business days.</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-medium mb-2">What information should I include?</h3>
            <p className="text-neutral-600">Please include your name, contact details, and a detailed description of your query or concern.</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-medium mb-2">Need urgent assistance?</h3>
            <p className="text-neutral-600">For immediate help, please contact us directly through our phone number during business hours.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}