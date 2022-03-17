export const state = () => ({
    articles: null
});

export const mutations = {
    SET_ARTICLES (state, articles) {
      state.articles = articles;
    }
};

export const getters = {
    getArticles (state) {
      return state.articles;
    }
}

export const actions = {
    async getArticles ({ commit }) {
        const data = await this.$axios.$get('/api/articles?populate=*', { progress: false });
        commit('SET_ARTICLES', data);
    },
    async getFilteredArticles ({ commit }) {
        const { data } = await this.$axios.$get('/api/articles', {
            params: {
              populate: '*',
              sort: ['id:desc'],
              'pagination[start]': 0,
              'pagination[limit]': 3,
            },
        });

        return data;
    },
    
    async getOneArticle ({ commit }, payload) {
        const data = await this.$axios.$get(`/api/articles/${payload}?populate=*`, { progress: false });

        return data;
    }
}