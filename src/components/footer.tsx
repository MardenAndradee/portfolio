import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
