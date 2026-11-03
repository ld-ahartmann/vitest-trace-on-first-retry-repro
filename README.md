# Vitest `browser.trace: 'on-first-retry'` starts tracing on first attempts

Minimal reproduction: with `browser.trace: { mode: 'on-first-retry' }` and no `--retry`, Vitest starts a Playwright trace for every test file, though no test ever retries.

## Steps

```sh
pnpm install
pnpm exec playwright install chromium
pnpm test:debug
```

`test:debug` runs with `DEBUG=pw:api` and prints only Playwright tracing calls. Expected: no `tracing.start`, because no test retries. Actual: one `tracing.start` per test file (8 here).

Compare wall time against tracing off:

```sh
pnpm test       # on-first-retry
pnpm test:off   # off
```

The gap is small with these 8 trivial files and grows with suite size and DOM work.
