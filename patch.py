import re

with open("app/contact/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
content = content.replace("import { ArrowLeft, Send } from 'lucide-react';", "import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';")

# 2. Update state and handleSubmit
new_state = """  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);"""
content = content.replace("  const [isSubmitting, setIsSubmitting] = useState(false);", new_state)

old_submit = """  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };"""

new_submit = """  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mbgjkyea", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch (error) {
      alert("通信エラーが発生しました。ネットワークをご確認ください。");
    } finally {
      setIsSubmitting(false);
    }
  };"""

content = content.replace(old_submit, new_submit)

# 3. Update the render block
old_render = """        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">お問い合わせ</h1>"""

new_render = """        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-sm">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">送信が完了しました！</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                お問い合わせいただき、ありがとうございます。<br />
                内容を確認の上、担当者より通常3営業日以内にご連絡いたします。
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-center bg-background border border-border hover:bg-muted text-foreground font-bold py-3 px-8 rounded-xl transition-all shadow-sm"
              >
                トップページへ戻る
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">お問い合わせ</h1>"""

content = content.replace(old_render, new_render)

# 4. Add the closing tag for the conditionally rendered block
old_end = """              </button>
            </div>
          </form>
        </div>"""

new_end = """              </button>
            </div>
          </form>
          </>
          )}
        </div>"""
content = content.replace(old_end, new_end)

with open("app/contact/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
