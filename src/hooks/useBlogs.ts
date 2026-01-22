import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBlogs, fetchBlogById, createBlog } from "../api/blogs";
import type { Blog } from "../types/blog";

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

export const useBlogById = (id: string | null) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id!),
    enabled: !!id,
  });
  
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blog: Omit<Blog, "id">) => createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

