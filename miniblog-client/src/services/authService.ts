// REST ACTIONS FOR LOGIN/REGISTER
const API_BASE_URL = import.meta.env.VITE_API_URL

interface Credentials {
    username: string,
    password: string
}

// ===== OTHER OPTION =====
// export const AuthService = {
//     async register(credentials: Credentials) {
//         const response = await fetch(`${API_BASE_URL}/auth/register`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username: credentials.username, password: credentials.password })
//         })

//         const data = await response.json();

//         return data
//     },

//     async login(credentials: Credentials) {
//         const response = await fetch(`${API_BASE_URL}/auth/login`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username: credentials.username, password: credentials.password })
//         })

//         const data = await response.json();
//         if (!response.ok) throw new Error(data.message || 'Login failed');
//         return data
//     }
// }

export async function registerUser(credentials: Credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.username, password: credentials.password })
    })

    const data = await response.json();

    return data
}

export async function loginUser(credentials: Credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.username, password: credentials.password })
    })

    const data = await response.json();
    if (!response.ok) { 
        throw new Error(data.message || 'Login failed')
    };

    alert("Login Successful");

    return data
}