export const TOKEN_KEY = 'marketing';

export const isAuthenticated = () => {
    return localStorage.getItem(TOKEN_KEY) !== null;
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY,token);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}
