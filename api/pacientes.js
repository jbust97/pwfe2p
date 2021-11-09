import axios from 'axios';
import config from '../config';

export const get = async (id) => {
  const result = await axios.get(
    config.apiURL + 'stock-nutrinatalia/persona/${id}'
  );
  return result.data;
};

export const post = async (data) => {
  const result = await axios.post(
    config.apiURL + 'stock-nutrinatalia/persona/',
    data,
    { Headers: { usuario: 'gustavo' } }
  );
  return result.data;
};

export const getAll = async (params) => {
  let url = config.apiURL + 'stock-nutrinatalia/persona';

  const result = await axios.get(url, {
    Headers: { usuario: 'gustavo' },
    params,
  });
  return result.data.lista;
};
