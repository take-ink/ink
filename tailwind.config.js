/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    supports: {
      firefox: "-moz-appearance:none",
    },
    extend: {
      transitionDuration: {
        400: "400ms",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-accent": "var(--color-primary-accent)",
        background: "var(--color-background)",
        prose: "var(--color-prose)",
        "prose-accent": "var(--color-prose-accent)",
        "prose-weak": "var(--color-prose-weak)",
        "prose-pale": "var(--color-prose-pale)",
        "aux-danger": "var(--color-aux-danger)",
        "aux-danger-accent": "var(--color-aux-danger-accent)",
        "aux-line": "var(--color-aux-line)",
        "aux-line-weak": "var(--color-aux-line-weak)",
        "aux-tip": "var(--color-aux-tip)",
      },
      spacing: {
        18: "4.5rem",
        "safe-area-b": "calc(env(safe-area-inset-bottom, 28px) - 8px)",
      },
    },
  },
  plugins: [],
};
