import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#4A6741',      // Forest Green - CTAs, nav accents
                secondary: '#8B6914',    // Golden Wheat - Highlights, hover states
                accent: '#B8860B',       // Antler Gold - Badges, icons
                background: '#F5F1E8',   // Warm Cream - Page backgrounds
                surface: '#FFFFFF',      // White - Cards
                text: '#2C2416',         // Dark Brown - Body text
                error: '#B71C1C',
                info: '#4A6741',
                success: '#4A6741',
                warning: '#8B6914',
            },
        },
        options: {
            customProperties: true,
        },
    },
    defaultAssets: {
        font: {
            family: 'Source Sans Pro',
        },
    },
});
