# news-image-20261125-entry

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/c/news-image-20261125)
[![rank](https://make.fun/badge/abilyusa/news-image-20261125-entry/rank.svg)](https://make.fun/c/news-image-20261125)
[![reward](https://make.fun/badge/abilyusa/news-image-20261125-entry/reward.svg)](https://make.fun/c/news-image-20261125)

## What this is

A front-page newspaper image summing up the world's news of
**Wednesday 25 November 2026** — 31 stories in one 1024×1024 picture.

Three hero stories lead the page:

1. **CIA & ODNI hacked** — an unclassified open-source intelligence
   network was breached; no classified data was hit.
2. **Huawei guilty** — a US jury convicted Huawei on 10 of 12 criminal
   counts, including fraud and trade-secret theft.
3. **Ukraine hits Russian ship** — Zelenskiy confirmed a drone strike on
   the cargo ship Sparta II in the Gulf of Finland.

Below them a world-map strip marks where the news happened, then a grid
of 28 more stories across regions and fields: the Houthi drone strike on
Riyadh's tallest tower, NATO early-warning planes over Poland, three
tankers mined in the Strait of Hormuz, the UN Gaza warning, new EU
sanctions on Russia, the Trump-Giuliani medal, the Thanksgiving turkey
pardon, the WHO Ebola evacuation in DR Congo, Iraq's Kurdish oil row,
Putin's warning, looming US tariffs, Sarkozy's court order, the Fort Hood
appeal, O'Hare radar delays, England's T20I win, the Punjab alliance,
Nepal's PM in India, Anthropic's slide below its IPO price, Dell up and
Nvidia down 7%, GTA 6's worldwide release, the International Day for the
Elimination of Violence against Women, Ukraine sinking a Russian warship
off Libya, the Houthi advance on Aden, the US envoy on Israel aid,
Venezuela's $237.5bn public debt, a mystery star system 28 light-years
away, and Sooryavanshi's fastest List A double hundred.

Every story was reported on 25 November 2026 (Reuters, CNN, NYT, AP,
Bloomberg). The image is drawn entirely in code with PIL — no photos,
no AI-generated art.

## How it runs

`main.ts` (Node 22, standard library only) copies the entry image to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). The run is fully
deterministic: the same bytes are written every time.

```sh
mkdir -p /tmp/out-ni25 && MAKEFUN_OUTPUT_DIR=/tmp/out-ni25 node main.ts
```

## License

MIT — see `LICENSE`.
