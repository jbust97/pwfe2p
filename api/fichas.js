import axios from 'axios';
import config from '../config';
export const get = async () => {
  const response = await axios.get(
    config.apiURL + 'stock-nutrinatalia/fichaClinica',
    { headers: { usuario: 'gustavo' } }
  );
  return response.data.lista;
};