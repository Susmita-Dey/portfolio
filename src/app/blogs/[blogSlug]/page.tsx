import CommentSection from "@/components/CommentSection";
import { fonts } from "@/lib/data";
import { Blog, BlogParams } from "@/lib/types";
import { query } from "@/utils/hashnode";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaBookOpen, FaHeart, FaRegEye } from "react-icons/fa6";
import { GiCalendar } from "react-icons/gi";

export async function generateMetadata({
  params,
}: BlogParams): Promise<Metadata> {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            seo {
              description
            }
            ogMetaData{
              image
            }
            title
          }
        }
      }
    `,
    variables: {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      slug: params.blogSlug,
    },
  });

  const post = publication?.post as Blog;

  return {
    title: `${post.title} - Susmita Dey`,
    description:
      post.seo?.description || `Read ${post.title} on Susmita Dey's Blog Page`,
    openGraph: {
      type: "website",
      siteName: "Susmita Dey - Software Developer Blogs",
      images: `${post.ogMetaData.image}`,
    },
  };
}

export default async function BlogPage({ params }: BlogParams) {
  const {
    data: { publication },
  } = await query({
    query: `query ($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          author {
            name
            profilePicture
            socialMediaLinks {
              twitter
              linkedin
            }
          }
          content {
            html
          }
          id
          title
          coverImage {
            url
          }
          publishedAt
          reactionCount
          readTimeInMinutes
          subtitle
          views
        }
      }
    }`,
    variables: {
      host: `${process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}`,
      slug: params.blogSlug,
    },
  });

  const blog = publication?.post as Blog;

  // console.log(blog.content.html);

  return (
    // <section className="max-w-5xl xl:max-w-7xl xl:grid xl:grid-cols-[2fr_1fr] gap-12 mt-12 mb-24">
    <section className="max-w-7xl mx-auto w-full flex flex-col justify-center items-center gap-12 mt-12 mb-24">
      <div>
        <div className="w-full flex flex-col justify-center items-center px-4 mx-auto">
          <h2 className="lg:text-4xl md:text-3xl text-2xl text-center text-pretty break-words font-bold mb-8">
            {blog.title}
          </h2>
          <h4
            className={`text-2xl ${fonts.robotoSlab} font-medium italic break-words text-center text-pretty text-blue-400 mb-8`}
          >
            {blog.subtitle}
          </h4>

          <div className="flex items-center gap-4 mb-8">
            {blog.author.profilePicture && (
              <Image
                width="48"
                height="48"
                className="w-12 h-12 rounded-full"
                src={blog.author.profilePicture}
                alt={`${blog.author.name}'s Profile Picture`}
              />
            )}
            <div>
              <p className="text-lg font-semibold mb-[.1rem]">
                {blog.author.name}
              </p>
              <ul className="flex gap-4">
                {blog.author.socialMediaLinks.twitter && (
                  <li>
                    <a
                      className="hover:underline hover:text-blue-500"
                      href={blog.author.socialMediaLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                )}
                {blog.author.socialMediaLinks.linkedin && (
                  <li>
                    <a
                      className="hover:underline hover:text-blue-500"
                      href={blog.author.socialMediaLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:gap-3">
            <div className="font-mono flex gap-1 text-zinc-400 mb-2">
              <GiCalendar className="text-xl mx-1 mt-0.5 font-bold" />
              <p>
                Published on{" "}
                {new Date(blog.publishedAt).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex gap-1 font-mono text-zinc-400 mb-2">
              <FaBookOpen className="text-xl mx-1 mt-0.5 font-bold" />
              <p>Estimated Reading Time: {blog.readTimeInMinutes} minutes</p>
            </div>
          </div>

          <div className="flex gap-4 justify-between my-4">
            <span className="flex gap-1">
              <FaHeart className="text-2xl text-red-500 font-medium mt-0.5 mr-1" />
              <p className="text-lg">{blog.reactionCount}</p>
            </span>
            <span className="flex gap-1">
              <FaRegEye className="text-2xl font-medium mt-0.5 mr-1 text-green-500" />
              <p className="text-lg">{blog.views}</p>
            </span>
          </div>
        </div>
        <div className="my-6">
          {blog.coverImage && (
            <Image
              width="1920"
              height="550"
              className="w-full rounded-lg h-auto hover:scale-105 hover:transition-opacity"
              src={blog.coverImage.url}
              alt={blog.title}
              priority
            />
          )}
        </div>
        <article className="w-full xl:order-1 mx-auto prose prose-lg">
          <div
            className="blog-post container mx-auto px-4"
            dangerouslySetInnerHTML={{
              __html: blog.content.html,
            }}
          />
        </article>
      </div>
      <CommentSection slug={params.blogSlug} postId={blog.id} />
    </section>
  );
}
