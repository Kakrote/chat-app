import { Link } from 'expo-router';
import { Text, View } from 'react-native';


export default function ModalScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-white dark:bg-gray-900' >
      <Text className='text-4xl font-bold text-green-500 mb-4'>This is a modal</Text>
      <Link href="/" dismissTo >
        <Text className='text-blue-500 underline text-lg'>Go to home screen</Text>
      </Link>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
// });
