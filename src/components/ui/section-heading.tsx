import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={align === "center" ? "text-center" : "text-left"}
    >
      <div
        className={
          align === "center"
            ? "flex flex-col items-center"
            : "flex flex-col items-start"
        }
      >
        <span className="font-mono text-sm font-medium tracking-wide text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
