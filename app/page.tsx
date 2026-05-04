export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="text-center mb-16">
        <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-4">
          Accessibility Tools
        </p>
        <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
          Screen Reader Optimized<br />Dev Environment Setup
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Generate personalized configuration scripts for VS Code, terminals, and Git — tuned for screen readers. Set up your entire dev environment in minutes, not days.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors focus-visible:ring-2 focus-visible:ring-[#58a6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117]"
          aria-label="Subscribe to Screen Reader Dev Toolkit for $29 per month"
        >
          Get Started — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Instant access to all scripts.</p>
      </header>

      {/* Features strip */}
      <section aria-label="Key features" className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {[
          { title: "VS Code Config", desc: "Optimal accessibility settings, keybindings, and extensions pre-configured." },
          { title: "Terminal Setup", desc: "Screen reader-friendly prompts for Bash, Zsh, PowerShell, and Windows Terminal." },
          { title: "Git & CLI Tools", desc: "Verbose output, alias shortcuts, and audio cue integrations for Git workflows." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h2 className="text-white font-semibold mb-2">{f.title}</h2>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section aria-label="Pricing" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8" aria-label="Plan features">
            {[
              "Personalized setup assessment",
              "Custom config scripts for all tools",
              "Monthly updates as tools evolve",
              "Priority email support",
              "NVDA, JAWS & VoiceOver profiles"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
            aria-label="Subscribe now for $29 per month"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="Frequently asked questions" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which screen readers are supported?",
              a: "We generate profiles for NVDA, JAWS, and VoiceOver. Each config is tailored to the quirks of your chosen screen reader and operating system."
            },
            {
              q: "How do I receive my configuration scripts?",
              a: "After subscribing, you complete a short assessment. Your personalized scripts are delivered instantly via a secure download link and updated monthly."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center border-t border-[#30363d] pt-10">
        <p className="text-[#8b949e] mb-4 text-sm">
          Built by developers who understand accessibility firsthand.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          aria-label="Get started with Screen Reader Dev Toolkit"
        >
          Get Started Today
        </a>
      </footer>
    </main>
  );
}
