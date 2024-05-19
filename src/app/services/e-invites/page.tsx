import InstagramEmbed, { ContentType } from "@/components/InstagramEmbed";
import { fonts } from "@/lib/data";
import React from "react";

const EInvitesPage = () => {
  // Replace with your array of reel URLs
  const content: { type: ContentType; url: string }[] = [
    { type: "reel", url: "https://www.instagram.com/reel/C5GTKlUPnCn/" },
    { type: "reel", url: "https://www.instagram.com/reel/C44fRYsLJdc/" },
    { type: "reel", url: "https://www.instagram.com/reel/C423o0xxM5T/" },
    { type: "reel", url: "https://www.instagram.com/reel/C42YoZ6RGfE/" },
    { type: "post", url: "https://www.instagram.com/p/C42ZZfDBvFU/" },
  ];

  return (
    <section className="flex flex-col items-center my-20">
      <h2 className="font-bold md:text-5xl text-3xl">
        Beautiful{" "}
        <span className={`text-purple-600 ${fonts.robotoSlab.className}`}>
          E-Invite
        </span>{" "}
        Cards and Videos
      </h2>
      <p className="font-medium text-xl mt-4">
        Check out which out to you like to make for your occassion!
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-10">
        {content.map((item, index) => (
          <InstagramEmbed key={index} type={item.type} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default EInvitesPage;
