// Bismillahir-Rahmanir-Rahim
// Elhamdu lillahi Rabbil 'alamin
// Assalatu wassalamu 'ala Rasulillah
// Wa 'ala alihi wa sahbihi ajma'in
// La hawla wa la quwwata illa billah
// Allahumma salli 'ala Muhammad wa 'ala ali Muhammad
// SuphanAllah Elhamdulillah Allahu Akbar
// La ilaha illallah Muhammadur Rasulullah

import React, { useRef, useState } from 'react';
import { View, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

const FullPageWebView = () => {
    const webViewRef = useRef(null);
    const [canGoBack, setCanGoBack] = useState(false);

    const handleBackPress = () => {
        if (canGoBack && webViewRef.current) {
            webViewRef.current.goBack();
            return true; // Prevent default back action
        }
        return false; // Allow default back action
    };

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, [canGoBack]);

    return (
        <View style={{ flex: 1 }}>
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://firotan.vercel.app' }}
                style={{ flex: 1 }}
                onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
        </View>
    );
};

export default FullPageWebView;