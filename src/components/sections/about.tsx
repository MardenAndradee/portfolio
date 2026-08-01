import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1} className="space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background-elevated p-6"
                >
                  <dt className="text-3xl font-semibold text-gradient">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
