import { Query } from "@/lib/types";

export async function query({ query, variables, tags }: Query) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      tags,
      revalidate: 3600, // Revalidate every hour
    },
  }).then((r) => r.json());

  return data;
}
