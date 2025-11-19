import Icon from '@/assets/icons';
import User from '@/assets/icons/User';
import Button from '@/components/button';
import Input from '@/components/Input';
import ScreenWrraper from '@/components/screenWrraper';
import { hp, wp } from '@/hooks/dimentions';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Keyboard, Pressable, StatusBar, TouchableWithoutFeedback, View } from 'react-native';

const SetCustomName = () => {
    const [text, setText] = useState("");
    const onPress = (data: any) => {
        console.log(data)
        setText("")
    }
    const router = useRouter()
    return (
        <ScreenWrraper>
            <StatusBar hidden />
            <Pressable onPress={() => router.back()}  style={{
                width:wp(13),
                marginLeft:wp(2)
            }} >
                <Icon name='leftArrow' size={50} />
            </Pressable >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 items-center '>
                    <Image
                        source={require("../assets/images/logo/logoImag.png")}
                        resizeMode='cover'
                    />
                    <Input
                        text={text}
                        setText={setText}
                        icon={<User  strokeWidth={1.6} size={34}/>}
                    />

                    <Button
                        title={"Get Start"}
                        onpress={() => onPress(text)}
                        style={{
                            width: wp(40), // 40% of screen width
                            height: hp(6.3), // 7% of screen height
                            position: 'absolute',
                            bottom: hp(20), // 8% from bottom
                        }}
                        className='rounded-xl  bg-[#6bc533]'
                        textClassName='font-pacifico text-white  text-center'
                        textStyle={{ fontSize: hp(3) }}
                    />

                </View>
            </TouchableWithoutFeedback>
        </ScreenWrraper>
    );
}


export default SetCustomName;
