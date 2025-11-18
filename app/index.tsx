import ScreenWrraper from '@/components/screenWrraper';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const router=useRouter()
    return (
        <ScreenWrraper>
            <StatusBar barStyle={"light-content"} backgroundColor={"#6bc533"} hidden />
            <View className="flex-1 justify-center items-center px-4">
                <Text className="text-4xl font-pacifico mb-8 text-center ">Welcome to Chat App</Text>
                <Text className="text-lg font-normal mb-6 text-center text-text-secondary">Connect with friends and family</Text>
                <Button
                title='Go to Welcome'
                onPress={()=>router.push("/welcome")}
                />
            </View>
        </ScreenWrraper>
    );
}

const styles = StyleSheet.create({})

export default Index;
