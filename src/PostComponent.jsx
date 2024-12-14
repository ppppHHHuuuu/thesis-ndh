import { Link } from "react-router-dom";

export default function PostComponent({
  author_name,
  description,
  topic,
  content,
  post_name,
  author_img,
  post_id,
}) {
  let descriptionContent = "";
  if (!description) {
    descriptionContent = content.split(".")[0];
  } else {
    descriptionContent = description;
  }

  // TODO: Get Comment List from JSON file
  const commentList = [{}, {}];
  return (
    <>
      <Link to={`/post/${post_id}`} className="text-black hover:text-black">
        {/* View Post */}
        <div className=" px-7 py-3 flex hover:bg-slate-200 rounded-lg gap-3 w-[750px] min-h-40">
          <div className="grow-1 w-9/12">
            <h2 className="text-3xl font-medium">{post_name}</h2>
            <div className="overflow-clip my-3 whitespace-normal">
              {descriptionContent}
            </div>
            <div>
              <span className="mr-10 text-slate-500">{topic}</span>
              {/* TODO: Comment icon  */}
              <span>{commentList.length}</span>
            </div>
          </div>
          <div
            id="author"
            className="flex flex-col items-center w-3/12 my-auto"
          >
            <img
              src={author_img}
              className="rounded-full self-center w-20 h-20 object-cover"
            />
            <div className="mt-2">{author_name}</div>
          </div>
        </div>
        <hr className="my-3"></hr>
      </Link>
    </>
  );
}
