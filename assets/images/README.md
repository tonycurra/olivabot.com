# Images and video

Every file that goes on GitHub must be named for what it shows, stripped of private metadata, and given a short description. Phone dumps (`PXL_*.jpg`, HEVC with GPS) do not belong in this tree.

## Naming

- Lowercase kebab-case: `myco-tower-stand-and-pump.webp`
- Group by project, then by subject: `gibbon-bot/gibbon-bot-mk2/`, `mycosense/outdoor-sensor/`
- Keep logos as `logo.png` (nav/footer, needs transparency) and SVG where we already have vector art

## Photos (WebP)

- Convert stills to WebP; max long edge **1920px**; sRGB
- Quality around 82 for photos; lossless only for simple logos (e.g. Madglove)
- Strip GPS, camera make/model, serials, and leftover XMP
- Write back **ImageDescription**, **Artist**, and **Copyright** (Olivabot, or the partner for their logo)

## Video (MP4)

- H.264 + AAC, `+faststart`, under GitHub’s 100 MB limit (aim much smaller)
- Drop all source metadata (`-map_metadata -1`), then set title / artist / copyright
- Scale the long edge down (around 1280px) so clips stay web-sized

## Do not

- Commit originals that still have location or camera tags
- Hotlink partner CDNs — keep a stripped local copy
- Rely on EXIF alone: text in the photo (labels, emails) is still visible
