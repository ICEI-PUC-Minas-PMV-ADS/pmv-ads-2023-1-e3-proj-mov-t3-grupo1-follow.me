import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const api = axios.create({
//   baseURL: 'http://localhost:3333'
// });

export const api = axios.create({
  baseURL: 'http://10.0.0.134:3333'
});

// -- Configurar o cabeçalho padrão
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


