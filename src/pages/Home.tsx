import { useState } from "react";
import BlogList from "../components/blog/BlogList";
import BlogDetail from "../components/blog/BlogDetail";
import CreateBlogForm from "../components/blog/CreateBlogForm";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="col-span-12 lg:col-span-4 overflow-y-auto no-scrollbar h-[calc(100vh-120px)]">
        <CreateBlogForm />
        <BlogList
          selectedId={selectedBlogId}
          onSelect={setSelectedBlogId}
        />
      </div>

      <div className="col-span-12 lg:col-span-8 overflow-y-auto no-scrollbar h-[calc(100vh-120px)]">
        <BlogDetail blogId={selectedBlogId} />
      </div>
    </MainLayout>
  );
}
