import ScreenWrraper from '@/components/screenWrraper';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';

const Welcome = () => {
    return (

        <ScreenWrraper bg="blue-50">
            <StatusBar barStyle={"light-content"} backgroundColor={"#6bc533"} hidden />
           <View className="flex-1 justify-center items-center px-4">
               <Text className="text-3xl font-bold text-blue-600 mb-4">Welcome!</Text>
               <Text className="text-lg text-gray-600 text-center">
                   This is the welcome screen with Tailwind CSS styling.
               </Text>
           </View>
        </ScreenWrraper>
    );
}

const styles = StyleSheet.create({})

export default Welcome;
