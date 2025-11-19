import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Modal, StyleSheet } from 'react-native';
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, error] = useFonts({
        'Pacifico': require('../assets/fonts/Pacifico/Pacifico-Regular.ttf'),
        'Pacifico-Regular': require('../assets/fonts/Pacifico/Pacifico-Regular.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
       <Stack 
       screenOptions={{
        headerShown:false,
        animation:"slide_from_right",
        animationDuration:300,
        // presentation:"modal"
       }}
       >

       </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
