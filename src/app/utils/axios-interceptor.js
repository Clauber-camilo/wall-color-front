import axios from 'axios'
import store from '_store'

const axiosInterceptor = () => {
    const stopLoaderWithError = error => {
        if (store.state.modal.loader) {
            store.dispatch('toggleModal', 'loader')
        }

        return Promise.reject(error)
    }

    // Add a request interceptor
    axios.interceptors.request.use(config => {
        if (!store.state.modal.loader) {
            store.dispatch('toggleModal', 'loader')
        }

        return config
    }, stopLoaderWithError)

    // Add a response interceptor
    axios.interceptors.response.use(response => {
        if (store.state.modal.loader) {
            store.dispatch('toggleModal', 'loader')
        }

        return response
    }, stopLoaderWithError)
}

export default axiosInterceptor