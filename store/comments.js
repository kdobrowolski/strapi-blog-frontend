export const actions = { 
    async createComment ({ dispatch }, payload) {
        await this.$axios.$post(`/api/comments`, payload, { progress: false });
        
        return await dispatch('articles/getOneArticle', payload.data.article, { root: true });
    }
}