import ProjectCard from "./project-card";
import DefaultLayout from "@/layouts/Default";
import WithPageHeader from "@/components/containers/withPageHeader";
import githubApi from "@/lib/githubApi";
import { Repositories } from "@/types/github.type";

export default async function ProjectPage() {
  const porjects: any[] = [];

  try {
    const resp = await githubApi.get("user/repos", {
      params: {
        visibility: "private", // fetch both public and private repositories
      },
    });

    var repositories = resp.data as Repositories;

    return (
      <DefaultLayout>
        <WithPageHeader title="Projects"></WithPageHeader>
        <section className="my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {repositories.map((rep) => (
              <ProjectCard key={rep.id} repository={rep}></ProjectCard>
            ))}
          </div>
        </section>
        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">Why Projects Matter</h2>
          <p>
            Projects are more than just lines of code; they are stories of
            innovation, collaboration, and determination. They encapsulate the
            journey from conceptualization to execution, highlighting the
            ingenuity and expertise required to transform ideas into tangible
            results. Whether it's developing a sophisticated software
            application, designing an intuitive user interface, or optimizing
            system performance, every project represents an opportunity to make
            a meaningful impact.
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">What You'll Find</h2>
          <p>
            In this section, you'll find a curated selection of projects that
            exemplify my skills and capabilities as a programmer. From web
            applications to mobile apps, from small-scale prototypes to
            enterprise-level solutions, each project is a reflection of my
            dedication to excellence and my passion for pushing the boundaries
            of what's possible.
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
          <p>
            I invite you to explore my projects and delve into the stories
            behind each one. Whether you're a potential client seeking
            innovative solutions or an employer looking for a talented developer
            to join your team, these projects offer a glimpse into my abilities
            and what I bring to the table. Let's collaborate to turn your ideas
            into reality and embark on a journey of creativity, innovation, and
            success.
          </p>
        </section>
      </DefaultLayout>
    );
  } catch (e) {
    return <>{JSON.stringify(e)}</>;
  }

  return (
    <DefaultLayout>
      <WithPageHeader title="Projects"></WithPageHeader>
      <section className="my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {porjects.map((p) => (
            <ProjectCard key={p.name} repository={p}></ProjectCard>
          ))}
        </div>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-bold mb-4">Why Projects Matter</h2>
        <p>
          Projects are more than just lines of code; they are stories of
          innovation, collaboration, and determination. They encapsulate the
          journey from conceptualization to execution, highlighting the
          ingenuity and expertise required to transform ideas into tangible
          results. Whether it's developing a sophisticated software application,
          designing an intuitive user interface, or optimizing system
          performance, every project represents an opportunity to make a
          meaningful impact.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-bold mb-4">What You'll Find</h2>
        <p>
          In this section, you'll find a curated selection of projects that
          exemplify my skills and capabilities as a programmer. From web
          applications to mobile apps, from small-scale prototypes to
          enterprise-level solutions, each project is a reflection of my
          dedication to excellence and my passion for pushing the boundaries of
          what's possible.
        </p>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
        <p>
          I invite you to explore my projects and delve into the stories behind
          each one. Whether you're a potential client seeking innovative
          solutions or an employer looking for a talented developer to join your
          team, these projects offer a glimpse into my abilities and what I
          bring to the table. Let's collaborate to turn your ideas into reality
          and embark on a journey of creativity, innovation, and success.
        </p>
      </section>
    </DefaultLayout>
  );
}
