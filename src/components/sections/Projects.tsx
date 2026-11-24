import { PROJECTS_DATA } from "@/data/projects";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-section-heading"
      className="py-16 sm:py-20 border-t border-white/10 bg-[#060608]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs tracking-widest uppercase text-[#00F0FF]">
            01 // SHOWCASE & ENGENHARIA
          </span>
          <h2
            id="projects-section-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F7FA] leading-[1.1]"
          >
            PROJETOS QUE TRANSFORMAM IDEIAS EM SISTEMAS REAIS.
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Conheça soluções desenvolvidas para resolver problemas práticos e
            experimentos de engenharia que exploram novas possibilidades
            tecnológicas.
          </p>
        </div>

        <div className="space-y-12">
          {PROJECTS_DATA.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}