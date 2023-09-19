/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "http://localhost:8000/api/medicamentos", "http://localhost:8000/api/medicamentos/images/**"],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost:8000/api/medicamentos',
                pathname: '/images/**'
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
                pathname: '/j7Q90nG.png',
            }
        ],
    }
}

module.exports = nextConfig
