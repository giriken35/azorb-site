import { Code2, Database, Layout, Mail, ArrowRight, CheckCircle2, ChevronRight, Map, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="relative mb-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-card to-[#1a2040] px-6 py-16 shadow-2xl sm:px-10 sm:py-24 text-center">
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-brand-2/15 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-4 py-2 text-sm font-bold text-brand shadow-[0_0_15px_-3px_rgba(108,99,255,0.3)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Freelance Engineer & Designer
          </div>

          <h1 className="mb-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-balance">
            <span className="text-gradient block mb-2">Azorb</span>
            業務効率化とモダンWeb開発のパートナー
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground mb-8">
            Pythonによる自動化スクリプト開発、データ処理、Next.jsを活用したモダンなWebフロントエンド開発など、ビジネスの課題をテクノロジーで解決します。
          </p>

          <a href="mailto:info@azorb.co" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-brand/90 hover:scale-105 active:scale-95">
            <Mail className="h-5 w-5" />
            お問い合わせ (info@azorb.co)
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-20 scroll-mt-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Services</h2>
          <p className="mt-4 text-muted-foreground">ビジネスを加速させる3つのコアスキル</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_4px_20px_-4px_rgba(108,99,255,0.15)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-foreground">業務自動化システム開発</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              PythonやNode.jsを活用し、手作業で行っている日々のルーチンワークやデータ収集作業を自動化。RPAやAPI連携を通じて、業務効率を劇的に向上させます。
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/30 hover:shadow-[0_4px_20px_-4px_rgba(34,197,94,0.15)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-2/10 text-brand-2">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-foreground">データ処理ツール構築</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              複雑なCSV/Excelデータのクレンジング、加工、集計を自動化するスクリプトやツールを構築。データ分析の前処理コストを大幅に削減します。
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-2/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_-4px_rgba(59,130,246,0.15)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
              <Layout className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Webフロントエンド制作</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Next.js, TypeScript, Tailwind CSSを活用し、高速で洗練されたUI/UXを持つモダンなSaaSライクのWebアプリケーションやコーポレートサイトを構築します。
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="mb-20 scroll-mt-24 rounded-3xl border border-border bg-card/40 p-8 sm:p-12 backdrop-blur-sm">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Works / Portfolio</h2>
          <p className="mt-4 text-muted-foreground">これまでの開発実績・ツール例</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Work 1: Address Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand/20 to-brand-2/20 flex items-center justify-center">
              <Map className="h-16 w-16 text-brand opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Next.js</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">TypeScript</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Data Processing</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">住所正規化・データクレンジングツール</h3>
              <p className="mb-6 text-sm text-muted-foreground flex-1">
                エクセルの表記揺れが激しい住所データを一括で統一・正規化し、緯度経度を自動補完するWebアプリケーション。フロントエンドでの高速なCSV処理を実現。
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-semibold text-brand">
                  詳細を見る <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Work 2: Dummy */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <Database className="h-16 w-16 text-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Python</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Selenium</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Automation</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">ECサイト競合価格自動リサーチbot</h3>
              <p className="mb-6 text-sm text-muted-foreground flex-1">
                競合他社のECサイトを定期巡回し、指定商品の価格変動をスクレイピングしてSlackに自動通知・スプレッドシートへ自動記帳するシステム。
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-semibold text-brand">
                  詳細を見る <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Work 3: Dummy */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
              <Layout className="h-16 w-16 text-emerald-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Next.js</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">Tailwind CSS</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">UI/UX</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">SaaS企業向けコーポレートサイト</h3>
              <p className="mb-6 text-sm text-muted-foreground flex-1">
                洗練されたグラスモーフィズムデザインを取り入れた、B2B向けSaaSサービスのランディングページ兼コーポレートサイトの構築。
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-semibold text-brand">
                  詳細を見る <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & About Section */}
      <div className="grid gap-8 lg:grid-cols-2 mb-20">
        
        {/* Skills */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-10">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Skills & Tech Stack</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-brand mb-3 uppercase tracking-wider">Language / Framework</h4>
              <ul className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'Next.js', 'React', 'Node.js', 'HTML/CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-brand mb-3 uppercase tracking-wider">Infrastructure / Tools</h4>
              <ul className="flex flex-wrap gap-2">
                {['GitHub Actions', 'Vercel', 'AWS', 'Docker', 'Selenium', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-brand mb-3 uppercase tracking-wider">Specialties</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-2" /> 業務フローの課題抽出と自動化設計</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-2" /> 大量データのスクレイピング・クレンジング</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-2" /> モダンでインタラクティブなUI実装</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-10">
          <h2 className="mb-8 text-2xl font-bold text-foreground">About / Profile</h2>
          <div className="space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <div className="flex justify-between border-b border-border pb-4">
              <strong className="text-foreground font-semibold min-w-32">屋号 / Brand</strong>
              <span>Azorb (アゾーブ)</span>
            </div>
            <div className="flex justify-between border-b border-border pb-4">
              <strong className="text-foreground font-semibold min-w-32">提供サービス</strong>
              <span className="text-right">自動化ツール開発、システム構築、Webフロントエンド開発</span>
            </div>
            <div className="flex justify-between border-b border-border pb-4">
              <strong className="text-foreground font-semibold min-w-32">対応エリア</strong>
              <span>フルリモート (全国対応)</span>
            </div>
            <div className="flex justify-between border-b border-border pb-4">
              <strong className="text-foreground font-semibold min-w-32">お問い合わせ</strong>
              <a href="mailto:info@azorb.co" className="text-brand hover:underline inline-flex items-center gap-1">
                info@azorb.co
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="pt-2">
              <p>
                「ITの力で、本質的な業務に集中できる環境を」をモットーに、エンジニアリングサービスを提供しています。
                ちょっとした自動化スクリプトの作成から、ビジネスを支えるWebアプリケーションの開発まで、柔軟かつスピーディに対応いたします。
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <section className="mb-12 overflow-hidden rounded-3xl border border-brand/20 bg-brand/5 px-6 py-12 text-center sm:px-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">お気軽にご相談ください</h2>
        <p className="mb-8 text-muted-foreground max-w-xl mx-auto">
          「こんな作業を自動化できないか？」「新しいWebサービスを作りたい」など、まずはお気軽にお問い合わせください。
        </p>
        <a href="mailto:info@azorb.co" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-base font-bold text-background shadow-lg transition-all hover:bg-foreground/90 hover:scale-105 active:scale-95">
          <Mail className="h-5 w-5" />
          info@azorb.co
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 pb-10 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Azorb. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-70">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}
