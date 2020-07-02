import axios from 'axios'

const apiClient = axios.create({
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '22e27899c7msh56dc7402a6a7f4ep1dac99jsn0c45cb472193'
    }
})

export default {
    getCoved() {
        return apiClient.get('/statistics')
    }
}
