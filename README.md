# OtakuVerse

Welcome to **OtakuVerse**, your ultimate anime companion! Search for your favorite anime, add them to your watchlist, and dive into a world of memes, waifus, and more!

## 🚀 Features

- **🔍 Search Anime Descriptions** – Discover anime with detailed info powered by the Jikan API.
- **💬 Random Anime Quotes** – Get inspired with quotes fetched from Animechan.
- **😂 Anime Memes** – Laugh out loud with memes sourced from Reddit’s r/Animemes.
- **🎴 Waifu of the Day** – Meet your daily waifu with images from waifu.pics.
- **✅ Watch Later List** – Save anime to your watchlist, stored locally in your browser.
- **🌠 Anime Scene Reverse Search** – Identify anime scenes using trace.moe’s reverse search.
- **📺 Trending Titles** – Stay updated with trending anime via AniList or Kitsu (optional).

## 🧰 Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Optional Backend**: Firebase, Laravel, or Node.js (for persistent watchlist storage)
- **APIs**: Free public APIs (see below)

## 🔌 APIs Used

| Feature                     | API Used            | Auth Required         |
|-----------------------------|---------------------|-----------------------|
| Anime Search                | Jikan API           | ❌ No                |
| Anime Memes                 | Reddit JSON / Meme API | ❌ No             |
| Anime Quotes                | Animechan           | ❌ No                |
| Anime Info (alt source)     | AniList / Kitsu     | ✅ Yes (AniList only) |
| Waifu Images                | waifu.pics          | ❌ No                |
| Reverse Search by Image     | trace.moe           | ❌ Optional          |

## 📋 Usage

- **Search Anime**: Enter a title to fetch details and descriptions.
- **Add to Watchlist**: Click "Watch Later" to save anime locally.
- **Explore Memes & Quotes**: Browse random memes and quotes for a quick laugh or inspiration.
- **Waifu Generator**: Get a new waifu image daily.
- **Trace Anime**: Upload an image to identify anime scenes.
- **Trending Titles**: Check out what’s hot in the anime world.

## 🤝 Contributing

We’d love your contributions! To get started:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
