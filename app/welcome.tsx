import Button from '@/components/button';
import ScreenWrraper from '@/components/screenWrraper';
import { hp, wp } from '@/hooks/dimentions';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';


const Welcome = () => {

    const onPress = () => {
        console.log("button bressed")
    }
    return (

        <ScreenWrraper bg="#6bc" gradient={{
            colors: ['#292929', '#4ade80'],
            start: [0, 0],
            end: [3, 1]
        }}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#6bc533"} hidden />
            <View className="flex-1 justify-center items-center px-4">
                <Image
                    source={require('../assets/images/logo/logoImag.png')}
                    resizeMode='cover'
                    style={{
                        position: 'absolute',
                        top: hp(8), // 8% from top
                        height: hp(25), // 25% of screen height
                        width: wp(50), // 50% of screen width
                    }}
                />
                <Text
                    className='text-white font-pacifico text-center p-4'
                    style={{ fontSize: hp(6) }} // Responsive font size
                >
                    Spy Chat
                </Text>
                <View style={{ paddingHorizontal: wp(5), marginTop: hp(3) }}>
                    <Text
                        className='text-white p-4'
                        style={{
                            fontSize: hp(2.5), // Responsive font size
                            lineHeight: hp(3.5) // Responsive line height
                        }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora obcaecati ab praesentium blanditiis.
                    </Text>
                </View>

                <Button
                    title={"NEXT"}
                    className={`rounded-xl bg-[#6bc533]`}
                    style={{
                        width: wp(40), // 40% of screen width
                        height: hp(6.3), // 7% of screen height
                        position: 'absolute',
                        bottom: hp(20), // 8% from bottom
                    }}
                    onpress={onPress}
                    textClassName='text-white font-pacifico text-center'
                    textStyle={{ fontSize: hp(3) }} // Responsive text size
                />

            </View>
        </ScreenWrraper>
    );
}


export default Welcome;
