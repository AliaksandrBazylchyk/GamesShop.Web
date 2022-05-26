const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@enums': `${prefix}/enums`,
    '@icons': `${prefix}/components/atoms/Icons`,
    '@styles': `${prefix}/styles`,
    '@projectTypes': `${prefix}/types`,
    '@pages': `${prefix}/components/pages`,
    '@services': `${prefix}/services`,
})

module.exports = aliases
