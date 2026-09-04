"use client"

import { useEffect, useRef } from "react"
import { toast } from "sonner"
import { useLanguage } from "@/lib/i18n-context"

export function RefreshNotifier() {
  const { t } = useLanguage()
  const toastTextRef = useRef(t.header.toast)
  
  useEffect(() => {
    toastTextRef.current = t.header.toast
  }, [t.header.toast])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Navigation APIを利用して「リロード（F5等）によるアクセスか」を判定
    const navEntries = performance.getEntriesByType("navigation")
    if (navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload") {
      // Toasterコンポーネントがマウントされ、言語設定が反映されるのを待つ
      const timer = setTimeout(() => {
        toast.success(toastTextRef.current, {
          position: "top-center",
          duration: 2000,
          style: { padding: '8px 24px', minHeight: '36px', fontSize: '14px', borderRadius: '100px', width: 'max-content', margin: '0 auto', left: 0, right: 0 }
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [])

  return null
}