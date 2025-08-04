// Bismillahir-Rahmanir-Rahim
// Elhamdu lillahi Rabbil 'alamin
// Assalatu wassalamu 'ala Rasulillah
// Wa 'ala alihi wa sahbihi ajma'in
// La hawla wa la quwwata illa billah
// Allahumma salli 'ala Muhammad wa 'ala ali Muhammad
// SuphanAllah Elhamdulillah Allahu Akbar
// La ilaha illallah Muhammadur Rasulullah

export const handleBackNavigation = (webViewRef) => {
    if (webViewRef.current) {
        webViewRef.current.goBack();
    }
};

export const canGoBack = (webViewRef) => {
    return webViewRef.current && webViewRef.current.canGoBack();
};