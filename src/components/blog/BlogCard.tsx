import type { Blog } from "../../types/blog";

interface Props {
  blog: Blog;
  onSelect: (id: string) => void;
  isActive: boolean;
}

export default function BlogCard({ blog, onSelect, isActive }: Props) {
  return (
  
  <div
  onClick={() => onSelect(blog.id)}
  className={`rounded-xl border p-4 sm:p-5  mb-4 cursor-pointer transition
    ${isActive ? "border-blue-500 bg-blue-50" : "bg-white hover:bg-gray-50"}
  `}
>
  <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
    <span className="uppercase font-medium text-blue-600">
      {blog.category[0]}
    </span>
    <span>{new Date(blog.date).toLocaleDateString()}</span>
  </div>

  <h3 className="font-semibold text-sm mb-1">{blog.title}</h3>
  <p className="text-xs text-gray-600 line-clamp-2">
    {blog.description}
  </p>
</div>

  );
}
