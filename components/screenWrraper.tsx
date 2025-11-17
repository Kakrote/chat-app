import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props={
    children:ReactNode
    bg?:string
}

const ScreenWrraper = ({children,bg}:Props) => {

    const {top}=useSafeAreaInsets();
    const paddingTop=top>0?top+5:30;
    
    return (
        <View 
            className={`flex-1 ${bg ? `bg-${bg}` : 'bg-white'}`}
            style={{ paddingTop }}
        >
            {
                children
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default ScreenWrraper;
