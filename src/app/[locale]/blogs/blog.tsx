"use client";

import BlogPost from "@/components/blog-posts";
import React, { PropsWithChildren } from "react";

interface BlogPageProp extends PropsWithChildren {}

export default function BlogPage({ children }: Readonly<BlogPageProp>) {
  return <BlogPost></BlogPost>;
}
