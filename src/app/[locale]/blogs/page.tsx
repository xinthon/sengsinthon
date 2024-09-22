// Layout
import DefaultLayout from "@/layouts/Default";

// Containers
import WithPageHeader from "@/components/containers/withPageHeader";

// Components
import BlogPost from "@/components/blog-posts";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <WithPageHeader
        title="Blogs"
        description="Explore our collection of blog posts, covering various topics in both Khmer and English. Use the filter to easily find posts in your preferred language."
      />
      <BlogPost></BlogPost>
    </DefaultLayout>
  );
}
