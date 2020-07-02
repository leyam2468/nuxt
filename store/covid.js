import covidAll from '@/services/covidAll.js'

export const state = () => ({
    covid: []
})
export const mutations = {
    SET_COVED(state, covid) {
        state.covid = covid
    }
}

export const actions = {
    getCoved({ commit }) {
        return covidAll.getCoved().then((response) => {
            commit('SET_COVED', response)
            // eslint-disable-next-line no-console
            console.log(response)
        })
    }
}
