# GoQuest
```bash
GoQuest/
├── backend/                  # Node.js + Express backend (hosted on Vercel)
│   ├── api/
│   │   ├── index.js          # Vercel entry point (api route)
│   │   ├── qr.js             # QR treasure hunt endpoint
│   │   ├── rewards.js        # Eco-product reward logic
│   │   └── nutrition.js      # Calls OpenFoodFacts API
│   ├── utils/
│   │   └── productUtils.js   # Product filters, scoring, etc.
│   ├── middleware/
│   │   └── clerkAuth.js      # Clerk middleware for auth check
│   └── package.json
│
├── app/                      # React Native app (Expo)
│   ├── assets/               # Icons, images, QR placeholder
│   ├── components/           # Reusable UI components (Card, Scanner, etc.)
│   ├── screens/              # Main app screens
│   │   ├── HomeScreen.js
│   │   ├── QRScannerScreen.js
│   │   ├── NutritionScreen.js
│   │   ├── WalletScreen.js
│   │   ├── LoginScreen.js
│   │   └── SplashScreen.js
│   ├── context/              # Global context (auth, rewards, etc.)
│   │   └── AuthContext.js
│   ├── hooks/                # Custom hooks (useGeofence, useTimer, etc.)
│   ├── services/             # API services to call backend
│   │   ├── apiClient.js
│   │   ├── rewardService.js
│   │   └── notificationService.js
│   ├── navigation/           # Navigation stack (React Navigation)
│   │   └── AppNavigator.js
│   ├── App.js                # App entry point
│   └── app.config.js         # Expo config (with geolocation perms etc.)
│
├── .gitignore
├── README.md
└── vercel.json               # Vercel deployment config for backend
```
