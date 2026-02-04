module.exports = {
    theme: {
        extend: {
            keyframes: {
                lampFlicker: {
                    '0%': { opacity: '0.9', transform: 'scale(1)' },
                    '10%': { opacity: '0.6' },
                    '20%': { opacity: '0.85' },
                    '30%': { opacity: '0.5' },
                    '50%': { opacity: '0.95' },
                    '70%': { opacity: '0.7' },
                    '100%': { opacity: '0.9' },
                },
            },
            animation: {
                lampFlicker: 'lampFlicker 0.35s infinite linear',
            },
        },
    },
}