import { Code2, Layout, CheckCircle2, Map, Hourglass, ExternalLink, ArrowDown, Sparkles, Newspaper } from "lucide-react"
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
            繝九ャ繝√↑隱ｲ鬘後↓縲・br className="hidden sm:block" />繝斐Φ繝昴う繝ｳ繝医〒蜉ｹ縺上ヤ繝ｼ繝ｫ繧偵・
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mb-10 leading-loose">
            螟ｧ謇九′謇九ｒ蜃ｺ縺輔↑縺・ｴｰ縺九↑讌ｭ蜍吶・繝懊ヨ繝ｫ繝阪ャ繧ｯ隗｣豸医°繧峨・br className="hidden sm:block" />
            譌･蟶ｸ縺ｫ繧ｯ繧ｹ繝・→隨代＞繧呈署萓帙☆繧九Θ繝ｼ繝｢繧｢貅｢繧後ｋWeb繧｢繝励Μ縺ｾ縺ｧ縲・br className="hidden sm:block" />
            蛟倶ｺｺ髢狗匱縺ｪ繧峨〒縺ｯ縺ｮ霄ｫ霆ｽ縺輔→蝨ｧ蛟堤噪縺ｪ繧ｳ繧ｹ繝医ヱ繝輔か繝ｼ繝槭Φ繧ｹ縺ｧ縲・br className="hidden sm:block" />
            縲後°繧・＞縺ｨ縺薙ｍ縺ｫ謇九′螻翫￥縲阪・繝ｭ繝繧ｯ繝医ｒ螻暮幕縺励※縺・∪縺吶・
          </p>

          <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand/90 hover:scale-105 active:scale-95">
            謠蝉ｾ帑ｸｭ縺ｮ繝励Ο繝繧ｯ繝医ｒ隕九ｋ
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="mb-24 scroll-mt-24 rounded-3xl border border-border bg-card/40 p-6 sm:p-12 backdrop-blur-sm shadow-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Products</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">迴ｾ蝨ｨ蜈ｬ髢倶ｸｭ繝ｻ髢狗匱荳ｭ縺ｮWeb繧ｵ繝ｼ繝薙せ縺ｨ閾ｪ蜍募喧繝・・繝ｫ</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 4: Next.js Boilerplate */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/saas-boilerplate-mockup.jpg" 
                alt="SaaS蜷代￠繝｢繝繝ｳUI繝懊う繝ｩ繝ｼ繝励Ξ繝ｼ繝・ 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">Next.js Template</span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600">髢狗匱荳ｭ</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">SaaS蜷代￠繝｢繝繝ｳUI繝懊う繝ｩ繝ｼ繝励Ξ繝ｼ繝・/h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                豢礼ｷｴ縺輔ｌ縺溘げ繝ｩ繧ｹ繝｢繝ｼ繝輔ぅ繧ｺ繝繝・じ繧､繝ｳ縺ｨ鬮倬溘↑繝代ヵ繧ｩ繝ｼ繝槭Φ繧ｹ繧貞ｙ縺医◆縲∝膚逕ｨ蛻ｩ逕ｨ蜿ｯ閭ｽ縺ｪNext.js繝・Φ繝励Ξ繝ｼ繝医ょ倶ｺｺ髢狗匱縺縺九ｉ縺薙◎螳溽樟縺ｧ縺阪ｋ菴惹ｾ｡譬ｼ縺ｧ縲・幕逋ｺ閠・・UI螳溯｣・さ繧ｹ繝医ｒ蜑頑ｸ帙＠縺ｾ縺吶・
              </p>
              <div className="mt-auto">
                <button disabled className="inline-flex items-center justify-center w-full rounded-xl bg-muted px-4 py-3 text-sm font-bold text-muted-foreground cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Product 1: Address Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/address-tool-screenshot.png" 
                alt="菴乗園繝・・繧ｿ荳諡ｬ豁｣隕丞喧繝・・繝ｫ" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">SaaS</span>
                <span className="rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">辟｡譁吝・髢倶ｸｭ</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">菴乗園繝・・繧ｿ荳諡ｬ豁｣隕丞喧繝・・繝ｫ</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                繧ｨ繧ｯ繧ｻ繝ｫ遲峨〒陦ｨ險俶昭繧後・豼縺励＞菴乗園繝・・繧ｿ繧剃ｸ迸ｬ縺ｧ邨ｱ荳縺励∫ｷｯ蠎ｦ邨悟ｺｦ繧定・蜍戊｣懷ｮ後☆繧九ヶ繝ｩ繧ｦ繧ｶ螳檎ｵ仙梛縺ｮWeb繝・・繝ｫ縲よ焔菴懈･ｭ縺ｫ繧医ｋ蜷榊ｯ・○菴懈･ｭ繧偵ぞ繝ｭ縺ｫ縺励∵･ｭ蜍吝柑邇・ｒ蜉・噪縺ｫ謾ｹ蝟・＠縺ｾ縺吶・
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-brand/10 px-4 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white">
                  繝・・繝ｫ繧貞茜逕ｨ縺吶ｋ
                </a>
              </div>
            </div>
          </div>

          {/* Product 3: Auto Capture & Translation Tool */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/auto-capture-screenshot.png" 
                alt="荳・・繧ｪ繝ｼ繝医く繝｣繝励メ繝｣・・I謚ｽ蜃ｺ繝ｻ鄙ｻ險ｳ" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-fuchsia-500/10 px-2 py-1 text-xs font-semibold text-fuchsia-600">Desktop App</span>
                <span className="rounded-md bg-fuchsia-500/10 px-2 py-1 text-xs font-semibold text-fuchsia-600">AI / Python</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">荳・・繧ｪ繝ｼ繝医く繝｣繝励メ繝｣・・I謚ｽ蜃ｺ繝ｻ鄙ｻ險ｳ</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                騾｣邯壹せ繧ｯ繝ｪ繝ｼ繝ｳ繧ｷ繝ｧ繝・ヨ縺九ｉ縲、I・・emini遲会ｼ峨ｒ逕ｨ縺・※繝・く繧ｹ繝医ｒ閾ｪ蜍墓歓蜃ｺ繝ｻ鄙ｻ險ｳ縺励∽ｺｺ髢鍋畑縺ｮ繝・Μ繝ｼ讒矩・医・繧､繝ｳ繝峨・繝・・・峨〒謨ｴ逅・☆繧九ョ繧ｹ繧ｯ繝医ャ繝励ヤ繝ｼ繝ｫ縺ｧ縺吶・
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-fuchsia-500/10 px-4 py-3 text-sm font-bold text-fuchsia-600 transition-colors hover:bg-fuchsia-500 hover:text-white">
                  繝・・繝ｫ繧貞茜逕ｨ縺吶ｋ
                </a>
              </div>
            </div>
          </div>

          {/* Product 5: Local News Aggregator */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/local-news-screenshot.png" 
                alt="閾ｪ蛻・ｰら畑 蠎・相縺ｪ縺怜慍蜈・ル繝･繝ｼ繧ｹ繧ｵ繧､繝・ 
                className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">Personal</span>
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-600">Python / Scraping</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">閾ｪ蛻・ｰら畑 蠎・相縺ｪ縺怜慍蜈・ル繝･繝ｼ繧ｹ繧ｵ繧､繝・/h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                縲悟慍蜈・・繝九Η繝ｼ繧ｹ繧定ｪｭ縺ｿ縺溘＞縺後∝ｺ・相縺繧峨￠縺ｧ隱ｭ縺ｿ縺･繧峨＞縲阪→縺・≧荳肴ｺ縺九ｉ閾ｪ菴懊＠縺溷ｰら畑繧｢繧ｰ繝ｪ繧ｲ繝ｼ繧ｿ繝ｼ縲１ython縺ｧ螳壽悄逧・↓險倅ｺ九ｒ繧ｹ繧ｯ繝ｬ繧､繝斐Φ繧ｰ繝ｻ隕∫ｴ・＠縲¨ext.js縺ｮ蠢ｫ驕ｩ縺ｪUI縺ｧ驟堺ｿ｡縺励※縺・∪縺吶・
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-blue-500/10 px-4 py-3 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-500 hover:text-white">
                  繧ｵ繧､繝医ｒ隕九ｋ
                </a>
              </div>
            </div>
          </div>
          {/* Product 2: Lifespan Timer */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-orange-500/50 hover:shadow-xl hover:-translate-y-1">
            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border/50 p-2">
              <img 
                src="/lifespan-timer-screenshot.png" 
                alt="蟇ｿ蜻ｽ繧ｫ繧ｦ繝ｳ繝医ム繧ｦ繝ｳ繧ｿ繧､繝槭・" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-600">Life Style</span>
                <span className="rounded-md bg-orange-500/10 px-2 py-1 text-xs font-semibold text-orange-600">蜈ｬ髢倶ｸｭ</span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground leading-snug">蟇ｿ蜻ｽ繧ｫ繧ｦ繝ｳ繝医ム繧ｦ繝ｳ繧ｿ繧､繝槭・</h3>
              <p className="mb-6 text-sm sm:text-base text-muted-foreground flex-1 leading-loose">
                閾ｪ蛻・・谿九＆繧後◆莠ｺ逕溘・譎る俣繧偵Μ繧｢繝ｫ繧ｿ繧､繝縺ｧ蛻ｻ縺ｿ邯壹￠繧九∝ｰ代＠繧ｷ繝･繝ｼ繝ｫ縺ｧ蛻ｺ豼逧・↑繧ｿ繧､繝槭・繧｢繝励Μ縲る♀縺ｳ蠢・・荳ｭ縺ｫ縲御ｻ頑律縺ｨ縺・≧1譌･縺ｮ螟ｧ蛻・＆縲阪ｒ蜀崎ｪ崎ｭ倥＆縺帙ｋ繝ｦ繝ｼ繝｢繧｢繧定ｾｼ繧√※縺・∪縺吶・
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-orange-500/10 px-4 py-3 text-sm font-bold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white">
                  繧｢繝励Μ繧定ｦ九ｋ
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
          <p className="mt-4 text-muted-foreground leading-relaxed">Azorb縺梧署萓帙☆繧・縺､縺ｮ萓｡蛟､</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-brand/30">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">繝九ャ繝∬ｪｲ鬘後・隗｣豎ｺ</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              蟶ょｴ隕乗ｨ｡縺悟ｰ上＆縺丞､ｧ莨∵･ｭ縺悟盾蜈･縺励↑縺・ｈ縺・↑縲悟ｱ謇逧・□縺代←遒ｺ螳溘↓隱ｰ縺九′蝗ｰ縺｣縺ｦ縺・ｋ隱ｲ鬘後阪ｒ隕九▽縺大・縺励√ヴ繝ｳ繝昴う繝ｳ繝医〒蛻ｺ縺輔ｋ閾ｪ蜍募喧繝・・繝ｫ繧呈署萓帙＠縺ｾ縺吶・
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-brand-2/30">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-2/10 text-brand-2">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">蝨ｧ蛟堤噪縺ｪ驕ｩ豁｣萓｡譬ｼ</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              蝟ｶ讌ｭ繧・ｸｭ髢薙・繝ｼ繧ｸ繝ｳ縺ｨ縺・▲縺溽┌鬧・↑繧ｳ繧ｹ繝医′荳蛻・匱逕溘＠縺ｪ縺・倶ｺｺ髢狗匱縺ｮ蠑ｷ縺ｿ繧呈ｴｻ縺九＠縲√お繝ｳ繧ｿ繝ｼ繝励Λ繧､繧ｺ蜩∬ｳｪ縺ｮ繝｢繝繝ｳ縺ｪ繝・・繝ｫ繧偵∵焔縺ｫ蜿悶ｊ繧・☆縺・ｽ惹ｾ｡譬ｼ縺ｧ謠蝉ｾ帙＠縺ｾ縺吶・
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-orange-500/30">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">驕翫・蠢・→繝ｦ繝ｼ繝｢繧｢</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-loose">
              辟｡讖溯ｳｪ縺ｪ讌ｭ蜍吝柑邇・喧縺縺代〒縺ｪ縺上∽ｽｿ縺｣縺ｦ縺・※縲後け繧ｹ繝・阪→隨代∴繧九ｈ縺・↑繝ｦ繝ｼ繝｢繧｢貅｢繧後ｋ繧｢繧､繝・い繝・・繝ｫ繧る幕逋ｺ縲よ律蟶ｸ縺ｮ繧ｹ繝代う繧ｹ縺ｫ縺ｪ繧九ｈ縺・↑菴馴ｨ薙ｒ螟ｧ蛻・↓縺励※縺・∪縺吶・
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-5xl mb-16 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Powered by</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">繝励Ο繝繧ｯ繝医ｒ謾ｯ縺医ｋ謗｡逕ｨ繝・け繝弱Ο繧ｸ繝ｼ</p>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">AI & AI Agents</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Cursor', 'ChatGPT', 'Gemini', 'Gemini Notebook', 'Google Antigravity'].map((skill) => (
                  <li key={skill} className="rounded-full border border-brand/30 bg-brand/5 px-5 py-2 text-sm font-bold text-brand shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Language / Framework</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Python', 'TypeScript', 'Next.js', 'React', 'FastAPI', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Infrastructure / BaaS</h4>
              <ul className="flex flex-wrap gap-2.5">
                {['Vercel', 'Supabase', 'Upstash', 'Cloudflare', 'Stripe', 'Brevo', 'GitHub'].map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground/80 border-t border-border/50 pt-4">
            窶ｻ 荳願ｨ倥・Language / Framework縺翫ｈ縺ｳ蜷・ｨｮ繧､繝ｳ繝輔Λ讒狗ｯ峨↓縺ｯ縲∫ｩ肴･ｵ逧・↓AI繝ｻAI繧ｨ繝ｼ繧ｸ繧ｧ繝ｳ繝医・謾ｯ謠ｴ繧堤畑縺・※螳溯｣・ｒ陦後▲縺ｦ縺・∪縺吶・
          </p>
        </section>

      {/* About */}
      <section className="mx-auto max-w-5xl mb-24 rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 shadow-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">About Studio</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">繧ｹ繧ｿ繧ｸ繧ｪ讎りｦ√→蝓ｺ譛ｬ諠・ｱ</p>
          </div>
          <div className="space-y-6 text-muted-foreground text-sm sm:text-base leading-loose">
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">螻句捷 / Brand</strong>
              <span>Azorb (繧｢繧ｾ繝ｼ繝・</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">莠区･ｭ蜀・ｮｹ</strong>
              <span className="text-right">閾ｪ遉ｾWeb繧ｵ繝ｼ繝薙せ縺ｮ莨∫判繝ｻ髢狗匱繝ｻ驕句霧<br/>繝九ャ繝・伜沺蜷代￠閾ｪ蜍募喧繝・・繝ｫ縺ｮ謠蝉ｾ・/span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">謇蝨ｨ蝨ｰ</strong>
              <span className="text-right">縲・50-0043<br/>譚ｱ莠ｬ驛ｽ貂玖ｰｷ蛹ｺ驕鍋私蝮・荳∫岼10逡ｪ8蜿ｷ<br/>貂玖ｰｷ驕鍋私蝮よ擲諤･繝薙Ν2F竏辰</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-5">
              <strong className="text-foreground font-bold min-w-32 tracking-tight">縺雁撫縺・粋繧上○</strong>
              <a href="mailto:info@azorb.co" className="text-brand hover:underline inline-flex items-center gap-1 font-semibold transition-colors">
                info@azorb.co
              </a>
            </div>
            <div className="pt-4 space-y-4">
              <p>
                縲悟､ｧ謇九′繧・ｉ縺ｪ縺・√〒繧りｪｰ縺九′遒ｺ螳溘↓谺ｲ縺励′縺｣縺ｦ縺・ｋ繧ゅ・縲阪ｒ繧ｳ繝ｳ繧ｻ繝励ヨ縺ｫ縲∬・遉ｾWeb繧ｵ繝ｼ繝薙せ繧・・蜍募喧繝・・繝ｫ縺ｮ髢狗匱縺ｫ豕ｨ蜉帙☆繧狗峡遶狗ｳｻ繝励Ο繝繧ｯ繝医せ繧ｿ繧ｸ繧ｪ縺ｧ縺吶・
              </p>
              <div className="rounded-xl bg-brand/5 border border-brand/10 p-5 my-4">
                <p className="text-sm font-bold text-brand mb-2">"A to Z" ﾃ・"Orbit (霆碁％)" = Azorb</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  荳蠎ｦ邨・∩荳翫￡縺溘さ繝ｼ繝峨′迢ゅ＞縺ｪ縺剰ｵｰ繧顔ｶ壹￠縲∬・蠕狗噪縺ｫ萓｡蛟､繧堤函縺ｿ蜃ｺ縺吶ょ､ｩ菴薙′霆碁％繧呈緒縺上ｈ縺・↑縲檎┌莠ｺ縺ｧ隕丞援豁｣縺励￥蝗槭ｊ邯壹￠繧狗ｾ弱＠縺・お繧ｳ繧ｷ繧ｹ繝・Β・郁・蜍募喧繝ｻSaaS・峨阪・險ｭ險医ｒ繧ｹ繧ｿ繧ｸ繧ｪ縺ｮ逅・ｿｵ縺ｨ縺励※縺・∪縺吶・
                </p>
              </div>
              <p>
                蝓ｺ譛ｬ逧・↓縺ｯ閾ｪ遉ｾ繝励Ο繝繧ｯ繝医・髢狗匱繧貞━蜈医＠縺ｦ縺翫ｊ縺ｾ縺吶′縲、zorb縺ｮ繝・じ繧､繝ｳ蜩ｲ蟄ｦ繧・橿陦薙せ繧ｿ繝・け縺ｫ蜈ｱ諢溘＠縲√悟酔讒倥・繝｢繝繝ｳ縺ｪ繧ｷ繧ｹ繝・Β繧定・遉ｾ縺ｫ繧よｧ狗ｯ峨＠縺ｦ縺ｻ縺励＞縲阪→縺・▲縺滓ｳ穂ｺｺ讒倥°繧峨・縺比ｾ晞ｼ縺ｫ髯舌ｊ縲∝ｰ第焚邊ｾ驪ｭ縺ｮ迚ｹ蛻･繝励Ο繧ｸ繧ｧ繧ｯ繝医→縺励※縺雁女縺代＠縺ｦ縺翫ｊ縺ｾ縺吶・
              </p>
              <p className="text-sm border-t border-border/70 pt-4 mt-4">
                窶ｻ 繝・・繝ｫ縺ｫ髢｢縺吶ｋ蜿匁攝縲√し繝ｼ繝薙せ雋ｷ蜿弱√♀繧医・髢狗匱縺ｮ縺皮嶌隲・↓縺､縺・※縺ｯ縲∽ｸ願ｨ倥Γ繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ繧医ｊ縺雁撫縺・粋繧上○縺上□縺輔＞縲・
              </p>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-10 pb-12 text-center text-sm text-muted-foreground">
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Azorb. All rights reserved.</p>
        <p className="mt-3 text-xs opacity-60 tracking-wider">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}