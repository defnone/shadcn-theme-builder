import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"
import typography from '@tailwindcss/typography';

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^gap-/,
    },
    {
      pattern: /^rounded-/,
    },
    {
      pattern: /^p-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^tracking-/,
    },
    {
      pattern: /^leading-/,
    },
    {
      pattern: /^bg-slate-/,
    },
    {
      pattern: /^bg-gray-/,
    },
    {
      pattern: /^bg-zinc-/,
    },
    {
      pattern: /^bg-neutral-/,
    },
    {
      pattern: /^bg-stone-/,
    },
    {
      pattern: /^bg-red-/,
    },
    {
      pattern: /^bg-orange-/,
    },
    {
      pattern: /^bg-amber-/,
    },
    {
      pattern: /^bg-yellow-/,
    },
    {
      pattern: /^bg-lime-/,
    },
    {
      pattern: /^bg-green-/,
    },
    {
      pattern: /^bg-emerald-/,
    },
    {
      pattern: /^bg-teal-/,
    },
    {
      pattern: /^bg-cyan-/,
    },
    {
      pattern: /^bg-sky-/,
    },
    {
      pattern: /^bg-blue-/,
    },
    {
      pattern: /^bg-indigo-/,
    },
    {
      pattern: /^bg-violet-/,
    },
    {
      pattern: /^bg-purple-/,
    },
    {
      pattern: /^bg-fuchsia-/,
    },
    {
      pattern: /^bg-pink-/,
    },
    {
      pattern: /^bg-rose-/,
    },
    {
      pattern: /^hover:bg-/,
    },
    {
      pattern: /^text-.*-\d+$/,
    },
    {
      pattern: /^focus-visible:outline-.*-\d+$/,
    },
    {
      pattern: /^hover:bg-.*-\d+$/,
    },
  ],
  theme: {
  	extend: {
  		fontSize: {
  			xs: ['0.75rem', { lineHeight: '1rem' }],
  			sm: ['0.875rem', { lineHeight: '1.25rem' }],
  			base: ['1rem', { lineHeight: '1.5rem' }],
  			lg: ['1.125rem', { lineHeight: '1.75rem' }],
  			xl: ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1' }],
  			'6xl': ['3.75rem', { lineHeight: '1' }],
  			'7xl': ['4.5rem', { lineHeight: '1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }],
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: '65ch',
  					color: 'hsl(var(--foreground))',
  					'[class~="lead"]': {
  						color: 'hsl(var(--foreground))',
  					},
  					a: {
  						color: 'hsl(var(--primary))',
  						'&:hover': {
  							color: 'hsl(var(--primary))',
  						},
  					},
  					strong: {
  						color: 'hsl(var(--foreground))',
  					},
  					'ol > li::marker': {
  						color: 'hsl(var(--foreground))',
  					},
  					'ul > li::marker': {
  						color: 'hsl(var(--foreground))',
  					},
  					hr: {
  						borderColor: 'hsl(var(--border))',
  					},
  					blockquote: {
  						color: 'hsl(var(--foreground))',
  						borderLeftColor: 'hsl(var(--border))',
  					},
  					h1: {
  						color: 'hsl(var(--foreground))',
  					},
  					h2: {
  						color: 'hsl(var(--foreground))',
  					},
  					h3: {
  						color: 'hsl(var(--foreground))',
  					},
  					h4: {
  						color: 'hsl(var(--foreground))',
  					},
  					'figure figcaption': {
  						color: 'hsl(var(--muted-foreground))',
  					},
  					code: {
  						color: 'hsl(var(--foreground))',
  					},
  					'a code': {
  						color: 'hsl(var(--foreground))',
  					},
  					pre: {
  						color: 'hsl(var(--foreground))',
  						backgroundColor: 'hsl(var(--muted))',
  					},
  					thead: {
  						color: 'hsl(var(--foreground))',
  						borderBottomColor: 'hsl(var(--border))',
  					},
  					'tbody tr': {
  						borderBottomColor: 'hsl(var(--border))',
  					},
  				},
  			},
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			sidebar: {
  				background: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				primaryForeground: 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				accentForeground: 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))',
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [animate, typography],
} satisfies Config;
