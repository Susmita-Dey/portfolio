import { Blog, BlogParams } from "@/lib/types";
import { query } from "@/utils/hashnode";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

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
  // console.log(blog.content.html);

  return (
    <section className="max-w-5xl xl:max-w-7xl xl:grid xl:grid-cols-[2fr_1fr] gap-12 mt-12 mb-24">
      <aside className="mb-12 xl:order-2">
        {blog.coverImage && (
          <Image
            width="984"
            height="554"
            className="w-full rounded h-auto mb-6 xl:mb-12"
            src={blog.coverImage.url}
            alt={blog.title}
            priority
          />
        )}
      </aside>
      <article className="w-full xl:order-1 mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>

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

        <p className="italic text-zinc-500 mb-6">
          Published on{" "}
          {new Date(blog.publishedAt).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        <div
          className="blog-post"
          dangerouslySetInnerHTML={{
            __html: blog.content.html,
          }}
        />
      </article>
    </section>
  );
}
