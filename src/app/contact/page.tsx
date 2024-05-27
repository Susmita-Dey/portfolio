"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/actions";
import Link from "next/link";
import { useState } from "react";
import { GiPaperPlane } from "react-icons/gi";
import {
  MdCall,
  MdEmail,
  MdMeetingRoom,
  MdNetworkPing,
  MdWorkspacesFilled,
} from "react-icons/md";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    price: "",
    company: "",
    message: "",
  });

  const { toast } = useToast();

  const [pending, setPending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    await sendEmail(new FormData(e.target as HTMLFormElement));
    try {
      // Send email
      // Show success toast
      toast({
        title: "Email sent successfully!",
        description: "We'll get back to you as soon as possible!",
      });
    } catch (error) {
      // Show error toast
      toast({
        variant: "destructive",
        title: "Error sending email",
        description: "Kindly shoot an email to report us!",
      });
    }
    setPending(false);
    setFormData({
      name: "",
      email: "",
      location: "",
      price: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="w-full min-h-screen my-5 md:mx-6 flex justify-center items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <Toaster />
      <div className="flex md:flex-row flex-col px-4 w-full justify-between items-center md:gap-0 gap-6">
        {/* left side */}
        <div className="flex flex-col w-full space-y-4 px-6">
          <h2 className="text-3xl font-medium">
            Let&apos;s build an awesome project together!
          </h2>
          <form
            className="flex flex-col space-y-6 py-6"
            onSubmit={handleSubmit}
          >
            <div className="flex md:flex-row md:gap-4 max-w-full flex-col gap-6">
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex md:flex-row md:gap-4 max-w-full flex-col gap-6">
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your location</Label>
                <Input
                  type="text"
                  name="location"
                  placeholder="Kolkata, India"
                  className="w-full"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your budget range (mention currency)</Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="$500 USD"
                  className="w-full"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Label>Your company</Label>
              <Input
                type="text"
                name="company"
                placeholder="ABC Company"
                className="md:w-[89%]"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label>Your message</Label>
              <Textarea
                name="message"
                placeholder="Your message"
                rows={5}
                className="md:w-[89%]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              disabled={pending}
              type="submit"
              className="w-32 font-bold text-balance text-base hover:bg-purple-600"
            >
              {pending ? "Sending..." : "Send"}{" "}
              <GiPaperPlane className="mx-1 text-xl opacity-70 transition-all hover:translate-x-1 hover:-translate-y-1" />
            </Button>
          </form>
        </div>
        <Separator orientation="vertical" className="block h-full" />
        {/* right side */}
        <div className="flex flex-col w-full px-6">
          <h2 className="text-3xl font-medium pb-10">Get in touch.</h2>
          <div className="flex flex-col text-xl space-y-4">
            <span className="flex flex-col space-y-2">
              <span className="flex flex-row">
                <MdEmail className="mt-0.5 text-2xl mr-1" /> Email Us
              </span>
              <Link
                href="mailto:susmitadeybusiness@gmail.com"
                className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
              >
                susmitadeybusiness@gmail.com
              </Link>
              <span className="flex flex-row gap-1">
                <Link
                  href="mailto:susmitadeywork@gmail.com"
                  className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
                >
                  susmitadeywork@gmail.com
                </Link>
                <span className="text-base mt-0.5 italic">
                  {" "}
                  (For HR&apos;s and founders)
                </span>
              </span>
            </span>
            <Separator />
            <span className="flex flex-col space-y-2">
              <span className="flex flex-row">
                <MdCall className="mt-0.5 text-2xl mr-1" /> Call Us
              </span>
              <Link
                href="https://wa.me/+919641750345"
                className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
              >
                +91 96417 50345
              </Link>
            </span>
            <Separator />
            <span className="flex flex-col space-y-2">
              <span className="flex flex-row">
                <MdMeetingRoom className="mt-0.5 text-2xl mr-1" /> Book a Call
              </span>
              <Link
                href="https://cal.com/susmitadey"
                className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
              >
                cal.com/susmitadey
              </Link>
            </span>
            <Separator />
            <span className="flex flex-col space-y-2">
              <span className="flex flex-row">
                <MdNetworkPing className="mt-0.5 text-2xl mr-1" /> Need
                Mentorship?
              </span>
              <Link
                href="https://topmate.io/susmita"
                className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
              >
                topmate.io/susmita
              </Link>
            </span>
            <Separator />
            <span className="flex flex-col space-y-2">
              <span className="flex flex-row">
                <MdWorkspacesFilled className="mt-0.5 text-2xl mr-1" /> Connect
                on Socials
              </span>
              <Link
                href="https://susmitadey.bio.link"
                className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
              >
                susmitadey.bio.link
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
