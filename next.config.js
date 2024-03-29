/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com"],
  },
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
  },
};
