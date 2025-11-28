import { BorderRadius, Colors } from '@/constants/theme';
import { hp, wp } from '@/hooks/dimentions';
import React, { useRef } from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';

interface inputProps {
    icon?: React.ReactNode
    textStyle?: string
    text: any
    setText: (text: any) => void
}

const Input = ({ icon, textStyle, text, setText }: inputProps) => {

    const tranlateY = useRef(new Animated.Value(0)).current;
    const moveUp = () => {
        Animated.timing(tranlateY, {
            toValue: -20,
            duration: 200,
            useNativeDriver: true
        }).start()
    }
    const moveDown = () => {
        Animated.timing(tranlateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start()
    }

    return (
        <Animated.View className={`  flex flex-row gap-3 items-center `} style={[styles.container, { transform: [{ translateY: tranlateY }] }]}>
            {
                icon && icon
            }
            <TextInput
                placeholder='Enter your custom name ...'
                placeholderTextColor={Colors.dark.primary}
                value={text}
                onChangeText={setText}
                className={`p-3`}
                style={styles.input}
                onFocus={moveUp}
                onBlur={moveDown}
            />

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: wp(1),
        borderColor: Colors.dark.primary,
        position: "relative",
        top: hp(10),
        width: wp(75),
        borderWidth: 2,
        borderRadius: BorderRadius['2xl'],
        paddingHorizontal:wp(5)
    },
    input: {

        padding: wp(2),
        width: wp(50),
        color:"white",
        fontSize:hp(1.6)

    }
})

export default Input;
