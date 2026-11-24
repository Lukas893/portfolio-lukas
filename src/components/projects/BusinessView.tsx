import { CheckCircle2, Info } from "lucide-react";
import { ProjectData } from "@/data/projects";

interface BusinessViewProps {
  project: ProjectData;
}

export function BusinessView({ project }: BusinessViewProps) {
  const { sections, deliverablesTitle, deliverables, disclaimer } =
    project.businessView;

  return (
    <div
      id={`panel-${project.id}-business`}
      role="tabpanel"
      aria-labelledby={`tab-${project.id}-business`}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
    >
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.code}
            className="p-5 rounded-xl bg-[#060608]/80 border border-white/10 space-y-2.5"
          >
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#00F0FF] block">
              {section.code}
            </span>
            <h4 className="text-base font-semibold text-[#F5F7FA]">
              {section.title}
            </h4>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:col-span-5 flex flex-col justify-between gap-5 p-6 rounded-xl bg-[#060608]/90 border border-white/10">
        <div className="space-y-4">
          <h4 className="font-mono text-xs tracking-widest uppercase text-[#F5F7FA] pb-3 border-b border-white/10">
            {deliverablesTitle}
          </h4>
          <ul className="space-y-3">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-[#F5F7FA]/90 leading-relaxed"
              >
                <CheckCircle2
                  className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {disclaimer && (
          <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#FF4D00]/10 border border-[#FF4D00]/25 text-xs text-[#F5F7FA]/85 leading-relaxed">
            <Info
              className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>{disclaimer}</span>
          </div>
        )}
      </div>
    </div>
  );
}