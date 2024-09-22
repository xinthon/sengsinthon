import Hero from "@/components/hero";
import DefaultLayout from "@/layouts/Default";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero className="h-[80vh]"></Hero>
    </DefaultLayout>
  );
}
