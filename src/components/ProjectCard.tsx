import type { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-700 my-2">{project.description}</p>
      <div className="flex gap-2 flex-wrap text-sm text-gray-600">
        {project.techs.map(t => (
          <span key={t} className="px-2 py-1 bg-gray-200 rounded-md">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        {project.repo && <a className="text-blue-600" href={project.repo}>GitHub</a>}
        {project.demo && <a className="text-blue-600" href={project.demo}>Demo</a>}
      </div>
    </div>
  );
}
