# Stat Assistant

A modern, mobile-friendly sports stats web app for NBA and NFL fans, bettors, and analysts. Review recent player and team stats, compare performances, and make informed decisions—all in a beautiful, responsive interface.

![Stat Assistant Screenshot](./public/screenshot.png)

## Features
- NBA and NFL stats lookup for players and teams
- Subscriber and free API key support (SportsData.io)
- Modern, mobile-first UI with dark mode
- Secure Stripe integration for subscriptions
- Responsive, sports-themed design

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/stat-assistant.git
cd stat-assistant
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure environment variables
Copy `.env.example` to `.env` and fill in your real API keys and secrets:
```bash
cp .env.example .env
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
Deploy easily to [Vercel](https://vercel.com/) or your preferred platform. Make sure to set all required environment variables in your deployment settings.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

_Stat Assistant is not affiliated with or endorsed by the NBA, NFL, or SportsData.io. All data provided is for informational purposes only._
