// REST ACTIONS FOR POST
const API_BASE_URL = import.meta.env.VITE_API_URL

export const PostService = {
    async getPost() {
        const token = localStorage.getItem('token')

        const response = await fetch(`${API_BASE_URL}/posts`, {
            headers: { 'Authorization': `${token}` }
        })

        const postData = await response.json()
        
        return postData
    }
}