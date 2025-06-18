import { SignIn } from '@clerk/clerk-expo';
import { useAuth } from '@clerk/clerk-expo';
import { View } from 'react-native';

export default function LoginScreen() {
  const { isSignedIn } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      {!isSignedIn && <SignIn routing="replace" />}
    </View>
  );
}
