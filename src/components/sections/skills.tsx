import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

type Category = { name: string; items: string[] };

export function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Category[];

  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-border bg-background-elevated p-6 transition-colors hover:border-border-strong">
                <h3 className="font-mono text-sm font-medium text-accent-2">
                  {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
