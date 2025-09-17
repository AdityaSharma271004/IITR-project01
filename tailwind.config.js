/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lab-primary': '#34495e',
        'lab-accent': '#1abc9c',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          from: { left: "0%" },
          to: { left: "100%" }
        },
        caret: {
          from: { left: "0%" },
          to: { left: "100%" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        }
      },
      animation: {
        // Reveal text by sliding the cover (before)
        typewriter: "typewriter 4s steps(60) 1 forwards",
        // Move the caret with the reveal + keep blinking after
        caret: "caret 4s steps(60) 1 forwards, blink 1s step-end infinite"
      }
    }
  },
  plugins: []
};



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//     "./src/app/**/*.{js,ts,jsx,tsx}", // Optional: if using App Router
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         'lab-primary': '#34495e',
//         'lab-accent': '#1abc9c',
//       },
//       animation: {
//         'float': 'float 4s ease-in-out infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-8px)' },
//         }
//       }
//     }
//   },
//   plugins: [],
// }

// tailwind.config.js

