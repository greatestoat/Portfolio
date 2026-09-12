import HudPanel from "@/components/ui/HudPanel";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24 md:px-0">
      <h2 className="mb-6 font-mono text-xs tracking-[0.3em] text-crimson/80">
        // CONTACT
      </h2>
      <HudPanel className="p-8 text-center">
        <p className="text-steel">Open to product engineering and full-stack opportunities.</p>
        <a
          href="mailto:rahulnanda9899@gmail.com"
          className="mt-4 inline-block text-2xl text-white transition-colors hover:text-crimson"
        >
          rahulnanda9899@gmail.com
        </a>
        <a
          href="tel:+919959599230"
          className="mt-3 block font-mono text-xs text-steel transition-colors hover:text-cyan"
        >
          +91 99595 99230
        </a>
      </HudPanel>
    </section>
  );
}
