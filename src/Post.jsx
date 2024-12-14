import { useParams } from "react-router-dom";
import data from "../note.json";
import CommentComponent from "./CommentComponent";
import InputForm from "./inputForm";
import { useEffect, useState } from "react";
export default function Post(
  {
    //   topic,
    //   name,
    //   author_id,
    //   author_name,
    //   author_img,
    //   bio,
  }
) {
  const { id } = useParams();
  const post = data.posts.find((post) => post.id === id); // Find post with the matching ID

  let commentsData = [];
  try {
    const commentsPost = post.comments;
    const commentsLocalStorage = JSON.parse(localStorage.getItem(`post:${post.id}`))
    console.log({commentsLocalStorage})

    if (!commentsPost && !commentsLocalStorage) {
      console.log("is Skip")
      throw new Error("Skip")
    }

    if (!commentsPost) {
      commentsData = commentsLocalStorage
    }
    else if (!commentsLocalStorage) {
      commentsData = commentsPost;

    } else {
      commentsData = commentsLocalStorage.length > commentsPost.length ? commentsLocalStorage :commentsLocalStorage

    }

  } catch(e) {
    commentsData= []
  }
console.log({commentsData})
  const [comments, setComments] = useState(commentsData);

  if (!post) {
    return <p>Post not found</p>;
  }

  const authors = data.authors;
  const author = authors.find((author) => author.id === post.author_id);

  const paragraphs = post.content.split("\n");

  useEffect(() => {
    console.log(comments);
  }, [comments]);
  return (
    <>
      <div className="bg-[#FCFAF6]">
        <div className="text-left max-w-3xl  p-10">
          <div className="text-slate-400 text-brown-700 text-xl">
            Lăng kính `{">"}` {post.topic.name}
          </div>
          <hr className="my-4" />
          <div className="text-4xl mt-2 mb-5">{post.title}</div>

          <div className="flex flex-row gap-5">
            <a href={`/user/${post.author_id}`}>
              <img
                src={author.src}
                className="rounded-full self-center w-20 h-20 object-cover"
              />
            </a>

            <div className="grow flex flex-col items-start justify-center">
              <div className="font-bold text-2xl"> {author.name}</div>
              <div className="text-slate-500 text-xl">{author.bio}</div>
            </div>
            <div>
              <button className="btn">+Theo dõi</button>
            </div>
          </div>

          <div className="text-xl">
            {paragraphs.map((p) => (
              <div key={Date.now()} className="mb-3 mt-7">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-left px-10 mt-10">
        <h1 className="font-sans text-2xl ">Ý kiến ({comments.length})</h1>
        <InputForm
          post_id={post.id}
          comments={comments}
          setComments={setComments}
        />
        {comments.map((comment) => {
          console.log(comment);
          const user = authors.find((author) => author.id === comment.user_id);
          return (
            <div key={author.id.concat(post.id)}>
              <CommentComponent
                author_img={user.src}
                user_name={user.name}
                content={comment.content}
                comments={comment.comments}
                depth={0}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
