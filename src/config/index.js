const env = (process.env.NODE_ENV === 'development')
    ? 'local'
    : (['production', 'staging'].includes(process.env.NODE_ENV))
        ? process.env.NODE_ENV
        : 'local'

export default require(`./config.${env}`).default
