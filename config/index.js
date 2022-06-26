const dev = process.env.NODE_END !== 'production'

export const server = dev ? 'http://localhost:3000' : window.location.origin