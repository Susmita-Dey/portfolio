import { Blog } from "@/lib/types";
import { query } from "@/utils/hashnode";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Blogs() {
  const {
    data: { publication },
  } = await query({
    query: `query($host: String) {
            publication(host:$host){
              posts(first:30){
                edges{
                  node{
                    title
                    slug
                    id
                    coverImage {
                      url
                    }
                    publishedAt
                  }
                }
              }
            }
          }`,
    variables: { host: `${process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}` },
  });

  const blogs: Array<Blog> = publication.posts.edges.map(
    ({ node }: { node: Blog }) => node
  );

  //   console.log("blogs", blogs);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 w-full">
      <ul className="my-10 justify-center items-center">
        <h2 className="text-4xl font-bold my-10">
          My blogs telling my tech journey
        </h2>
        {blogs.map((blog, i) => (
          <li className="grid sm:grid-cols-2 gab-8 mb-16" key={i}>
            <Link href={`/blogs/${blog.slug}`}>
              <Image
                src={blog.coverImage.url}
                width={600}
                height={400}
                alt={blog.title}
                className="rounded border border-zinc-300 w-full h-full"
              />
            </Link>
            <span className="mx-5">
              <h2 className="text-2xl pb-5 border-b-2 mb-5">
                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h2>
              <p className="text-zinc-200">
                {new Date(blog.publishedAt).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
