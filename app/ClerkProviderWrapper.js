import React from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { Slot } from 'expo-router';

const tokenCache = {
  async getToken(key) {
    return SecureStore.getItemAsync(key);
  },
  async saveToken(key, value) {
    return SecureStore.setItemAsync(key, value);
  },
};

export default function ClerkProviderWrapper() {
  return (
    <ClerkProvider
      publishableKey="pk_test_bWVldC1tYWNhcXVlLTY3LmNsZXJrLmFjY291bnRzLmRldiQ"
      tokenCache={tokenCache}
    >
      <Slot />
    </ClerkProvider>
  );
}
