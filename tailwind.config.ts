import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        botanical: {
          cream: "hsl(var(--botanical-cream))",
          sage: "hsl(var(--botanical-sage))",
          "sage-light": "hsl(var(--botanical-sage-light))",
          "sage-dark": "hsl(var(--botanical-sage-dark))",
          gold: "hsl(var(--botanical-gold))",
          "gold-light": "hsl(var(--botanical-gold-light))",
          beige: "hsl(var(--botanical-beige))",
          "beige-dark": "hsl(var(--botanical-beige-dark))",
          charcoal: "hsl(var(--botanical-charcoal))",
          pearl: "hsl(var(--botanical-pearl))",
          "rose-gold": "hsl(var(--botanical-rose-gold))",
          champagne: "hsl(var(--botanical-champagne))",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        luxury: ["Cormorant Garamond", "Playfair Display", "serif"],
        modern: ["Nunito Sans", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.05em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.05em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.075em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.075em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.075em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.075em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.075em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.075em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-botanical": "var(--gradient-botanical)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-luxury": "linear-gradient(135deg, hsl(38, 35%, 96%) 0%, hsl(38, 25%, 92%) 50%, hsl(38, 35%, 88%) 100%)",
        "gradient-shimmer": "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        elegant: "var(--shadow-elegant)",
        botanical: "var(--shadow-botanical)",
        luxury: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        "luxury-hover": "0 20px 60px -10px rgba(0, 0, 0, 0.15)",
        glow: "0 0 20px rgba(203, 178, 106, 0.3)",
        "inner-luxury": "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      },
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
        elegant: "var(--transition-elegant)",
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
        "luxury-out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "luxury-in-out": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backdropBlur: {
        'luxury': '20px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '2rem',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-100% 0",
          },
          "100%": {
            backgroundPosition: "100% 0",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        "pulse-luxury": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-luxury": "pulse-luxury 2s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'hsl(var(--foreground))',
            lineHeight: '1.7',
            letterSpacing: '0.025em',
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
