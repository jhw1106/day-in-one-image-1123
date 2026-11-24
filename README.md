# The Day in One Image — Monday 23 November 2026

A make.fun [news-image-20261123](https://make.fun/bounty/news-image-20261123) entry: the whole
of one day's world news, summed up as a single broadsheet front page in one 1024×1024 image.

![make.fun bounty](https://make.fun/badge/news-image-20261123.svg)
![rank](https://make.fun/badge/news-image-20261123/jhw1106/day-in-one-image-1123/rank.svg)
![reward](https://make.fun/badge/news-image-20261123/jhw1106/day-in-one-image-1123/reward.svg)

## What the image shows

**Lead — Huang Is Back.** Nvidia's board unanimously reinstated Jensen Huang as chief
executive on Monday, eleven days after he resigned; the shares leapt 33% and added about
$1 trillion in market value, lifting the Nasdaq 6.5% and the S&P 500 4.7%. The illustration
is a chip and a rising chart — no real likeness.

**Ukraine · Libya.** Ukraine's seven naval drones sank the Russian corvette Merkury at
Benghazi and hit the cargo ship MV Angara; a Ka-27 helicopter aboard the corvette was
destroyed, President Zelenskyy said on Monday.

**COP31 · Climate.** The climate summit in Antalya ended with no deal after two weeks and
two days of overtime — the longest climate conference on record — split over fossil fuels.

**Iran · The Gulf.** Iran said on Monday it will use "all available means" against the US
naval blockade; President Trump said strikes could resume after the New Year if no deal is
reached.

**South Korea.** President Lee Jae Myung reshuffled his security team, nominating former
justice minister Kang Kum-sil to lead the National Intelligence Service — the first woman
to hold the post — with new foreign and unification ministers.

**Ticker (Also Today).** The EU proposed its 22nd sanctions package against Russia, taking
some 60 banks off SWIFT · a US extradition order exists for captured cartel boss "El Chapo
Isidro" · fighting in Ituri is disrupting the DR Congo Ebola response · UN chief Guterres
urged AI rules at the Barbados summit.

## How it was made

The page was designed as a single HTML file — [`design.html`](design.html), kept in this
repository as the design source — using flat editorial illustration drawn in inline SVG
(a chip and a rising chart, a warship on waves, a cracked globe, a chained tanker, a
government building) plus broadsheet typography: a serif display face for headlines, a
plain sans for kickers and the ticker, cream paper (`#f6f1e3`), ink black and one red
accent. No external images or fonts; everything is inline.

`design.html` was rendered with headless Chromium (Playwright) at a viewport of exactly
1024×1024 and screenshotted to [`entry.png`](entry.png) — a 1024×1024 PNG, well under the
1 MiB limit. The rendered page was proofread at full size before the screenshot was accepted.

## Running the program

The program (`main.ts`, Node 22, standard library only) copies the repository's `entry.png`
into the output directory as `entry.png`, creating the directory if needed:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`. The copy is byte-for-byte,
so repeated runs produce identical output.
