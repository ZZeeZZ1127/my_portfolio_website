import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "privacy.txt — Zeen Zheng",
  description: "Privacy policy for zeenzheng.com",
};

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeader command="cat /var/www/privacy.txt" />

      <div className="font-mono text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-6">
        <p>
          <span className="text-[var(--color-accent)]"># last updated:</span> June 2026
        </p>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## data collection</h2>
          <p>
            This site does not collect, store, or process personal data. There are no
            cookies, no analytics scripts, and no tracking of any kind. The contact form
            (if used) sends data directly and is not retained on any server.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## third-party services</h2>
          <p>
            This site is hosted on Vercel, which may collect standard server logs
            (IP addresses, request paths, timestamps) for operational purposes. Refer to{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="underline hover:text-[var(--color-text)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s privacy policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## external links</h2>
          <p>
            This site links to external platforms (GitHub, LinkedIn, etc.). Their privacy
            policies apply when you visit those sites.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## contact</h2>
          <p>
            Questions about this policy? Reach out at{" "}
            <a
              href="mailto:zeen6688.zz@gmail.com"
              className="underline hover:text-[var(--color-text)] transition-colors"
            >
              zeen6688.zz@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
