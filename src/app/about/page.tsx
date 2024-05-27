import SkillsSection from "@/components/SkillsSection";
// import { TracingBeamDemo } from "@/components/TrackingBeamDemo";
import { ImagesSlider } from "@/components/ui/ImagesSlider";
import { Separator } from "@/components/ui/separator";
import { certificates, fonts, generalSkills } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const AboutPage = () => {
  return (
    <section className="my-20 mx-6 min-h-screen justify-center items-center">
      <div className="flex md:justify-between justify-center items-center mb-10 md:flex-row flex-col">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <div className="border-4 rounded-xl w-80">
            <Image
              src="/pic-purple-bg.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="profile-photo"
              width={500}
              height={500}
              priority
            />
          </div>
          <h2 className="text-3xl w-80 font-medium text-center md:text-left text-balance tracking-tight">
            Meet <span className="text-primary">Susmita.</span>
          </h2>
          <div className="flex flex-row gap-2 md:justify-start md:items-start w-80">
            <Link
              href="https://linkedin.com/in/susmitacodes"
              target="_blank"
              className="items-start"
            >
              <IoLogoLinkedin className="text-xl" />
            </Link>
            <Link
              href="https://github.com/Susmita-Dey/"
              target="_blank"
              className="items-start"
            >
              <IoLogoGithub className="text-xl" />
            </Link>
            <Link
              href="https://www.instagram.com/susmitadeyofficial"
              target="_blank"
              className="items-start"
            >
              <IoLogoInstagram className="text-xl" />
            </Link>
            <Link
              href="https://x.com/its_SusmitaDey"
              target="_blank"
              className="items-start"
            >
              <IoLogoTwitter className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:px-14 md:my-0 my-10">
          <h2 className="md:text-5xl text-3xl font-bold text-center md:text-right text-wrap tracking-tight">
            A big{" "}
            <span className={`text-primary ${fonts.robotoSlab.className}`}>
              fan of building
            </span>{" "}
            products, design, coffee and life.
          </h2>
          <p className="text-lg">
            Susmita is a sweet, smart and intelligent girl based in Kolkata,
            India. She loves to code, explore new technologies, listen to music,
            watch movies and travel. Beyond all her achievements and failures,
            there&apos;s an interesting story of her life. Her tech journey
            started way before she was admitted to college in Computer Science
            Major but she was unaware of it.
          </p>
          {/* Schooling */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-xl">Schooling</h3>
            <ul className="list-disc px-4 text-base">
              <li>Convent of Jesus and Mary (Class KG - XII)</li>
              <li>Kalyani Mahavidyalaya (Graduation College: 2020-2023)</li>
              <li>Techno Main Salt Lake (Masters Collge: 2023-2025)</li>
            </ul>
          </div>
          {/* Schooling */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-xl">Hobbies</h3>
            <ul className="list-none text-base flex flex-row gap-2">
              <li className="bg-white border-gray-900 border-[1.5px] rounded-lg dark:bg-purple-500/10 dark:text-white/80 px-3 py-2">
                Watching Movies
              </li>
              <li className="bg-white border-gray-900 border-[1.5px] rounded-lg dark:bg-purple-500/10 dark:text-white/80 px-3 py-2">
                Reading Books
              </li>
              <li className="bg-white border-gray-900 border-[1.5px] rounded-lg dark:bg-purple-500/10 dark:text-white/80 px-3 py-2">
                Writing Poems
              </li>
            </ul>
          </div>
          {/* Skills */}
          <SkillsSection
            data={generalSkills}
            parentClassName="max-w-8xl text-left space-y-4"
            headingClassName="text-xl font-semibold mb-0"
            itemsClassName="text-base justify-start"
          />
        </div>
      </div>
      <Separator />
      <div className="flex flex-col space-y-6 justify-center items-center my-10">
        <h2 className="md:text-5xl text-3xl font-medium text-center mb-5 text-balance tracking-tight">
          Gallery of <span className="text-primary">Achievements</span>
        </h2>
        <ImagesSlider
          className="w-full md:h-[80vh]"
          images={certificates}
          overlay="false"
        />
      </div>
      {/* Story of Getting into tech */}
      {/* <TracingBeamDemo /> */}
    </section>
  );
};

export default AboutPage;
