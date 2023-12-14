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
        ],
    }
}

module.exports = nextConfig
