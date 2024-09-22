import ReadBlogLayout from "@/layouts/ReadBlog";
import React from "react";

interface ReadPostParam {
  blogId: string;
}

interface ReadPost {
  params: ReadPostParam;
}

export default function ReadPostPage({ params: { blogId } }: ReadPost) {
  return <ReadBlogLayout>{blogId}</ReadBlogLayout>;
}
