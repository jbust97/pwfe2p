import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { LoginProvider } from './providers/LoginContext';

import AppNavigator from './screens/AppNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginProvider> 
        <AppNavigator />
      </LoginProvider>
    </NativeBaseProvider>
  );
}
