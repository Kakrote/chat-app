import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Loading from './Loading';


interface buttonProps {
    title: String
    onpress: () => void
    className?: string
    textClassName?: string
    style?: ViewStyle
    textStyle?: TextStyle
    loading: boolean
}

const Button = ({ title, onpress, className, textClassName, style, textStyle, loading = false }: buttonProps) => {
    const shadowStyle = {
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 8,
        elevation: 4,
    }


    return (
        <Pressable
            onPress={onpress}
            className={`${className || ""}`}
            style={[shadowStyle, style]}
        >
            {loading ? <Loading /> :
                <Text className={`${textClassName || ""}`} style={textStyle}>{title}</Text>
            }
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default Button;
