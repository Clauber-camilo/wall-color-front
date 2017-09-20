import config from '_config'

export const or = (value, _default) => {
    try {
        return !value ? _default : value
    } catch (e) {
        return _default
    }
}

// export const image = (image, defaultImg = '/images/no-image.png') => {
//     if (!image) {
//         return '/images/no-image.png';
//     } else {
//         return '/url'
//     }
// }

// eslint-disable-next-line no-confusing-arrow
export const image = (path, _default = 'logo_default.png') => {
    if (path) {
        // check if the string is a base64 image, if so, we don't need
        // to append the provider prefix to it
        // (this fix a issue when we upload an image on a binded variable that is using this filter)
        return (path.startsWith('data:image/'))
            ? path
            : `${config.IMG_PROVIDER}/${path}`
    }

    return require(`_img/${_default}`)
}

export const date = _date => {
    const match = /(^\d{4}-\d{2}-\d{2})/.exec(_date)
        , group = (match) ? match[0] : null
        , data = (group) ? group.split('-') : null

    if (!data) {
        return null
    }

    return `${data[2]}/${data[1]}/${data[0]}`
}