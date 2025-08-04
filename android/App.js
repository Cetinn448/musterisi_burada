// Bismillahir-Rahmanir-Rahim
// Elhamdu lillahi Rabbil 'alamin
// Assalatu wassalamu 'ala Rasulillah
// Wa 'ala alihi wa sahbihi ajma'in
// La hawla wa la quwwata illa billah
// Allahumma salli 'ala Muhammad wa 'ala ali Muhammad
// SuphanAllah Elhamdulillah Allahu Akbar
// La ilaha illallah Muhammadur Rasulullah

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FullPageWebView from './src/components/FullPageWebView';
import PermissionsModal from './src/components/PermissionsModal';

const Stack = createStackNavigator();

export default function App() {
  const [permissionsDone, setPermissionsDone] = useState(false);

  return (
    <>
      <PermissionsModal visible={!permissionsDone} onDone={() => setPermissionsDone(true)} />
      {permissionsDone && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WebView">
            <Stack.Screen 
              name="WebView" 
              component={FullPageWebView} 
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}