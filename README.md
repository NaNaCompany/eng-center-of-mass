# 두 물체 질량중심 계산기

공통 원점을 기준으로 두 점질량의 1차원 질량중심 계산

- Plan ID: E065
- App: https://nanalab.kr/eng-center-of-mass/
- Repository: https://github.com/NaNaCompany/eng-center-of-mass
- Formula: `x_cm = (m₁x₁+m₂x₂)/(m₁+m₂)`
- Output: 한 축의 질량중심 x_cm

## Model

m₁,m₂>0. 두 위치는 같은 원점·축·단위 기준을 사용한다. 물체의 확장 크기·3차원 좌표·관성모멘트는 계산하지 않는다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `3`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
