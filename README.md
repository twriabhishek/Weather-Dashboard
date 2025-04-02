# Weather Dashboard

A modern, interactive weather dashboard built with Next.js that provides real-time weather information for any city worldwide. The application features a beautiful, dynamic UI that changes based on current weather conditions.

## 🌟 Features

- **Real-time Weather Data**: Get instant weather information for any city
- **Dynamic Background**: Background changes based on current weather conditions
- **Weather Effects**: Animated weather effects that match current conditions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI Components**: Built with Radix UI and styled with Tailwind CSS
- **Type-Safe**: Written in TypeScript for better development experience
- **Dark/Light Mode**: Support for both dark and light themes

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Weather API**: OpenWeatherMap API
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Date Handling**: date-fns
- **Charts**: Recharts
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [https://weather-dashboard-six-lovat.vercel.app/](https://weather-dashboard-six-lovat.vercel.app/) in your browser.

## 📱 Features in Detail

### Weather Dashboard
- Current temperature
- Weather conditions
- Humidity
- Wind speed
- Sunrise and sunset times
- Feels like temperature

### Search Functionality
- Search for any city worldwide
- Real-time search results
- Error handling for invalid cities
- Loading states for better UX

### Weather Effects
- Dynamic background changes based on weather conditions
- Animated weather effects (rain, snow, clouds, etc.)
- Day/night mode based on current time and sunrise/sunset

## 🔧 Configuration

The application uses several configuration files:
- `tailwind.config.ts`: Tailwind CSS configuration
- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.json`: ESLint configuration

## 📦 Project Structure

```
├── app/                    # Next.js app directory
├── components/            # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── public/              # Static assets
└── styles/              # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.