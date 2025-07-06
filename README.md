# Task Blossom 🌸

A pastel‑purple task manager that puts a smile on your face while you work.  
**Task Blossom** blends a simple to‑do list, an integrated Pomodoro timer and a rotating anime reaction GIF to keep things fun **and** productive—all in plain **HTML, CSS & vanilla JavaScript**.

Live demo → <https://task-blossom.vercel.app>

> **Heads‑up ⚠️** Random GIFs are fetched from the public **OtakuGIFs API**. If the API is down or slow the image may take a few seconds to appear.

---

## ✨ Features

| Feature                         | Description                                                                                                                                               |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Add, persist & remove tasks** | Create up to **6 tasks**. Each task is saved to **`localStorage`**, so your list is still there when you come back. Deleting a task also removes its key. |
| **Anime motivation**            | Click the image frame at any time to grab a brand‑new reaction GIF from OtakuGIFs.                                                                        |
| **Pomodoro timer**              | One‑click presets for **25 min focus**, **5 min break** and **15 min long break** with start/pause controls and audio cues.                               |
| **Responsive design**           | A three‑window desktop view collapses smoothly into a single‑column mobile layout.                                                                        |
| **Zero build step**             | No frameworks, no bundlers—just open `index.html` or host the folder on any static server.                                                                |

---

## 🛠 Tech Stack

- **HTML5** for markup
- **CSS3** with CSS custom properties & flexbox
- **JavaScript (ES6)** for DOM interaction, `localStorage` persistence and timer logic
- **OtakuGIFs API** for random reaction GIFs
- **Audio** (`click.mp3`, `done.mp3`) played via the native `Audio` API

---

## 🚀 Quick Start

```bash
git clone https://github.com/cidoliveira/task-blossom.git
cd task-blossom
open index.html   # macOS — or use start index.html on Windows

# Optional: serve locally to avoid CORS / MIME warnings
npx serve .
```

---

## 📂 Project Structure

```
├── audio/            # Click & finish sounds
├── css/
│   ├── reset.css     # Minimal reset
│   └── styles.css    # Global styles & media queries
├── img/              # Vector background & placeholder images
├── index.html        # Main layout
├── script.js         # Task list, GIF fetcher, localStorage & Pomodoro logic
└── README.md         # Project information
```

---

## 🔧 Customisation

| Need to…                       | Where to tweak                                                      |
| ------------------------------ | ------------------------------------------------------------------- |
| **Change task limit**          | Edit the `numberTasks` check in `script.js`.                        |
| **Rename `localStorage` keys** | Adjust the `task ${index}` pattern in `script.js`.                  |
| **Use another GIF API**        | Swap out `getApi()` for your own fetch logic.                       |
| **Modify timer lengths**       | Change the minute values near the top of `script.js`.               |
| **Alter colours / fonts**      | Update CSS variables in `css/styles.css`.                           |
| **Swap audio clips**           | Replace the MP3 files in `audio/` with new files of the same names. |

---

## 🗑 Clearing Your List

Either click each trash‑can icon **or** run `localStorage.clear()` in your browser DevTools to wipe all saved tasks.

---

## 🤝 Contributing

1. **Fork** the repo
2. Create a branch: `git checkout -b feat/my-feature`
3. **Commit**: `git commit -m "feat: my feature"`
4. **Push**: `git push origin feat/my-feature`
5. Open a **Pull Request**

---

## 📄 License

Released under the **MIT License**. See `LICENSE` for details.

---

Made with ♥ by [Cid Oliveira](https://github.com/cidoliveira)
