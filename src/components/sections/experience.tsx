"use client";

import { useTranslations } from "next-intl";
import { Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section id="experience" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-8 space-y-6 border-l border-border pl-7">
          {items.map((item, i) => (
            <Reveal
              key={item.company}
              delay={i * 0.06}
              className="relative"
            >
              <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background-elevated">
                <Briefcase size={12} className="text-accent" />
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-accent-2">
                  {item.period}
                </span>
                {item.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[11px] text-emerald-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    {t("current")}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-0.5 text-base font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>

              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-accent-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
