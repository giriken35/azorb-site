import { Code2, Database, Layout, Mail, CheckCircle2, ChevronRight, Map, ExternalLink, ArrowDown } from "lucide-react"
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
            Independent Product Studio
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-tight">
            <span className="text-gradient block mb-3">Azorb</span>
            手作業を無くし、<br className="hidden sm:block" />本質的な時間を創り出す
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mb-10 leading-loose">
            データ処理の自動化ツールから、モダンなSaaSアプリケーションまで。<br className="hidden sm:block" />
            「あったらいいな」を形にし、Web上で誰もがすぐに使える<br className="hidden sm:block" />
            独立系プロダクト・サービスを開発・展開しています。
          </p>

          <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand/90 hover:scale-105 active:scale-95">
            提供中のプロダクトを見る
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="mb-24 scroll-mt-24 rounded-3xl border border-border bg-card/40 p-6 sm:p-12 backdrop-blur-sm shadow-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Products</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">現在公開中・開発中のWebサービスと自動化ツール</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1: Address Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand/20 to-brand-2/20 flex items-center justify-center">
              <Map className="h-16 w-16 text-brand opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">SaaS</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">無料公開中</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">住所データ一括正規化ツール</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                エクセル等で表記揺れの激しい住所データを一瞬で統一し、緯度経度を自動補完するブラウザ完結型のWebツール。手作業による名寄せ作業をゼロにし、業務効率を劇的に改善します。
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-brand/10 px-4 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white">
                  ツールを利用する
                </a>
              </div>
            </div>
          </div>

          {/* Product 2: Scraping Bot */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <Database className="h-16 w-16 text-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">API Service</span>
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">開発中</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">ECサイト競合価格トラッカー</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                指定したECサイトの商品価格をクラウド上で24時間監視。価格変動時にWebhookやSlackへ即時通知を送信し、自動的な価格改定を支援するAPIプラットフォーム。
              </p>
              <div className="mt-auto">
                <button disabled className="inline-flex items-center justify-center w-full rounded-xl bg-muted px-4 py-3 text-sm font-bold text-muted-foreground cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Product 3: Coming Soon */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
              <Layout className="h-16 w-16 text-emerald-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">Next.js Template</span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">開発中</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">SaaS向けモダンUIボイラープレート</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                洗練されたグラスモーフィズムデザインと、高速なパフォーマンスを備えたNext.js製の商用利用可能なLP・管理画面テンプレート。
              </p>
              <div className="mt-auto">
                <button disabled className="inline-flex items-center justify-center w-full rounded-xl bg-muted px-4 py-3 text-sm font-bold text-muted-foreground cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus" className="mb-24 scroll-mt-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Focus Areas</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">プロダクト開発の軸となる3つの技術領域</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-brand/30">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">Automation & API</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              Webスクレイピングや各種API連携を駆使し、手作業による情報収集やデータ入力を完全に自動化する仕組みを構築します。
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-brand-2/30">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-2/10 text-brand-2">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">Data Processing</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              表記揺れの吸収、クレンジング、大容量ファイルの高速処理など、データ活用の前準備となる面倒な工程をアルゴリズムで解決します。
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/30">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
              <Layout className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">Modern UI/UX</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              優れたツールであっても、使いづらければ意味がありません。Next.jsと最新のCSS設計により、直感的で触り心地の良いインターフェースを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Skills & About Section */}
      <div className="grid gap-8 lg:grid-cols-2 mb-20">
        
        {/* Skills */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-foreground">Tech Stack</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Language / Framework</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Python', 'TypeScript', 'Next.js', 'React', 'Node.js', 'FastAPI'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Infrastructure / Tools</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['GitHub Actions', 'Vercel', 'Supabase', 'Docker', 'Playwright', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-foreground">About Studio</h2>
          <div className="space-y-6 text-muted-foreground text-sm sm:text-base leading-loose">
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">屋号 / Brand</strong>
              <span>Azorb (アゾーブ)</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">事業内容</strong>
              <span className="text-right">自社Webサービスの企画・開発・運営<br/>自動化ツールの提供</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">お問い合わせ</strong>
              <a href="mailto:info@azorb.co" className="text-brand hover:underline inline-flex items-center gap-1 font-semibold transition-colors">
                info@azorb.co
              </a>
            </div>
            <div className="pt-4">
              <p>
                特定のクライアントに向けた受託開発（クライアントワーク）ではなく、Web上に公開して誰もが利用できるSaaSや買い切りツールを独自に開発しています。<br/><br/>
                ※ 法人様からのサービス買収や、業務提携に関するお問い合わせは上記メールアドレスよりお受けしております。
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-10 pb-12 text-center text-sm text-muted-foreground">
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Azorb. All rights reserved.</p>
        <p className="mt-3 text-xs opacity-60 tracking-wider">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}