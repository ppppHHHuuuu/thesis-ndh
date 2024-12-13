import { useEffect, useState } from "react";
import data from "../../note.json";
export default function InputForm({
  comments,
  setComments,
  post_id,
  rows = 4,
}) {
  const [inputForm, setInputForm] = useState();
  const posts = data.posts;
  const post = posts.find((post) => post_id === post.id);

  const onSubmit = () => {
    const newComment = inputForm;

    const updatedComments = [
      {
        id: Date.now(),

        user_id: "author_004",
        content: newComment,
        comments: null,
      },
      ...comments,
    ];
    localStorage.setItem(`post:${post_id}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  };
  return (
    <div>
      <form>
        <div className=" mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 w-full">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Nhập ý kiến của bạn ở đây
            </label>
            <textarea
              id="comment"
              rows={rows}
              value={inputForm}
              onChange={(e) => setInputForm(e.target.value)}
              className="w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800  dark:text-white dark:placeholder-gray-400 px-2"
              placeholder="Nhập ý kiến của bạn ở đây"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="button"
              //   type="submit"
              onClick={onSubmit}
              className="inline-flex text-lg items-center py-2.5 px-4  font-medium text-center text-white bg-blue-700 rounded-lg dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Đăng ý kiến
            </button>
          </div>
        </div>
      </form>{" "}
    </div>
  );
}
