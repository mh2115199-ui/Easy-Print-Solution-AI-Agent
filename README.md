# Easy Print Solution AI Agent — Professional Starter v1.0

A real, responsive, browser-based customer-support workspace for Easy Print Solution. The dashboard, simulator, order tracker, contacts, FAQ engine, CSV export and JSON backup work **without paid subscriptions**. The included secure Meta webhook provides verification, HMAC validation and optional Supabase-backed inbound event storage. **It does not currently send outbound messages, process events into live dashboard conversations, or provide authenticated multi-device operations.** Those require further production integration work and approvals.

## Local launch
1. Install Node.js 20+. No npm packages are needed.
2. Open this folder in a terminal (no npm install required).
3. Run `npm run dev` and open the URL shown.
4. Run `npm test` for engine tests and `npm run build` before publishing.

## Publish on Netlify (recommended)
1. Create a GitHub repository, extract and upload the project files. Never upload `.env` or API secrets.
2. Netlify → Add new project → Import from Git → select repository.
3. Build command: `npm run build`; publish directory: `dist`; functions: `netlify/functions` (included in `netlify.toml`).
4. Deploy. The dashboard works as local-browser workspace. Test `/api/health` (Netlify rewrite) or `/.netlify/functions/health`.
5. To store incoming webhook events: create Supabase project → SQL editor → execute `supabase/schema.sql`; set `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `META_APP_SECRET`, `META_VERIFY_TOKEN` as **server-side** Netlify environment variables.
6. Deploy again. For Meta verification use HTTPS callback `https://YOUR-SITE.netlify.app/.netlify/functions/meta-webhook` with the same verify token. Configure proper subscriptions, permissions and Meta App mode; use official Meta docs. **Do not put production phone number into setup before testing**.

## Integration status — read before use
- WhatsApp, Instagram, Messenger: **not connected**. Existing code accepts and securely persists signed webhook events only when database is configured. It deliberately **does not generate or send live replies**, because message windows, permissions, token refresh and robust background queues are not yet implemented.
- AI: browser FAQ rule engine only. AI key configuration is reserved for a future protected backend; no AI provider call is made in this version.
- Google Sheets: not implemented, export CSV can be manually imported to Sheets.
- Local data: browser `localStorage`; clear browser storage/other device = no sync. Download a JSON backup regularly. Do not enter sensitive real customer data until admin authentication and a protected server-side database are implemented.
- WhatsApp / Meta production: requires actual platform authorization, testing, possible business verification, app reviews and message pricing. Neither hosting nor a ZIP bypasses these.

## Security
Webhook POST verifies `X-Hub-Signature-256` using `META_APP_SECRET`; GET challenge compares `META_VERIFY_TOKEN`; event deduplication relies on unique `external_id` in Supabase. Browser app contains no privileged API credentials. **Dashboard has no login or access control** and is not suitable for shared live customer records without authentication. Production work should add managed admin authentication, data isolation, resilient event processing, explicit rate limits and official per-channel reply adapters before enabling live messaging.

## Business defaults
Business name: Easy Print Solution. Public contact WhatsApp: +92 311 2365535; handle: @easyprint786. No unapproved rate, discount or delivery claims.
