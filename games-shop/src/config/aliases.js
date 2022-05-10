const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@enums': `${prefix}/enums`,
    '@icons': `${prefix}/components/atoms/Icons`,
    '@styles': `${prefix}/styles`,
    '@types': `${prefix}/types`,
    '@pages': `${prefix}/components/pages`,
})

module.exports = aliases
