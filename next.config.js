/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/api/stripe/create/checkout/session',
            headers: [
              {
                key: 'x-custom-header',
                value: 'my custom header value',
              },
              {
                key: 'x-another-custom-header',
                value: 'my other custom header value',
              },
            ],
          },
        ];
      },
      async redirects() {
        return [
          process.env.MAINTENANCE_MODE === "1"
          ? { source: "/", destination: "/maintenance", permanent: false }
          : null,
        ].filter(Boolean);
      }
}

module.exports = nextConfig
