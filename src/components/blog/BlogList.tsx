import { useBlogs } from "../../hooks/useBlogs";
import BlogCard from "./BlogCard";

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function BlogList({ selectedId, onSelect }: Props) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) return <p className="p-4">Loading blogs...</p>;
  if (isError) return <p className="p-4 text-red-500">Error loading blogs</p>;

  return (
    <div className="p-4 overflow-y-auto h-full">
      {data!.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={onSelect}
          isActive={blog.id === selectedId}
        />
      ))}
    </div>
  );
}
