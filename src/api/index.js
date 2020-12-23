import axios from 'axios'

var api = {
    login(params) {
        return axios.get('/api/meituan/login', params)
    },
    register(params) {
        return axios.get('/api/meituan/register', params)
    }
}

export default api