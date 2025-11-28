# NutriPup

A modern pet nutrition and wellness application built with React and Vite. NutriPup helps pet owners make informed decisions about their pet's diet and provides access to quality pet nutrition products.

## 🎯 Features

- **User Authentication**: Secure login and registration system
- **Product Catalog**: Browse and discover pet nutrition products
- **User Dashboard**: Personalized home page for registered users
- **Responsive Design**: Mobile-friendly interface with Font Awesome icons
- **Navigation**: Clean navigation bar for easy access to all features

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.5.0
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome Free 6.7.2
- **Linting**: ESLint 9.21.0

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd NutriPup-main
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Development

Run the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
NutriPup-main/
├── src/
│   ├── Nutri/                 # Main application components
│   │   ├── About.jsx          # About page
│   │   ├── Home.jsx           # Home/dashboard page
│   │   ├── Login.jsx          # Login component
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Products.jsx       # Products catalog
│   │   └── Register.jsx       # Registration component
│   ├── App.jsx                # Main App component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── public/
│   └── img/                   # Public images and assets
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── package.json               # Project dependencies

```

## 🔑 Key Components

- **Navbar**: Main navigation component for routing between pages
- **Home**: Dashboard/landing page for users
- **Products**: Product catalog and browsing interface
- **Login**: User authentication
- **Register**: New user registration
- **About**: Information about NutriPup

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code quality checks |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For support, please open an issue in the repository.
