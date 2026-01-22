import { useBlogById } from "../../hooks/useBlogs";

interface Props {
  blogId: string | null;
}

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading } = useBlogById(blogId);

if (!blogId) {
  return (
    <div className="bg-white rounded-xl h-full flex items-center justify-center text-gray-400">
      Select a blog to view details
    </div>
  );
}

if (isLoading) {
  return <p className="p-6">Loading blog...</p>;
}

if (!data) return null;


  return (
   <div className="bg-white rounded-xl shadow-sm overflow-y-auto h-full">
  <img
    src={data.coverImage}
    alt={data.title}
    className="w-full h-72 object-cover"
  />

  <div className="p-6">
    <h1 className="text-3xl font-bold mb-3">{data.title}</h1>

    <div className="text-sm text-gray-500 mb-4">
      {data.category.join(", ")} ·{" "}
      {new Date(data.date).toLocaleDateString()}
    </div>

    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
      {data.description}
    </p>

    <div className="whitespace-pre-line leading-7 text-base text-gray-800">
      {data.content}
    </div>
  </div>
</div>

  );
}
