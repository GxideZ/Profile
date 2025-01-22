<script setup>
import { computed } from 'vue';
defineProps({
    portfolios: Array,
    isGettingPortfolios: Boolean,
    hasMorePortfolios: Boolean,
});


defineEmits(['more']);
</script>

<template>
    
    <section class="max-w-4xl mx-auto px-6 mb-10">
        <h2 class="text-xl font-bold mb-3 flex space-x-2">
            <span>Projects</span>
            
        </h2>
        <ul
            v-if="portfolios.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
            <li
                v-for="portfolio in portfolios"
                :key="portfolio.id"
                class="relative"
            >
                    <BaseCard
                        :key="portfolio.id"
                        :title="portfolio.title"
                        :excerpt="portfolio.excerpt"
                        :cover="portfolio.cover"
                        :badges="portfolio.skills"
                        :datetime="portfolio.time"
                    />                
            </li>
        </ul>
        
    </section>
</template>