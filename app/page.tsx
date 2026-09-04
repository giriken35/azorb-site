"use client"

import { Code2, Layout, CheckCircle2, Map, Hourglass, ExternalLink, ArrowDown, Sparkles, Newspaper } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"

export default function Page() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="relative mb-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-card to-[#1a2040] px-6 py-12 shadow-2xl sm:px-10 sm:py-16 text-center">
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-brand-2/15 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4">
          <div className="mb-4 inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-widest">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            {t.hero.badge}
          </div>
          
          <div className="text-sm font-bold tracking-[0.2em] text-muted-foreground mb-1">{t.hero.furigana}</div>
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
            <span className="bg-gradient-to-r from-brand-2 to-brand bg-clip-text text-transparent uppercase tracking-widest">Azorb</span><br className="mb-4" />
            {t.hero.title1}<br className="hidden sm:block" />{t.hero.title2}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-foreground/90 font-medium leading-relaxed">
            {t.hero.desc1}<br className="hidden sm:block" />
            {t.hero.desc2}<br className="hidden sm:block" />
            {t.hero.desc3}<br className="hidden sm:block" />
            {t.hero.desc4}
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="mb-24 scroll-mt-24 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
        
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{t.products.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground font-medium">{t.products.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Product 1: Boilerplate */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl bg-surface p-3 shadow-sm border border-border/50">
                  <Layout className="h-6 w-6 text-emerald-500" />
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-surface px-2 py-1 text-xs font-semibold text-muted-foreground border border-border">{t.products.p1.b1}</span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">{t.products.p1.b2}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">{t.products.p1.t}</h3>
              <p className="mb-6 text-base text-foreground/80 flex-1 leading-relaxed">
                {t.products.p1.d}
              </p>
              <div className="mt-auto">
                <a href="https://template-lp-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white">
                  {t.products.p1.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Product 2: Address Formatter */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl bg-surface p-3 shadow-sm border border-border/50">
                  <Map className="h-6 w-6 text-brand" />
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-surface px-2 py-1 text-xs font-semibold text-muted-foreground border border-border">{t.products.p2.b1}</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">{t.products.p2.b2}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">{t.products.p2.t}</h3>
              <p className="mb-6 text-base text-foreground/80 flex-1 leading-relaxed">
                {t.products.p2.d}
              </p>
              <div className="mt-auto">
                <a href="https://address-formatter-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-brand/10 px-4 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white">
                  {t.products.p2.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Product 3: Auto Capture AI */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl bg-surface p-3 shadow-sm border border-border/50">
                  <CheckCircle2 className="h-6 w-6 text-fuchsia-500" />
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-surface px-2 py-1 text-xs font-semibold text-muted-foreground border border-border">{t.products.p3.b1}</span>
                <span className="rounded-md bg-fuchsia-500/10 px-2 py-1 text-xs font-semibold text-fuchsia-600">{t.products.p3.b2}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">{t.products.p3.t}</h3>
              <p className="mb-6 text-base text-foreground/80 flex-1 leading-relaxed">
                {t.products.p3.d}
              </p>
              <div className="mt-auto">
                <a href="https://auto-capture-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-fuchsia-500/10 px-4 py-3 text-sm font-bold text-fuchsia-600 transition-colors hover:bg-fuchsia-500 hover:text-white">
                  {t.products.p3.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Product 4: News Aggregator */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30 pb-6">
            <div className="h-48 w-full bg-surface border-b border-border/50 p-4">
              <img src="/p-news.png" alt="News Aggregator" className="w-full h-full object-cover rounded-xl shadow-sm border border-border/50 opacity-90" />
            </div>
            <div className="relative z-10 flex h-full flex-col px-6 mt-4">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-[10px] font-bold text-blue-600 uppercase tracking-wider">{t.products.p4.b1}</span>
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-[10px] font-bold text-blue-600 uppercase tracking-wider">{t.products.p4.b2}</span>
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground leading-snug">{t.products.p4.t}</h3>
              <p className="mb-6 text-sm text-foreground/80 flex-1 leading-relaxed">
                {t.products.p4.d}
              </p>
              <div className="mt-auto">
                <a href="https://sendai-news.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-blue-500/10 px-4 py-2.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-500 hover:text-white">
                  {t.products.p4.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Product 5: Countdown Timer */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30 pb-6">
            <div className="h-48 w-full bg-surface border-b border-border/50 p-4">
              <img src="/p-timer.png" alt="Countdown Timer" className="w-full h-full object-cover rounded-xl shadow-sm border border-border/50 opacity-90" />
            </div>
            <div className="relative z-10 flex h-full flex-col px-6 mt-4">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-orange-500/10 px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wider">{t.products.p5.b1}</span>
                <span className="rounded-md bg-orange-500/10 px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wider">{t.products.p5.b2}</span>
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground leading-snug">{t.products.p5.t}</h3>
              <p className="mb-6 text-sm text-foreground/80 flex-1 leading-relaxed">
                {t.products.p5.d}
              </p>
              <div className="mt-auto">
                <a href="https://lifespan-countdown.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-orange-500/10 px-4 py-2.5 text-sm font-bold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white">
                  {t.products.p5.cta}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="scroll-mt-24 rounded-3xl p-8 sm:p-12 mb-16 text-center max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{t.focus.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground font-medium">{t.focus.subtitle}</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 text-left">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover:border-brand/30">
            <div className="mb-4 inline-flex rounded-full bg-brand/10 p-3">
              <CheckCircle2 className="h-5 w-5 text-brand" />
            </div>
            <h3 className="mb-3 font-bold text-foreground">{t.focus.f1.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.focus.f1.d}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover:border-brand/30">
            <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 p-3">
              <Code2 className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="mb-3 font-bold text-foreground">{t.focus.f2.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.focus.f2.d}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover:border-brand/30">
            <div className="mb-4 inline-flex rounded-full bg-orange-500/10 p-3">
              <Sparkles className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="mb-3 font-bold text-foreground">{t.focus.f3.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.focus.f3.d}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-5xl mb-16 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{t.poweredBy.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">{t.poweredBy.subtitle}</p>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">{t.poweredBy.c1}</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Cursor', 'ChatGPT', 'Gemini', 'Google Antigravity'].map((skill) => (
                  <li key={skill} className="rounded-full border border-brand/30 bg-brand/5 px-5 py-2 text-sm font-bold text-brand shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">{t.poweredBy.c2}</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Python', 'TypeScript', 'Next.js', 'FastAPI', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">{t.poweredBy.c3}</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Vercel', 'Supabase', 'Upstash', 'Cloudflare', 'Stripe', 'Brevo', 'Render'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground/80 border-t border-border/50 pt-4">
            {t.poweredBy.note}
          </p>
        </section>

      {/* About */}
      <section className="mx-auto max-w-5xl mb-24 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{t.about.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">{t.about.subtitle}</p>
          </div>
          <div className="space-y-6 text-foreground/90 text-sm sm:text-base leading-loose">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">{t.about.l1}</strong>
              <div className="flex-1 text-foreground font-medium text-base">{t.about.v1}</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">{t.about.l2}</strong>
              <div className="flex-1 text-foreground/90 leading-relaxed whitespace-pre-line">
                {t.about.v2_1}<br/>
                {t.about.v2_2}<br/>
                {t.about.v2_3}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">{t.about.l3}</strong>
              <div className="flex-1 text-foreground/90 leading-relaxed whitespace-pre-line">{t.about.v3}</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">{t.about.l4}</strong>
              <div className="flex-1">
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline inline-flex items-center gap-1 font-semibold transition-colors">
                  {t.about.v4}
                </a>
              </div>
            </div>
            <div className="pt-8 space-y-8">
              {/* Brand Identity */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">{t.about.b_title}</span>
                <div className="rounded-xl bg-brand/5 border border-brand/10 p-5">
                  <p className="text-sm font-bold text-brand mb-2">
                    {t.about.b_v1} <span className="text-xs font-medium opacity-70">{t.about.b_v2}</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    {t.about.b_v3}
                  </p>
                </div>
              </div>

              {/* Concept */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{t.about.c_title}</span>
                <p className="leading-relaxed">
                  {t.about.c_v1}
                </p>
              </div>

              {/* Client Works */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{t.about.cw_title}</span>
                <p className="leading-relaxed">
                  {t.about.cw_v1}
                </p>
              </div>

              <p className="text-sm text-muted-foreground border-t border-border/70 pt-6 mt-8">
                {t.about.note}
              </p>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-10 pb-12 text-center text-sm text-muted-foreground">
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-4">
          <Link href="/terms" className="hover:text-brand transition-colors">{t.footer.terms}</Link>
          <Link href="/privacy" className="hover:text-brand transition-colors">{t.footer.privacy}</Link>
          <Link href="/legal" className="hover:text-brand transition-colors">{t.footer.legal}</Link>
          <Link href="/contact" className="hover:text-brand transition-colors">{t.footer.contact}</Link>
        </div>
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Azorb. All rights reserved.</p>
        <p className="mt-3 text-xs opacity-60 tracking-wider">{t.footer.built}</p>
      </footer>
    </main>
  )
}