import SessionService from '_services/common/session'

export default (to, from, next) => {
    if (SessionService.getCookie('admin_tokens')) {
        return next()
    }

    if (to.path === '/login') {
        return next()
    }

    return next('/login')
}
