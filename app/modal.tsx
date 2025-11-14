import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Text } from 'react-native';

export default function ModalScreen() {
  return (
    <ThemedView className='flex-1 justify-center items-center' >
      <ThemedText type="title" className='text-green-500 mb-4 text-center'>This is a modal</ThemedText>
      <Text className='text-gray-600 mb-6 text-center px-8'>
        This modal demonstrates both native components and themed components with NativeWind support!
      </Text>
      <Link href="/" dismissTo >
        <ThemedText type="link" className='text-blue-500 underline text-lg'>Go to home screen</ThemedText>
      </Link>
    </ThemedView>
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
