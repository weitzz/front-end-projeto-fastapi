/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", 'http://localhost:8000/api/medicamentos/images/']
    }
}

module.exports = nextConfig
