"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const lang = (navigator.language || "pt").toLowerCase();
    window.location.replace(lang.startsWith("en") ? "en/" : "pt/");
  }, []);

  return (
    <p style={{ padding: 24 }}>
      Redirecting… <a href="pt/">Continue</a>
    </p>
  );
}
