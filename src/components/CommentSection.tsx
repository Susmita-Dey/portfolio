import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Comment } from "@/lib/types";
import { query } from "@/utils/hashnode";
import { VscCommentDiscussion } from "react-icons/vsc";

export default async function CommentSection({
  slug,
  postId,
}: {
  slug: string;
  postId: string;
}) {
  const {
    data: { publication },
  } = await query({
    query: `query ($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            comments(first: 5) {
              edges {
                node {
                  id
                  content {
                    text
                  }
                  author {
                    username
                    name
                    profilePicture
                  }
                  dateAdded
                }
              }
            }
          }
        }
      }`,
    variables: {
      host: `${process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}`,
      slug: slug,
    },
  });

  const comments: Array<Comment> = publication.post.comments.edges.map(
    ({ node }: { node: Comment }) => node
  );

  //   console.log("comments: ", comments);

  return (
    <div className="grid gap-6">
      <h2 className="font-semibold text-xl">Comments</h2>
      <div className="flex flex-col gap-4">
        {comments.map((comment) => (
          <div className="text-sm flex items-start gap-4" key={comment.id}>
            <Avatar className="w-10 h-10 border">
              <AvatarImage
                src={comment.author.profilePicture}
                alt={comment.author.username}
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{comment.author.name}</div>
                <div className="text-gray-500 text-xs dark:text-gray-400">
                  {new Date(comment.dateAdded).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div>{comment.content.text}</div>
              <a
                href={`https://hashnode.com/discussions/post/${postId}`}
                target="_blank"
                rel="noopener"
              >
                <Button variant="ghost" size="sm">
                  <VscCommentDiscussion className="w-4 h-4 mr-1" />
                  Discuss on Hashnode
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
