// tailwind.config.js
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        nexuslight: {
          primary: '#0055A4',
          secondary: '#003366',
          accent: '#0077CC',
          neutral: '#1e293b',
          'base-100': '#f4f8fc',
          'base-content': '#1e293b',
        },
      },
      {
        nexusdark: {
          primary: '#0077CC',
          secondary: '#003366',
          accent: '#38bdf8',
          neutral: '#0f172a',
          'base-100': '#0b1220',
          'base-content': '#e2e8f0',
        },
      },
    ],
  },
}
