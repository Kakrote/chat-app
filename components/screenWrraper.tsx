import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props={
    children:ReactNode
    bg?:string
    gradient?: Pick<LinearGradientProps, 'colors' | 'start' | 'end' | 'locations'>
}

const ScreenWrraper = ({children,bg,gradient}:Props) => {

    const {top}=useSafeAreaInsets();
    const paddingTop=top>0?top+5:30;
    
    if (gradient) {
        return (
            <LinearGradient
                colors={gradient.colors}
                start={gradient.start}
                end={gradient.end}
                locations={gradient.locations}
                className="flex-1"
                style={{ paddingTop }}
            >
                {children}
            </LinearGradient>
        );
    }
    
    return (
        <View 
            className={`flex-1`}
            style={{ paddingTop,
                backgroundColor:bg
             }}
        >
            {
                children
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default ScreenWrraper;
