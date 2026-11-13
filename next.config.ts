import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.standardtestequipment.net",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/didtfhfme/**",
      },
    ],
  },
   turbopack: {
     rules: {
       "*.css": {
         loaders: ["@tailwindcss/turbopack"],
         as: "*.css",
       },
     },
   },
   async redirects() {
     return [
       { source: "/products/ip4x-test-probe-d-as-per-iec-60259-and-61032", destination: "/products/ip4x-test-probe-d-as-per-iec-60529-and-61032", permanent: true },
       { source: "/products/ip-1x-test-probe-as-per-a-as-iec-60529-and-61032", destination: "/products/ip1x-test-probe-a-50-mm-sphere-as-per-iec-60529-and-61032", permanent: true },
       { source: "/products/ss-ip-x7-x8-immersion-water-tank-as-per-60529", destination: "/products/stainless-steel-ipx7-ipx8-immersion-water-tank-as-per-iec-60529", permanent: true },
       { source: "/products/water-jet-nozzle-tip-for-ipx5-dia-12-5-mm", destination: "/products/water-jet-nozzle-tip-for-ipx6-dia-12-5-mm", permanent: true },
       { source: "/products/wedge-probe-fig-ee-1-as-per-iec-60950", destination: "/products/wedge-probe-fig-ee-1-as-per-iec-62368-1", permanent: true },
       { source: "/products/gauges-for-testing-insertion-of-caps-in-lampholders-b22-p38", destination: "/products/b22-lampholder-insertion-gauge-iec-60061-3", permanent: true },
       { source: "/products/not-go-gauges-for-caps-on-finished-lamps-b22-p41", destination: "/products/b22-not-go-gauge-finished-lamps-iec-60061-3", permanent: true },
       { source: "/products/ip-testing", destination: "/category/ip-test-apparatus", permanent: true },
     ];
   },
 };

export default nextConfig;
