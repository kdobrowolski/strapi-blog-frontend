export const state = () => ({
    aboutMe: null,
    headerInfo: null
});

export const mutations = {
    SET_ABOUT_ME (state, content) {
      state.aboutMe = content;
    },
    SET_HEADER_INFO (state, headerInfo) {
        state.headerInfo = headerInfo;
    }
};

export const getters = {
    getAboutMe (state) {
      return state.aboutMe;
    },
    getHeaderInfo (state) {
        return state.headerInfo;
    }
}

export const actions = {
    async nuxtServerInit({ dispatch, commit }) {
        const data = await dispatch('getHeaderInfo');
        
        commit('SET_HEADER_INFO', data);
    },
    async getAboutMe ({ commit }) {
        const data = await this.$axios.$get('/api/aboutme', { progress: false });
        commit('SET_ABOUT_ME', data);
    },

    async getContactInfo () {
        const phoneData = await this.$axios.$get('/api/phone', { progress: false });
        const emailData = await this.$axios.$get('/api/email', { progress: false });
        const cityData = await this.$axios.$get('/api/city', { progress: false });

        const contactInfo = {
            phone: phoneData.data.attributes.phone,
            email: emailData.data.email,
            city: cityData.data.attributes.city,
        }

        return contactInfo;
    },

    async getHeaderInfo () {
        const headerTitle = await this.$axios.$get('/api/header-title', { progress: false });
        const headerDescription = await this.$axios.$get('/api/header-description', { progress: false });

        const headerInfo = {
            headerTitle: headerTitle.data,
            headerDescription: headerDescription.data
        }

        return headerInfo;
    },

    async sendEmail ({ commit }, payload) {
        await this.$axios.$post(`/api/email`, payload, { progress: false });
    }
}