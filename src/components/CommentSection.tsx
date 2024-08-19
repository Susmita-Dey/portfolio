import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Comment } from "@/lib/types";
import { query } from "@/utils/hashnode";
import Image from "next/image";
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
  // console.log("No of comments: ", comments.length);

  return (
    <div className="grid gap-6 max-w-7xl w-auto md:px-8 md:py-6 p-4 mx-auto border-2 rounded-md">
      <h2 className="font-semibold text-2xl">Comments ({comments.length})</h2>
      <div className="flex flex-col gap-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="text-base flex items-start gap-4" key={comment.id}>
              <Avatar className="w-10 h-10 border">
                <AvatarImage
                  src={comment.author.profilePicture}
                  alt={comment.author.username}
                />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <a
                    className="font-semibold"
                    href={`https://hashnode.com/@${comment.author.username}`}
                    target="_blank"
                  >
                    {comment.author.name}
                  </a>
                  <div className="text-gray-500 text-sm dark:text-gray-400">
                    {new Date(comment.dateAdded).toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <p className="font-normal text-base">{comment.content.text}</p>
                <a
                  href={`https://hashnode.com/discussions/post/${postId}`}
                  target="_blank"
                  rel="noopener"
                >
                  <Button variant="ghost" size="default">
                    <VscCommentDiscussion className="w-4 h-4 mr-1" />
                    Discuss on Hashnode
                  </Button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="container gap-4 flex flex-col justify-center items-center">
            <Image
              src={"/sad.webp"}
              alt="sad-gif"
              width={640}
              height={540}
              className="w-full h-full rounded-md"
            />
            <p className="text-lg italic font-normal">No comments made yet!</p>
            <a
              href={`https://hashnode.com/discussions/post/${postId}`}
              target="_blank"
              rel="noopener"
            >
              <Button variant="default" size="lg">
                <VscCommentDiscussion className="w-4 h-4 mr-1" />
                Discuss on Hashnode
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
