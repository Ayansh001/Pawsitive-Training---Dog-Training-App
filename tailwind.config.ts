
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                dogblue: '#33C3F0',
                doggreen: '#6ED47C',
                dogpeach: '#FDE1D3',
                dogyellow: '#FEF7CD',
                dogpink: '#FFDEE2',
                dogpurple: '#BEB0F4',
                dogbrown: '#A67C52',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'fredoka': ['Fredoka', 'sans-serif'],
            },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
                        opacity: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
					},
					to: {
						height: '0',
                        opacity: '0'
					}
				},
                'bounce-slight': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-15px)'
                    }
                },
                'wag': {
                    '0%, 100%': {
                        transform: 'rotate(-5deg)'
                    },
                    '50%': {
                        transform: 'rotate(5deg)'
                    }
                },
                'paws-walking': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100vw)' }
                },
                'jump': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '50%': { transform: 'translateY(-20px) rotate(10deg)' }
                },
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'bounce-slight': 'bounce-slight 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'wag': 'wag 1s ease-in-out infinite',
                'paws-walking': 'paws-walking 15s linear infinite',
                'jump': 'jump 1s ease-in-out',
                'spin-slow': 'spin-slow 12s linear infinite',
			},
            backgroundImage: {
                'paw-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 18c1.2 0 2.4.5 3.2 1.3.8.8 1.3 2 1.3 3.2 0 1.2-.5 2.4-1.3 3.2-.8.8-2 1.3-3.2 1.3-1.2 0-2.4-.5-3.2-1.3-.8-.8-1.3-2-1.3-3.2 0-1.2.5-2.4 1.3-3.2.8-.8 2-1.3 3.2-1.3zm0 2c-.7 0-1.3.3-1.7.7-.4.4-.7 1-.7 1.7 0 .7.3 1.3.7 1.7.4.4 1 .7 1.7.7.7 0 1.3-.3 1.7-.7.4-.4.7-1 .7-1.7 0-.7-.3-1.3-.7-1.7-.4-.4-1-.7-1.7-.7zm-6 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm12 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-2-5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' fill='%2333C3F0' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                'bone-pattern': "url(\"data:image/svg+xml,%3Csvg width='70' height='40' viewBox='0 0 70 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10c2.5-2.5 2.5-6.6 0-9-2.5-2.5-6.6-2.5-9 0-2.5 2.5-2.5 6.6 0 9C11 10 11 10 20 10zm-9 20c-2.5 2.5-2.5 6.6 0 9 2.5 2.5 6.6 2.5 9 0 2.5-2.5 2.5-6.6 0-9-2.5 2.5-6.6 2.5-9 0zm39-10c2.5 2.5 6.6 2.5 9 0 2.5-2.5 2.5-6.6 0-9-2.5-2.5-6.6-2.5-9 0-2.5 2.5-2.5 6.6 0 9zm0 10c-2.5-2.5-6.6-2.5-9 0-2.5 2.5-2.5 6.6 0 9 2.5 2.5 6.6 2.5 9 0 2.5-2.5 2.5-6.6 0-9zm-10-10h-9V10h9v10zm-19 0V10h9v10h-9z' fill='%23A67C52' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                'doghouse-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 45 L20 25 L20 65 L60 65 L60 25 L40 45 Z M40 15 L10 45 L15 45 L40 20 L65 45 L70 45 L40 15 Z' stroke='%23A67C52' stroke-width='1' fill='none' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
