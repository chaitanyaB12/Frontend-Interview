import { useState } from "react";
import { useCreateBlog } from "../../hooks/useBlogs";

export default function CreateBlogForm() {
  const { mutate, isPending, isError } = useCreateBlog();
  const [showSuccess, setShowSuccess] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        title,
        category: category.split(",").map((c) => c.trim()),
        description,
        coverImage,
        content,
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          // ✅ Clear form
          setTitle("");
          setCategory("");
          setDescription("");
          setCoverImage("");
          setContent("");

          // ✅ Show success message
          setShowSuccess(true);

          // ✅ Auto-hide after 3 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm p-5 space-y-4 mb-5"
    >
      <h2 className="font-semibold text-lg">Create New Blog</h2>

      <input
        className="w-full border rounded-md p-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="w-full border rounded-md p-3"
        placeholder="Categories (comma separated)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        className="w-full border rounded-md p-3"
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        required
      />

      <textarea
        className="w-full border rounded-md p-3"
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <textarea
        className="w-full border rounded-md p-3 h-28"
        placeholder="Full content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-2 rounded-md disabled:opacity-50"
      >
        {isPending ? "Creating..." : "Create Blog"}
      </button>

      {isError && (
        <p className="text-sm text-red-500">
          Failed to create blog. Please try again.
        </p>
      )}

      {showSuccess && (
        <p className="text-sm text-green-600">
          Blog created successfully!
        </p>
      )}
    </form>
  );
}
