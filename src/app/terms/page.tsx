import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "terms.txt — Zeen Zheng",
  description: "Terms of service for zeenzheng.com",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeader command="cat /var/www/terms.txt" />

      <div className="font-mono text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-6">
        <p>
          <span className="text-[var(--color-accent)]"># last updated:</span> June 2026
        </p>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## use of this site</h2>
          <p>
            This is a personal portfolio website. All content — including text, code
            snippets, project descriptions, and design — is provided for informational
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## intellectual property</h2>
          <p>
            Unless otherwise stated, all content on this site is my own work. You may
            reference or share it with attribution, but do not reproduce it as your own.
            Project code linked from this site is subject to the license terms in each
            repository.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## disclaimer</h2>
          <p>
            This site is provided &ldquo;as is&rdquo; without warranties of any kind. I
            make no guarantees about the accuracy or completeness of the information here.
            I am not liable for any damages arising from use of this site.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--color-accent)] font-semibold mb-2">## contact</h2>
          <p>
            Questions? Reach out at{" "}
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
