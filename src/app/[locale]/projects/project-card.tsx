import githubApi from "@/lib/githubApi";
import { Repository } from "@/types/github.type";

interface ProjectCardProp {
  repository: Repository;
}

type Languages = Record<string, number>;

export async function ProjectCard({
  repository: { name, description, url, owner, languages_url, created_at },
}: ProjectCardProp) {
  try {
    return (
      <div className="dark:bg-gray-900 rounded-lg text-wrap shadow-md p-6">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="mb-4">{created_at}</p>
        <p className="mb-4">{description}</p>
        <a href={url} className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    );
  } catch (e) {
    return <>{JSON.stringify(e)}</>;
  }
}
export default ProjectCard;
