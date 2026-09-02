import { Code2, Database, Layout, Mail, CheckCircle2, ChevronRight, Map, ExternalLink } from "lucide-react"
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

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-tight">
            <span className="text-gradient block mb-3">Azorb</span>
            業務の無駄を削ぎ落とし、<br className="hidden sm:block" />利益を生むリソースを創出する
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mb-10 leading-loose">
            日々の手作業によるデータ処理や定型業務をPythonで自動化。<br className="hidden sm:block" />さらにNext.jsを活用したモダンなWebフロントエンド開発を通じ、<br className="hidden sm:block" />御社のビジネス課題をテクノロジーで根本から解決します。
          </p>

          <a href="mailto:info@azorb.co" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand/90 hover:scale-105 active:scale-95">
            <Mail className="h-5 w-5" />
            お問い合わせ (info@azorb.co)
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-24 scroll-mt-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Services</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">ビジネスのROI（投資対効果）を最大化する3つのソリューション</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_4px_20px_-4px_rgba(108,99,255,0.15)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">業務自動化（RPA / API連携）</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              社内リソースを圧迫している日々のルーチンワークや外部システム間のデータ連携を無人化。「人がやるべき本質的な業務」に集中できる環境を構築し、月数十時間の人的コストを削減します。
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/30 hover:shadow-[0_4px_20px_-4px_rgba(34,197,94,0.15)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-2/10 text-brand-2">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">データ処理ツール構築</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              手作業で行っていた複雑なCSV/Excelデータのクレンジングや集計作業をワンクリックで完了させる専用ツールを開発。人的ミス（ヒューマンエラー）をゼロにし、データ分析の前処理を瞬時に終わらせます。
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-2/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_-4px_rgba(59,130,246,0.15)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
              <Layout className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">モダンWebフロントエンド制作</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              Next.jsによる高速表示と、UI/UXデザインに基づく洗練されたSaaS・コーポレートサイトを構築。サイト訪問者の離脱を防ぎ、リード獲得（CVR）の最大化に直結するWebフロントエンドを提供します。
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="mb-24 scroll-mt-24 rounded-3xl border border-border bg-card/40 p-6 sm:p-12 backdrop-blur-sm shadow-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Works / Portfolio</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">課題解決とROI向上を実現した開発実績</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Work 1: Address Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand/20 to-brand-2/20 flex items-center justify-center">
              <Map className="h-16 w-16 text-brand opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">業務効率化</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">データクレンジング</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">住所データ一括正規化ツール</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                表記揺れの激しい顧客住所データを一瞬で統一し、緯度経度を自動補完するWebアプリを開発。
                <br/><br/>
                <strong className="text-foreground">想定効果：</strong> 手作業による名寄せ・修正業務を完全自動化し、月間約30時間の稼働コスト削減と、DM配送エラー率の大幅低下を実現。
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-bold text-brand transition-colors group-hover:text-brand-2">
                  プロジェクト詳細 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Work 2: Scraping Bot */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <Database className="h-16 w-16 text-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">自動化bot</span>
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">スクレイピング</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">ECサイト競合価格自動監視bot</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                競合他社のECサイトを24時間体制で巡回し、指定商品の価格変動を検知してSlackに即時通知するシステムを構築。
                <br/><br/>
                <strong className="text-foreground">想定効果：</strong> 目視での巡回業務をゼロにし、価格改定の初動スピードを圧倒的に改善。競合負けによる機会損失を防ぎ、売上向上に直接貢献。
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-bold text-brand transition-colors group-hover:text-brand-2">
                  プロジェクト詳細 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Work 3: Corporate site */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
              <Layout className="h-16 w-16 text-emerald-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">UI/UXデザイン</span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">Next.js</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">B2B SaaS向けランディングページ</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                モダンなグラスモーフィズムデザインを取り入れ、高速に動作する法人向けSaaSのサービス紹介サイトをゼロから構築。
                <br/><br/>
                <strong className="text-foreground">想定効果：</strong> サービスの信頼感を視覚的に向上させ、離脱率を改善。ページ読み込み速度の大幅な向上により、リード（資料請求）獲得数を150%アップ想定。
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-bold text-brand transition-colors group-hover:text-brand-2">
                  プロジェクト詳細 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & About Section */}
      <div className="grid gap-8 lg:grid-cols-2 mb-24">
        
        {/* Skills */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-foreground">Skills & Tech Stack</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Language / Framework</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Python', 'TypeScript', 'Next.js', 'React', 'Node.js', 'HTML/CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Infrastructure / Tools</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['GitHub Actions', 'Vercel', 'AWS', 'Docker', 'Selenium', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Specialties</h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-brand-2 shrink-0 mt-0.5" /> 業務フローのボトルネック抽出と自動化の設計</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-brand-2 shrink-0 mt-0.5" /> 大量データのスクレイピング・クレンジング処理</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-brand-2 shrink-0 mt-0.5" /> 顧客体験（UX）を損なわない高速・モダンなUI実装</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-foreground">About / Profile</h2>
          <div className="space-y-6 text-muted-foreground text-sm sm:text-base leading-loose">
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">屋号 / Brand</strong>
              <span>Azorb (アゾーブ)</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">提供サービス</strong>
              <span className="text-right">自動化ツール開発、システム構築、Webフロントエンド開発</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">対応エリア</strong>
              <span>フルリモート (全国対応)</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">お問い合わせ</strong>
              <a href="mailto:info@azorb.co" className="text-brand hover:underline inline-flex items-center gap-1 font-semibold transition-colors">
                info@azorb.co
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="pt-4">
              <p>
                「ITの力で、人間が本質的な業務に集中できる環境を創る」をミッションに、エンジニアリングサービスを提供しています。
                一時的なツールの納品で終わるのではなく、お客様の事業課題を深く理解し、中長期的なコスト削減と利益向上に貢献するパートナーとして伴走いたします。
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <section className="mb-16 overflow-hidden rounded-3xl border border-brand/20 bg-brand/5 px-6 py-16 text-center sm:px-10">
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-foreground">御社の課題、まずはお聞かせください</h2>
        <p className="mb-10 text-muted-foreground max-w-xl mx-auto leading-loose text-base sm:text-lg">
          「毎月の手作業をどうにか自動化できないか？」「リード獲得に向けた新しいWebサービスを作りたい」など、漠然とした状態からでもご相談可能です。
        </p>
        <a href="mailto:info@azorb.co" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-10 py-4 text-base font-bold text-background shadow-xl transition-all hover:bg-foreground/90 hover:scale-105 active:scale-95">
          <Mail className="h-5 w-5" />
          無料相談はこちら (info@azorb.co)
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-10 pb-12 text-center text-sm text-muted-foreground">
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Azorb. All rights reserved.</p>
        <p className="mt-3 text-xs opacity-60 tracking-wider">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}