import data from "../note.json";
import PostComponent from "./PostComponent";

export default function Home() {
  const authorList = data.authors;
  const posts = data.posts;
  const topics = data.topics;
  return (
    <div className="">
      <div className="mx-auto">
        <h1 className="font-serif text-left">Lăng kính</h1>
        <hr className="my-5" />
        <div className="flex mx-auto gap-5 max-w-screen-lg">
          <div id="tacgia" className="flex-none text-left">
            <h3 className="text-3xl font-serif ">Tác giả</h3>
            <hr className="my-2" />

            <div className="flex flex-col gap-3">
              {authorList.map((author) => (
                <div key={author.id}>{author.name}</div>
              ))}
            </div>
          </div>

          <div id="danhsachviet" className="grow text-left ">
            {posts.map((post) => {
              const author_img = authorList.find(
                (author) => author.id === post.author_id
              );
              return (
                <PostComponent
                  key={post.id}
                  author_name={post.author}
                  description={post.description}
                  topic={post.topic.name}
                  content={post.content}
                  post_name={post.title}
                  author_img={author_img.src}
                  post_id={post.id}
                />
              );
            })}
          </div>
          <div
            id="topic"
            className="flex flex-col border-2 text-left gap-4 p-3 h-fit max-w-64 min-w-64"
          >
            <h2 className="text-3xl font-serif ">Chủ đề</h2>
            <hr></hr>
            {topics.map((topic) => (
              <div key={topic.id} className="">
                {topic.name}
              </div>
            ))}
            <a href="/post/new">
              <button>Tạo bài viết mới</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
