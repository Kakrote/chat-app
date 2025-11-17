import ScreenWrraper from '@/components/screenWrraper';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    const router=useRouter()
    return (
        <ScreenWrraper>
            <View className="flex-1 justify-center items-center px-4">
                <Text className="text-2xl font-bold mb-8 text-center">Welcome to Chat App</Text>
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
