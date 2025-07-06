# Task Blossom 🌸

A pastel‑purple task manager that puts a smile on your face while you work.  
**Task Blossom** combines a simple to‑do list, a three‑phase Pomodoro timer and an ever‑changing anime GIF to keep things fun and productive—all in plain **HTML, CSS & vanilla JavaScript**.

Live demo → <https://task-blossom.vercel.app>

> **Friendly note ⚠️** The random GIFs come from the public **OtakuGIFs API**; if the API is down or slow the preview image may take a few seconds to load.

---

## ✨ Features

| Feature | Description |
| ------- | ----------- |
| **Add & remove tasks** | Type a task, hit the floating “+” button and it appears in your list. You can manage up to 6 tasks at once; deleting a task frees a slot. |
| **Anime motivation** | Click the image frame to fetch a brand‑new reaction GIF from OtakuGIFs—perfect for a quick dopamine hit. |
| **Pomodoro timer** | Built‑in 25‑minute focus, 5‑minute short‑break and 15‑minute long‑break presets with start/pause controls and audio cues when time is up. |
| **Responsive design** | The layout gracefully collapses from a wide three‑window desktop view to a single‑column mobile view. |
| **Zero build step** | No frameworks, no bundlers—just open `index.html` or drop the folder on any static host. |

---

## 🛠 Tech Stack

- **HTML5** for markup  
- **CSS3** with custom properties & flexbox for styling  
- **JavaScript (ES6)** for DOM interaction, task logic and the timer  
- **OtakuGIFs API** for random reaction GIFs  
- **Audio cues** (`click.mp3`, `done.mp3`) played with the native `Audio` API

---

## 🚀 Quick Start

```bash
# 1 – Clone the repository
git clone https://github.com/cidoliveira/task-blossom.git
cd task-blossom

# 2 – Open the app (no install needed)
open index.html   # macOS
# or
start index.html  # Windows

# Optional: serve locally to avoid CORS warnings
npx serve .
```

---

## 📂 Project Structure

```
├── audio/           # Click & finish sounds
├── css/
│   ├── reset.css    # Minimal reset
│   └── styles.css   # Global styles & media queries
├── img/             # Vector background & placeholder images
├── index.html       # Main layout
├── script.js        # Task list, GIF fetcher & Pomodoro logic
└── README.md        # Project information
```

---

## 🔧 Customisation

| Want to… | Where to change |
| -------- | --------------- |
| **Change the task limit** | Update the `numberTasks` check in `script.js`. |
| **Use your own GIF source** | Replace `getApi()` with your own fetch logic. |
| **Adjust timer lengths** | Edit the minute values at the top of `script.js`. |
| **Switch colours/fonts** | Tweak CSS variables in `css/styles.css`. |
| **Swap audio files** | Replace the MP3 files in `audio/` with your own clips (keep the same filenames). |

---

## 🤝 Contributing

1. **Fork** this repo  
2. Create a branch: `git checkout -b feat/your-feature`  
3. **Commit**: `git commit -m "feat: add cool feature"`  
4. **Push**: `git push origin feat/your-feature`  
5. Open a **Pull Request**

---

## 📄 License

Released under the **MIT License**. See `LICENSE` for details.

---

Made with&nbsp;♥ by [Cid Oliveira](https://github.com/cidoliveira)
