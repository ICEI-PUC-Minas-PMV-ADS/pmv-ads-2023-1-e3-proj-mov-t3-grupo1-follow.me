import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { api } from '../lib/axios';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Register() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { navigate } = useNavigation();

  async function handleRegister() {
    try {
      setLoading(true);

      // Validar campos antes de enviar o registro
      if (!email || !password || !confirmPassword || !birthdate) {
        Alert.alert('Oops...', 'Preencha todos os campos antes de prosseguir.');
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert('Oops...', 'As senhas não coincidem. Por favor, verifique.');
        return;
      }

      if (!termsAccepted) {
        Alert.alert('Oops...', 'Você precisa aceitar os termos de uso para prosseguir.');
        return;
      }

      // -- Fazer a requisição de registro à API aqui
      const response = await api.post('/register', { email, password });
      const { token } = response.data
      if(!(token === undefined)) {
        // -- se tiver retornado um token, salva no async e navega para a home
        await AsyncStorage.setItem('token', token);
        navigate('home');
      } 
    } catch (error) {
      Alert.alert('Oops...', 'Não foi possível fazer o registro. Por favor, tente novamente mais tarde.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="mt-16">
        <Text className="text-zinc-400 text-2xl font-bold mb-4">Criar uma nova conta</Text>
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
          placeholder="Data de Nascimento"
          value={birthdate}
          onChangeText={setBirthdate}
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
        <TextInput
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        
        <CheckBox
  checked={termsAccepted}
  onPress={() => {
    setTermsAccepted(!termsAccepted);
  }}
/>
          <Text className="text-zinc-400 text-sm font-bold">Aceitar os termos de uso</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#61C0FF',
            borderRadius: 8,
            padding: 12,
            alignItems: 'center',
          }}
          onPress={handleRegister}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}