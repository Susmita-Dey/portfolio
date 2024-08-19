import CommentSection from "@/components/CommentSection";
import { Blog, BlogParams } from "@/lib/types";
import { query } from "@/utils/hashnode";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaBookOpen } from "react-icons/fa6";
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
              }
            }
          }`,
    variables: {
      host: `${process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}`,
      slug: params.blogSlug,
    },
  });

  const blog = publication?.post as Blog;

  // Get the article text
  const articleText = blog.content.html;

  // Split the text into an array of words
  const wordsArray = articleText.split(" ");

  // Count the number of words in the array
  const wordCount = wordsArray.length;

  // Calculate the estimated reading time
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  // console.log(blog.content.html);

  return (
    // <section className="max-w-5xl xl:max-w-7xl xl:grid xl:grid-cols-[2fr_1fr] gap-12 mt-12 mb-24">
    <section className="max-w-7xl mx-auto w-full flex flex-col justify-center items-center gap-12 mt-12 mb-24">
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-8">{blog.title}</h2>

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
            <p>Estimated Reading Time: {readingTime} minutes</p>
          </div>
        </div>
        <div className="mb-6">
          {blog.coverImage && (
            <Image
              width="1920"
              height="550"
              className="w-full rounded-lg h-auto hover:scale-110 hover:transition-opacity"
              src={blog.coverImage.url}
              alt={blog.title}
              priority
            />
          )}
        </div>
        <article className="w-full xl:order-1 mx-auto prose prose-lg">
          <div
            className="blog-post"
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
