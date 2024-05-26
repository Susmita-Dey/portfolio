import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  MdCall,
  MdEmail,
  MdMeetingRoom,
  MdNetworkPing,
  MdWorkspacesFilled,
} from "react-icons/md";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen my-5 md:mx-6 flex justify-center items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="flex md:flex-row flex-col px-4 w-full justify-between items-center md:gap-0 gap-6">
        {/* left side */}
        <div className="flex flex-col w-full space-y-4 px-6">
          <h2 className="text-3xl font-medium">
            Let's build an awesome project together!
          </h2>
          <form action="" className="flex flex-col space-y-6 py-6">
            <div className="flex md:flex-row md:gap-4 max-w-full flex-col gap-6">
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your name</Label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="w-full"
                  required
                />
              </div>
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your email</Label>
                <Input
                  type="email"
                  placeholder="john@doe.com"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="flex md:flex-row md:gap-4 max-w-full flex-col gap-6">
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your location</Label>
                <Input
                  type="text"
                  placeholder="Kolkata, India"
                  className="w-full"
                  required
                />
              </div>
              <div className="flex flex-col space-y-3 md:w-72">
                <Label>Your budget range (mention currency)</Label>
                <Input
                  type="text"
                  placeholder="$500 USD"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Label>Your company</Label>
              <Input
                type="text"
                placeholder="ABC Company"
                className="md:w-[89%]"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label>Your message</Label>
              <Textarea
                placeholder="Your messsage"
                rows={5}
                className="md:w-[89%]"
                required
              />
            </div>
          </form>
          <Button
            type="submit"
            className="w-32 font-bold text-balance text-base"
          >
            Send
          </Button>
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
              <Link
                href="mailto:susmitadeywork@gmail.com"
                className="text-neutral-500 text-lg hover:underline hover:underline-offset-2 hover:text-inherit"
              >
                susmitadeywork@gmail.com
              </Link>
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
