// src/api/api.ts
import axios from 'axios';

export const GetExtratoLancamentos = async () => {
    try {
        const response = await axios.get('/api/data'); // Substitua pela URL do seu backend
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};