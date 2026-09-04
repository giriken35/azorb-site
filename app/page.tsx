import { Code2, Layout, CheckCircle2, Map, Hourglass, ExternalLink, ArrowDown, Sparkles, Newspaper } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="relative mb-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-card to-[#1a2040] px-6 py-12 shadow-2xl sm:px-10 sm:py-16 text-center">
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
            <span className="block text-sm sm:text-base font-bold text-muted-foreground/80 tracking-[0.2em] mb-1">アゾーブ</span>
            <span className="text-gradient block mb-3">Azorb</span>
            ニッチな課題に、<br className="hidden sm:block" />ピンポイントで効くツールを。
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-loose">
            大手が手を出さない細かな業務のボトルネック解消から、<br className="hidden sm:block" />
            日常にクスッと笑いを提供するユーモア溢れるWebアプリまで。<br className="hidden sm:block" />
            個人開発ならではの身軽さと圧倒的なコストパフォーマンスで、<br className="hidden sm:block" />
            「かゆいところに手が届く」プロダクトを展開しています。
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="mb-24 scroll-mt-24 rounded-3xl border border-border bg-card/40 p-6 sm:p-12 backdrop-blur-sm shadow-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Products</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">現在公開中・開発中のWebサービスと自動化ツール</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 4: Next.js Boilerplate */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-border bg-surface transition-all duration-300 hover:duration-100 ease-out hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/saas-boilerplate-mockup.jpg" 
                alt="SaaS向けモダンUIボイラープレート" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:duration-100 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">Next.js Template</span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">開発中</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">SaaS向けモダンUIボイラープレート</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                洗練されたグラスモーフィズムデザインと高速なパフォーマンスを備えた、商用利用可能なNext.jsテンプレート。個人開発だからこそ実現できる低価格で、開発者のUI実装コストを削減します。
              </p>
              <div className="mt-auto">
                <a href="https://template-lp-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>

          {/* Product 1: Address Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-border bg-surface transition-all duration-300 hover:duration-100 ease-out hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/address-tool-screenshot.png" 
                alt="住所データ一括正規化ツール" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:duration-100 ease-out group-hover:scale-105"
              />
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

          {/* Product 3: Auto Capture & Translation Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-border bg-surface transition-all duration-300 hover:duration-100 ease-out hover:border-fuchsia-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/auto-capture-screenshot.png" 
                alt="万能オートキャプチャ＆AI抽出・翻訳" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:duration-100 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-fuchsia-500/10 px-2 py-1 text-xs font-semibold text-fuchsia-600">Desktop App</span>
                <span className="rounded-md bg-fuchsia-500/10 px-2 py-1 text-xs font-semibold text-fuchsia-600">AI / Python</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">万能オートキャプチャ＆AI抽出・翻訳</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                連続スクリーンショットから、AI（Gemini等）を用いてテキストを自動抽出・翻訳し、人間用のツリー構造（マインドマップ）で整理するデスクトップツールです。
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-fuchsia-500/10 px-4 py-3 text-sm font-bold text-fuchsia-600 transition-colors hover:bg-fuchsia-500 hover:text-white">
                  ツールを利用する
                </a>
              </div>
            </div>
          </div>

          {/* Product 5: Local News Aggregator */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-border bg-surface transition-all duration-300 hover:duration-100 ease-out hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/local-news-screenshot.png" 
                alt="自分専用 広告なし地元ニュースサイト" 
                className="w-full h-full object-cover object-top rounded-xl transition-transform duration-300 group-hover:duration-100 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">Personal</span>
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">Python / Scraping</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">自分専用 広告なし地元ニュースサイト</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                「地元のニュースを読みたいが、広告だらけで読みづらい」という不満から自作した専用アグリゲーター。Pythonで定期的に記事をスクレイピング・要約し、Next.jsの快適なUIで配信しています。
              </p>
              <div className="mt-auto">
                <a href="https://miyagi-sendai-news.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-blue-500/10 px-4 py-3 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-500 hover:text-white">
                  サイトを見る
                </a>
              </div>
            </div>
          </div>
          {/* Product 2: Lifespan Timer */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-border bg-surface transition-all duration-300 hover:duration-100 ease-out hover:border-orange-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/lifespan-timer-screenshot.png" 
                alt="寿命カウントダウンタイマー" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:duration-100 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-600">Life Style</span>
                <span className="rounded-md bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-600">公開中</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">寿命カウントダウンタイマー</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                自分の残された人生の時間をリアルタイムで刻み続ける、少しシュールで刺激的なタイマーアプリ。遊び心の中に「今日という1日の大切さ」を再認識させるユーモアを込めています。
              </p>
              <div className="mt-auto">
                <a href="https://life-countdown-timer-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full rounded-xl bg-orange-500/10 px-4 py-3 text-sm font-bold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white">
                  サイトを見る
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus" className="mb-24 scroll-mt-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Value Proposition</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Azorbが提供する3つの価値</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border-[3px] border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:duration-100 ease-out hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">ニッチ課題の解決</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              市場規模が小さく大企業が参入しないような「局所的だけど確実に誰かが困っている課題」を見つけ出し、ピンポイントで刺さる自動化ツールを提供します。
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border-[3px] border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:duration-100 ease-out hover:border-brand-2/50 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-2/10 text-brand-2">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">圧倒的な適正価格</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              営業や中間マージンといった無駄なコストが一切発生しない個人開発の強みを活かし、エンタープライズ品質のモダンなツールを、手に取りやすい低価格で提供します。
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border-[3px] border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:duration-100 ease-out hover:border-orange-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">遊び心とユーモア</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              無機質な業務効率化だけでなく、使っていて「クスッ」と笑えるようなユーモア溢れるアイデアツールも開発。日常のスパイスになるような体験を大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-5xl mb-16 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Powered by</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">プロダクトを支える採用テクノロジー</p>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">AI & AI Agents</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Cursor', 'ChatGPT', 'Gemini', 'Google Antigravity'].map((skill) => (
                  <li key={skill} className="rounded-full border border-brand/30 bg-brand/5 px-5 py-2 text-sm font-bold text-brand shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Language / Framework</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Python', 'TypeScript', 'Next.js', 'FastAPI', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Infrastructure / BaaS</h4>
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
            ※ 上記のLanguage / Frameworkおよび各種インフラ構築には、積極的にAI・AIエージェントの支援を用いて実装を行っています。
          </p>
        </section>

      {/* About */}
      <section className="mx-auto max-w-5xl mb-24 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">About Studio</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">スタジオ概要と基本情報</p>
          </div>
          <div className="space-y-6 text-foreground/90 text-sm sm:text-base leading-loose">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">屋号 / Brand</strong>
              <div className="flex-1 text-foreground font-medium text-base">Azorb</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">事業内容</strong>
              <div className="flex-1 text-foreground/90 leading-relaxed">
                マイクロSaaSおよびAI・自動化アプリケーションの企画・開発<br/>
                開発者向けアセット（UIテンプレート等）の提供<br/>
                日常や業務の「隙間」を埋めるニッチプロダクトの運営
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">所在地</strong>
              <div className="flex-1 text-foreground/90 leading-relaxed">〒150-0043<br/>東京都渋谷区道玄坂1丁目10番8号<br/>渋谷道玄坂東急ビル2F-C</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold sm:min-w-40 tracking-tight shrink-0">お問い合わせ</strong>
              <div className="flex-1">
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline inline-flex items-center gap-1 font-semibold transition-colors">
                  お問い合わせフォーム
                </a>
              </div>
            </div>
            <div className="pt-8 space-y-8">
              {/* Brand Identity */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">Brand Identity</span>
                <div className="rounded-xl bg-brand/5 border border-brand/10 p-5">
                  <p className="text-sm font-bold text-brand mb-2">
                    "A to Z" × "Orbit (軌道)" = Azorb <span className="text-xs font-medium opacity-70">（アゾーブ）</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    一度組み上げたコードが狂いなく走り続け、自律的に価値を生み出す。天体が軌道を描くような「無人で規則正しく回り続ける美しいエコシステム（自動化・SaaS）」の設計をスタジオの理念としています。
                  </p>
                </div>
              </div>

              {/* Concept */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Concept</span>
                <p className="leading-relaxed">
                  「大手がやらない、でも誰かが確実に欲しがっているもの」をコンセプトに、マイクロSaaSやAI・自動化アプリケーションの開発に注力する独立系プロダクトスタジオです。
                </p>
              </div>

              {/* Client Works */}
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Client Works</span>
                <p className="leading-relaxed">
                  基本的には自社プロダクトの開発を優先しておりますが、Azorbのデザイン哲学や技術スタックに共感し、「同様のモダンなシステムを作ってほしい」といったご依頼に限り、個人スタジオならではの機動力を活かした特別枠としてお受けしております。
                </p>
              </div>

              <p className="text-sm text-muted-foreground border-t border-border/70 pt-6 mt-8">
                ※ ツールに関する取材、サービス買収、および開発のご相談については、上記のお問い合わせフォームよりお問い合わせください。
              </p>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-10 pb-12 text-center text-sm text-muted-foreground">
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-4">
          <Link href="/terms" className="hover:text-brand transition-colors">利用規約</Link>
          <Link href="/privacy" className="hover:text-brand transition-colors">プライバシーポリシー</Link>
          <Link href="/legal" className="hover:text-brand transition-colors">特定商取引法に基づく表記</Link>
          <Link href="/contact" className="hover:text-brand transition-colors">お問い合わせ</Link>
        </div>
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Azorb. All rights reserved.</p>
        <p className="mt-3 text-xs opacity-60 tracking-wider">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}
