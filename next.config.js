/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["tree.valleyease.me"],
  },
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
  },
};
