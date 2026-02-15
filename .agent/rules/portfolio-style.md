---
trigger: always_on
---

# Global Project Rules

* **Framework:** Strictly use Next.js (App Router) and Tailwind CSS.
* **Theme:** Default to a cinematic, dark-mode aesthetic (black or deep charcoal backgrounds, minimalist typography).
* **Animations:** All page transitions, hover states, and micro-interactions MUST use `framer-motion`. Do not use raw CSS keyframes.
* **Video Handling (Thumbnails):** For homepage previews or gallery grids, strictly use the native HTML5 `<video autoPlay loop muted playsInline>` tag to keep performance high and avoid unnecessary overhead.
* **Video Handling (Full Player):** For dedicated video viewing pages, strictly use `plyr-react` (and the `plyr` CSS) for a custom, premium video UI. Do NOT use `react-player`.