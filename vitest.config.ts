import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

type TraceMode = 'off' | 'on' | 'on-first-retry' | 'on-all-retries' | 'retain-on-failure'

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      trace: { mode: (process.env.TRACE_MODE as TraceMode) ?? 'on-first-retry' },
    },
  },
})
