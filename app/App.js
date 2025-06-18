// app/App.js
import React from 'react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/LoginScreen';

const tokenCache = {
  getToken: (key) => SecureStore.getItemAsync(key),
  saveToken: (key, value) => SecureStore.setItemAsync(key, value),
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey="Ypk_test_bWVldC1tYWNhcXVlLTY3LmNsZXJrLmFjY291bnRzLmRldiQ"
      tokenCache={tokenCache}
    >
      <SignedIn>
        <AppNavigator />
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
