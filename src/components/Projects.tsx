import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { client } from "@/lib/sanity";
import { FaLocationArrow } from "react-icons/fa6";

interface ProjectsCard {
  title: string;
  _id: string;
  description: string;
  thumbnailUrl: string;
  link: string;
  purpose: string;
  icons: { iconUrl: string }[];
}

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) {
    title,
    _id,
    description,
    "thumbnailUrl":thumbnail.asset->url,
    link,
    purpose,
    icons[]{
      'iconUrl':asset->url
    }
  }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  // console.log(data);

  return data;
}

export default async function Projects() {
  const data: ProjectsCard[] = await getData();
  // console.log(data);

  return (
    <div className="py-10">
      <h2 className="text-center md:text-5xl text-3xl font-extrabold my-10">
        A gallery of{" "}
        <span className="text-primary">recent and past projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12">
        {data.map((item) => (
          <div
            className="h-[30rem] w-[26rem] flex items-center justify-center border-2 rounded-lg"
            key={item._id}
          >
            <div className="flex flex-col px-6 py-4 tracking-tight justify-center">
              <div className="relative w-full mb-3">
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-md w-full h-full"
                />
                <p className="px-4 py-2 absolute text-base font-medium rounded-sm bg-purple-900/90 top-0 left-0">
                  {item.purpose}
                </p>
              </div>

              <h3 className="!m-0 !pb-2 font-bold text-xl">{item.title}</h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon?.iconUrl} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <Link href={item.link} target="_blank">
                  <Button className="py-2 md:text-base font-semibold text-sm">
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
