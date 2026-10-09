# Beautiful Album — Autumn

Standalone React + TypeScript album. This folder is independent of the original storybook and Winter.

## Run

Double-click START-AUTUMN.cmd, or run npm install then npm run dev from this folder. Open http://127.0.0.1:4182/ . Build: npm run build. Interaction checks: npm test. Static production output: dist/.

## Personalise

Edit src/album-data.ts: people, story, captions, dates, places, letter, chapter sequence, specialPhoto and photo positions. Replace public/images photographs. The typed AutumnAlbum object can later come from a database; there is no backend, authentication or upload service in this standalone version. Keep referenced photograph IDs valid and at least one photograph per composition slot.

## Components

src/Album.tsx contains AlbumCover, PhysicalPage, Polaroid, AutumnLeaf, Letter, Envelope, MemoryPhoto, MemoryNote, Receipt, PageTurn, FinalClosure and the shared Album state machine. src/styles.css holds physical materials, responsive layouts and reduced-motion rules.

## Sample and credits

Ella and Oliver and all memories are fictional demonstration content. The photos are independently sourced stock images, not documentation of a real relationship. Ten 1000px JPEGs are stored locally; source and license links are in photo-sources.json. Photographs: [Pexels](https://www.pexels.com/license/). Fonts: Cormorant Garamond, DM Sans, Caveat; local font files and OFL licenses included. Leaf SVGs and prose are original. No external quote is used.

## Verification

TypeScript and Vite production build pass. Happy DOM checks cover ten chapters and ten unique photos, photo lift, letter open/close, chapter navigation, special photo, receipt/infinity/both, closure, replay, pointer swipe, keyboard and contents. These checks simulate a DOM and do not verify browser layout, CSS animation quality, physical touch hardware or assistive technology.

This session's in-app browser could not reach localhost. The production preview runtime reports connect EACCES, and the browser reported a connection timeout. Real desktop/mobile visual QA and an on-screen demo remain unverified. No screenshot is presented as proof.
