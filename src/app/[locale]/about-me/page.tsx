import WithPageHeader from "@/components/containers/withPageHeader";
import DefaultLayout from "@/layouts/Default";

export default function AboutMePage() {
  return (
    <DefaultLayout>
      <WithPageHeader title="About Me"></WithPageHeader>
      <section className="my-8">
        <p className="mb-4">
          Crafting code, building brilliance. I'm [Your Name], a passionate
          programmer dedicated to solving complex problems with elegant
          solutions. With a background in [your expertise] and a love for
          innovation, I'm on a mission to make a meaningful impact through my
          work.
        </p>
        <p className="mb-4">
          In my free time, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying the great outdoors.
        </p>
      </section>
    </DefaultLayout>
  );
}
