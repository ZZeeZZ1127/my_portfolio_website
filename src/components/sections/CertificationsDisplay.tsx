import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import TerminalPrompt from "@/components/ui/TerminalPrompt";

export default function CertificationsDisplay() {
  const { certifications } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="cat /etc/certificates" />

      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="max-w-lg mx-auto p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <TerminalPrompt
            command={`openssl x509 -in ${cert.name.toLowerCase().replace(/\s+/g, "-")}.pem -text -noout`}
            className="mb-6"
          />

          <div className="space-y-2 font-mono text-sm">
            <p>
              <span className="text-[var(--color-text-muted)]">Subject:</span>{" "}
              <span className="text-[var(--color-text-primary)]">
                CN={cert.name}
              </span>
            </p>
            <p>
              <span className="text-[var(--color-text-muted)]">Issuer:</span>{" "}
              <span className="text-[var(--color-text-primary)]">
                O={cert.issuer}
              </span>
            </p>
            <p>
              <span className="text-[var(--color-text-muted)]">Issued:</span>{" "}
              <span className="text-[var(--color-text-primary)]">
                {cert.date}
              </span>
            </p>
            <p>
              <span className="text-[var(--color-text-muted)]">Status:</span>{" "}
              <span className="text-[var(--color-terminal-success)]">VALID</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
