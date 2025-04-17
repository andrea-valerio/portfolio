/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          shade1: '#EDA3AF',
          shade2: '#E25771',
          DEFAULT: '#D60A33',
          shade3: '#97122F',
          shade4: '#591B2D',
        },
        secondary: {
          shade1: '#FBD8BD',
          shade2: '#FDC28E',
          DEFAULT: '#FFAB5E',
          shade3: '#B27D4C',
          shade4: '#67503B',
        },
        accent: {
          shade1: '#A7CAC8',
          shade2: '#55A5A4',
          DEFAULT: '#008080',
          shade3: '#0A6062',
          shade4: '#134246',
        },
        grey: {
          1: '#E3E0DD',
          2: '#C9C6C4',
          3: '#AEA9A7',
          4: '#94918E',
          5: '#797673',
        },
        white: '#F9EEEB',
        black: '#1C242A',
      },
      fontFamily: {
        title: ['Raleway', 'sans-serif'],
        body: ['Crimson Pro', 'serif'],
        ui: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'large-title': ['3.815rem', { lineHeight: 'normal'}], // 61.04px
        'title-1': ['3.052rem', { lineHeight: 'normal'}], // 48.83px
        'title-2': ['2.441rem', { lineHeight: 'normal'}], // 39.06px
        'subtitle-1': ['1.953rem', { lineHeight: 'normal'}], // 31.25px
        'subtitle-2': ['1.563rem', { lineHeight: 'normal'}], // 25.00px
        'body-1': ['1.25rem', { lineHeight: 'normal'}], // 20.00px
        'ui': ['0.875rem', {lineHeight: 'normal'}], // 14.00px
        'body-2': ['0.8rem', { lineHeight: 'normal'}], // 12.80px
        'caption': ['0.64rem', { lineHeight: 'normal'}], // 10.24px
      },
      opacity: {
        '66': '0.66',
      }
    },
  },
  plugins: [],
}

