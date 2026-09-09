# Photos

All photos are in place. This is a map of what lives where, for when you
want to swap or add one.

Every image is served from `public/`, so a path like `/gallery/g1.jpg`
means the file `public/gallery/g1.jpg`.

## Hero portrait

`public/portrait.jpg` — the studio headshot, set in `src/data/content.js`
as `profile.portrait`. Replace the file to change it. If the file is ever
missing the hero falls back to the "SP" monogram on its own.

## Gallery — `public/gallery/`

| File      | Photo                                              |
|-----------|----------------------------------------------------|
| `gp5.jpg` | Visa handover collage (10 panels)                  |
| `g1.jpg`  | Four people with documents in the office           |
| `g2.jpg`  | Three people, document handover                    |
| `g3.jpg`  | Selfie of three holding the signed document        |
| `g4.jpg`  | Workshop table session                             |

Captions are in `src/data/content.js` -> `gallery`, and currently
describe only what is visible. Edit them to name the real venue, partner
or date. To add a photo, drop the file in and add an entry to that array.

The grid is two columns on purpose — the collage needs the width for its
panels to stay readable. A missing file renders as a captioned
"Photo coming" frame rather than a broken image.

## Testimonials — `public/testimonials/`

Student photos extracted from `Review.pdf`, named `p1-a` … `p8-b` and
paired to names in `src/data/content.js` -> `testimonials`. `p2-d.jpg` is
spare and unused. Remove a `photo:` line to fall back to that student's
initials monogram.

## Sizes

Originals were 8.2 MB total, which is too heavy to ship. They were
resized and re-encoded in place (portrait at q92, gallery at q80–82);
`public/` is now ~1.8 MB. If you replace a photo with a full-resolution
original, shrink it to roughly 1200px on its long edge first.
