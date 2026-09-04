'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");
  const [selectedOs, setSelectedOs] = useState("");
  const [selectedBrowser, setSelectedBrowser] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all shadow-sm";
  const radioGroupClass = "space-y-1.5 p-1";
  const dynamicInputClass = "w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground/40 focus:bg-background focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand mt-2 transition-all shadow-sm";

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Azorb トップへ
        </Link>

        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">お問い合わせ</h1>
          <p className="text-muted-foreground mb-10 pb-8 border-b border-border text-sm md:text-base">
            Azorbの各種サービスについてのお問い合わせはこちらからお願いいたします。
          </p>

          <form 
            action="https://formspree.io/f/mbgjkyea" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                1. 会社名 <span className="text-muted-foreground ml-2 text-xs font-normal">【任意】（個人のお客様は空欄可）</span>
              </label>
              <input 
                type="text" 
                name="company" 
                className={inputClass}
                placeholder="例：株式会社Azorb"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                2. お名前（ご担当者様名） <span className="text-destructive ml-2 text-xs font-bold">【必須】</span>
              </label>
              <input 
                type="text" 
                name="name" 
                required
                className={inputClass}
                placeholder="例：山田 太郎"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                3. メールアドレス <span className="text-destructive ml-2 text-xs font-bold">【必須】</span>
              </label>
              <input 
                type="email" 
                name="email" 
                required
                className={inputClass}
                placeholder="例：info@azorb.co"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                4. 対象のサービス <span className="text-destructive ml-2 text-xs font-bold">【必須】</span>
              </label>
              <div className={radioGroupClass}>
                {[
                  "住所データ自動整形ツール",
                  "SaaS向け UIボイラープレート",
                  "寿命カウントダウンタイマー",
                  "自分専用 広告なし地元ニュースサイト",
                  "万能オートキャプチャ＆AI抽出・翻訳",
                  "その他"
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="service" 
                      value={service}
                      required
                      checked={selectedService === service}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-4 h-4 text-brand bg-background border-border focus:ring-brand" 
                    />
                    <span className="text-foreground">{service}</span>
                  </label>
                ))}
                
                {selectedService === "その他" && (
                  <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                    <input 
                      type="text" 
                      name="service_other" 
                      required
                      placeholder="サービス名をご記入ください"
                      className={dynamicInputClass}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                5. お問い合わせの種別 <span className="text-destructive ml-2 text-xs font-bold">【必須】</span>
              </label>
              <div className={radioGroupClass}>
                {[
                  "不具合・エラーのご報告",
                  "ご購入・お支払いに関するご質問",
                  "導入・プロプランに関するご相談",
                  "機能の使い方についてのご質問",
                  "その他"
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="inquiry_type" 
                      value={type}
                      required
                      checked={selectedInquiryType === type}
                      onChange={(e) => setSelectedInquiryType(e.target.value)}
                      className="w-4 h-4 text-brand bg-background border-border focus:ring-brand" 
                    />
                    <span className="text-foreground">{type}</span>
                  </label>
                ))}

                {selectedInquiryType === "その他" && (
                  <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                    <input 
                      type="text" 
                      name="inquiry_type_other" 
                      required
                      placeholder="お問い合わせ種別をご記入ください"
                      className={dynamicInputClass}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                6. ご利用の環境 <span className="text-muted-foreground ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
              </label>
              <div className={radioGroupClass}>
                {["Windows", "Mac", "iPhone / iPad", "Android", "その他"].map((env) => (
                  <label key={env} className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="os" 
                      value={env}
                      checked={selectedOs === env}
                      onChange={(e) => setSelectedOs(e.target.value)}
                      className="w-4 h-4 text-brand bg-background border-border focus:ring-brand" 
                    />
                    <span className="text-foreground">{env}</span>
                  </label>
                ))}

                {selectedOs === "その他" && (
                  <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                    <input 
                      type="text" 
                      name="os_other"
                      placeholder="ご利用のOS等をご記入ください"
                      className={dynamicInputClass}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                7. ご利用のブラウザ <span className="text-muted-foreground ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
              </label>
              <div className={radioGroupClass}>
                {["Google Chrome", "Safari", "Microsoft Edge", "Firefox", "その他"].map((browser) => (
                  <label key={browser} className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="browser" 
                      value={browser}
                      checked={selectedBrowser === browser}
                      onChange={(e) => setSelectedBrowser(e.target.value)}
                      className="w-4 h-4 text-brand bg-background border-border focus:ring-brand" 
                    />
                    <span className="text-foreground">{browser}</span>
                  </label>
                ))}

                {selectedBrowser === "その他" && (
                  <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                    <input 
                      type="text" 
                      name="browser_other"
                      placeholder="ご利用のブラウザをご記入ください"
                      className={dynamicInputClass}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                8. ご購入時のメールアドレス <span className="text-muted-foreground ml-2 text-xs font-normal">【任意】（※既にツールをご購入済みの方）</span>
              </label>
              <input 
                type="email" 
                name="purchase_email" 
                className={inputClass}
                placeholder="例：info@azorb.co"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-foreground">
                9. 具体的なお問い合わせ内容 <span className="text-destructive ml-2 text-xs font-bold">【必須】</span>
              </label>
              <textarea 
                name="message" 
                required
                rows={6}
                className={`${inputClass} resize-y`}
                placeholder="【記入例】&#13;&#10;・エラーが起きたタイミング：ファイルをアップロードした瞬間&#13;&#10;・起きた現象：〇〇というエラーメッセージが出た&#13;&#10;※不具合以外の場合はご自由にご記入ください。"
              ></textarea>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand hover:brightness-110 text-primary-foreground font-bold py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "送信準備中..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    送信する
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
