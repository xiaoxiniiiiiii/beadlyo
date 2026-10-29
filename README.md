# BEADLYO

React + Vite accessories store for 河南宋韵匠瓷文化艺术有限公司. UTF-8 throughout. Work remains on main.

## Run

- `npm i`
- `npm run dev` — frontend and Express API at http://localhost:5173
- `npm run build`
- Production PowerShell: `$env:NODE_ENV='production'; npm start`
- `node scripts/verify.mjs` — isolated API checks, without browser automation.

## Pages and functions

- `/#/` home, `/#/shop` catalog (4 categories × 16 products), `/#/product/1` detail.
- Add to Cart opens the bag drawer; Buy Now adds the piece and opens checkout.
- `/#/checkout` creates a server-priced order, then redirects to its payment page.
- `/#/track` requires order ID plus matching email.
- `/#/admin` provides server-authenticated catalog price/stock/visibility editing and order viewing.
- Initial account is `admin`; the randomly generated password is saved only in `.data/INITIAL-LOGIN.txt` after first server startup. Password hashes, sessions and orders are server-side; sessions expire after eight hours.
- Company details and the full policy set appear in the footer. Terms have 17 sections.

## Payment configuration and launch limits

The default checkout is a demonstration. It does not collect card numbers or charge money. Demo confirmation is explicitly labeled and is never recorded as a real paid order.

Copy `.env.example` to `.env`, configure your own PayPal client/secret and/or Stripe secret key, set APP_URL to your HTTPS public origin, then restart the server. PayPal defaults to sandbox; `PAYPAL_LIVE=true` selects the live endpoint. Cards including Visa use Stripe Checkout. Server code calculates totals, creates provider sessions and verifies provider references, currency and amount after return before marking a live order paid. Secrets never go to the browser or Git.

Real provider operations have NOT been tested because merchant credentials were not supplied. Automatic webhooks/reconciliation, refunds, inventory reservation/deduction and carrier integrations are not implemented. A customer who pays but does not return from a provider needs manual payment reconciliation; production operation requires webhook support and operational testing. Shipping and tax are currently $0 demonstration values. Configure shipping destinations, costs, taxes and actual stock handling before live sales. No live deployment has been performed.

Registration number was not provided; the footer explicitly marks it pending verification. Supply the actual company registration number before publishing. Product imagery is AI-generated and unbranded; actual materials, precious metal purity, gemstone authenticity, sizes and stock must be verified against supplied goods before sale. Hygiene policies and mandatory consumer rights must be reviewed for target markets. No universal legal-compliance certification is implied.

The API uses local JSON files under `.data`; run a single Node process. For production, use durable database storage, backups, HTTPS, provider webhooks and admin credential rotation.

## Assets and design

All 65 shipped photographic assets are WebP under `public/images/`. There are 64 standalone product images and one hero; there are no JPG dependencies. The product source atlas was inspected for complete subjects and absence of visible text, brands and watermarks. `scripts/prepare-assets.mjs` extracts each row-major cell; `scripts/prepare-hero.mjs` converts the hero.

Built-in imagegen skill/tool was used, not Python image drawing. Prompt set:
1. A photorealistic 8×8 jewelry catalog sheet with one complete unbranded item per ivory-background cell, corresponding to the explicit row-major 64 product names in `src/catalog.js`; editorial lighting, no text/logos/watermarks.
2. A landscape editorial still life of a pearl necklace on cream limestone with sculptural gold hoops, a gold bracelet and sand linen; natural light, warm beige/gold, no text/logos/watermarks.

Reference: http://demo.ckcc.cc/demo?pid=3574 embeds the Cartnov jewelry template at https://demos.codezeel.com/wordpress/WCM03/WCM030057/. The reference source declares primary warm copper `#d6975c`, charcoal `#333333`, white and pale gray. The store uses this solid palette, a search header, collection navigation, hero, catalog blocks, service strip and grouped company/policy footer. Browser validation was skipped at the user's request.

## Git upload rules

`.gitignore` excludes node_modules, dist, .env secrets, local .data orders/accounts, logs and downloaded reference HTML. Keep source, package-lock.json, generated WebP assets, .env.example and documentation tracked. Never commit merchant credentials or customer records. No branch, subagent, commit or push was created automatically.
