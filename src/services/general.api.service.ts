
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAll = async <T, >(endpoint: string, params: Record<string, any> = {}): Promise<T> => {
    const query = new URLSearchParams(params).toString();
    const url = `${baseUrl}${endpoint}${query ? `?${query}` : ''}`;
    return await fetch(url).then(res => res.json());
};


