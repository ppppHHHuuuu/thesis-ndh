import React, { useState } from "react";

export default function NewPostForm({ addPost }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    topic: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: `post_${Date.now()}`,
      title: formData.title,
      author_id: `author_${Date.now()}`,
      author: formData.author,
      topic: {
        id: `topic_${Date.now()}`,
        name: formData.topic,
      },
      description: formData.description,
      content: formData.content,
      comments: [],
    };

    addPost(newPost);
    setFormData({ title: "", author: "", topic: "", description: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        name="title"
        placeholder="Tiêu đề bài viết"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Tên tác giả"
        value={formData.author}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="topic"
        placeholder="Chủ đề bài viết"
        value={formData.topic}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Mô tả ngắn"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 rounded"
        rows="3"
        required
      ></textarea>
      <textarea
        name="content"
        placeholder="Nội dung bài viết"
        value={formData.content}
        onChange={handleChange}
        className="border p-2 rounded"
        rows="6"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Tạo bài viết
      </button>
    </form>
  );
}
