#!/usr/bin/env python3
"""Generate the 1200x630 social sharing card used as the default og:image.

Run after changing the logo or the strapline:  python3 tools/build-og-image.py
"""

import pathlib

from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/images/og-card.png"

W, H = 1200, 630
BG = "#0e0e0e"
FG = "#f0f0f0"
MUTED = "#9a9a9a"
ACCENT = "#66bb6a"

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"


def main() -> int:
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    d.rectangle([0, 0, W, 10], fill=ACCENT)

    logo = Image.open(ROOT / "assets/images/logo.png").convert("RGBA")
    logo.thumbnail((110, 110), Image.LANCZOS)
    img.paste(logo, (80, 76), logo)

    d.text((210, 92), "Olivabot", font=ImageFont.truetype(BOLD, 60), fill=FG)
    d.text(
        (212, 158),
        "Amsterdam",
        font=ImageFont.truetype(REG, 26),
        fill=MUTED,
    )

    headline = ImageFont.truetype(BOLD, 62)
    for i, line in enumerate(
        ["Firmware, fintech, and", "software engineering", "for hire"]
    ):
        d.text((80, 268 + i * 78), line, font=headline, fill=FG)

    d.text(
        (80, 528),
        "Fixed fees, never day rates  ·  data stays in the EU  ·  Amsterdam",
        font=ImageFont.truetype(REG, 27),
        fill=ACCENT,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
