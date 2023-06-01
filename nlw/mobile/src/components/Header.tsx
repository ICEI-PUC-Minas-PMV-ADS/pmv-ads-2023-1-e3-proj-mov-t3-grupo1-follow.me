import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

import Logo from '../assets/logo.svg';

export function Header() {
  const { navigate } = useNavigation<Nav>()

  type Nav = {
    navigate: (value: string) => void;
  }

const route = useRoute();
if (route.name === 'login') {
    return (
      <View className="w-full flex-row items-center justify-between">
        <Logo />
      </View>
    );
  }


if (route.name === 'register') {
    return (
      <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-blue-500 rounded-lg items-center"
        onPress={() => navigate('login')}
      >
<MaterialIcons name="login" size={24} color="white" />
        <Text className="text-white ml-3 font-semibold text-base">
          Login
        </Text>
      </TouchableOpacity>
    </View>
    );
  }


   
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-blue-500 rounded-lg items-center"
        onPress={() => navigate('newHabit')}
      >
        <Feather
          name="plus"
          color={colors.blue[500]}
          size={20}
        />
        <Text className="text-white ml-3 font-semibold text-base">
          Novo
        </Text>
      </TouchableOpacity>
    </View>
  );
}