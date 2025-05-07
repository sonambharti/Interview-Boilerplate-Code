module.exports = {
    plugins: [
      require('@tailwindcss/postcss')({
        config: './tailwind.config.js', // optional, if not in root or custom path
      }),
      require('autoprefixer'),
    ],
  };
  