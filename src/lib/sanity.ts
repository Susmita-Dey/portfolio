import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-07-19",
  useCdn: false,
});

export const getProjectsData = async () => {
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
};

export const getTestimonialsData = async () => {
  const query = `*[_type == 'testimonials'] | order(_createdAt desc) {
    client,
    _id,
    designation,
    "clientImg":clientImg.asset->url,
    social,
    quote,
  }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  // console.log(data);

  return data;
};
