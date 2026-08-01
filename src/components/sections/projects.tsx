import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard, type Project } from "@/components/project-card";

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Project[];

  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
