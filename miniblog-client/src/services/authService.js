// REST ACTIONS FOR LOGIN/REGISTER
const API_BASE_URL = import.meta.env.VITE_API_URL

export const AuthService = {
    async register(credentials) {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: credentials.username, password: credentials.password})
        })

        const data = await response.json();

        return data
    },

    async login(credentials) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: credentials.username, password: credentials.password})
        })
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        return data
    }
}
