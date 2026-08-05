"use client";

import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

type EducationItem = {
  period: string;
  title: string;
  institution: string;
  description: string;
};

export function Education() {
  const t = useTranslations("education");
  const items = t.raw("items") as EducationItem[];

  return (
    <section id="education" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-8 space-y-5 border-l border-border pl-7">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="relative">
              <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background-elevated">
                <GraduationCap size={12} className="text-accent" />
              </span>
              <span className="font-mono text-xs text-accent-2">
                {item.period}
              </span>
              <h3 className="mt-0.5 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.institution}
              </p>
              {item.description ? (
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
