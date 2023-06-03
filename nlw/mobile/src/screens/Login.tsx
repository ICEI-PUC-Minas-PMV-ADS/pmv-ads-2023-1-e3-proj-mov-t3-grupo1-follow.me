import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { api } from '../lib/axios';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Nav = {
  navigate: (value: string) => void;
}


export function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation<Nav>()
  

  async function handleLogin() {
    try {
      setLoading(true);
      const response = await api.post('login', { email, password } )
      //Alert.alert(response.data);
      const { token } = response.data
      
      if(token) {
        await AsyncStorage.setItem('token', token);
        navigate('home');
      } else {
        setStatusMessage("Email ou senha incorretos.")
      }
      // await AsyncStorage.setItem('token', token);
      // navigate('home');
      
    } catch (error) {
      Alert.alert('Oops...', 'Não foi possível fazer o login. Verifique suas credenciais e tente novamente.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister() {
    navigate('register');
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="mt-16">
        <Text className="text-zinc-400 text-2xl font-bold mb-4">Bem vindo de volta ;)</Text>
        <TextInput
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#61C0FF',
            borderRadius: 8,
            padding: 12,
            alignItems: 'center',
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Entrar</Text>
        </TouchableOpacity>
        <TextInput className="text-red-300">{statusMessage}</TextInput>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={{ color: '#fff', marginTop: 8 }}>Ainda não tem uma conta? Registre-se aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
