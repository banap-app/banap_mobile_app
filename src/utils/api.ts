
import { BASE_URL } from '@env';

type apiProps = {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  route: string;
  headers?: Record<string, string>;
  data?: unknown;
  params?: Record<string, string>;
};

const api = async ({ method, route, data, headers, params }: apiProps) => {
  try {
    // Montar a URL completa
    const queryString = params
      ? '?' + new URLSearchParams(params).toString()
      : '';

    const url = `${BASE_URL}${route}${queryString}`;

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {}),
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    if (method === 'get' || method === 'delete') {
      delete options.body;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
};
