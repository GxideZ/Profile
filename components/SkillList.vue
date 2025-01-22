<script setup>
    defineProps({
        skills: Array,
    });
</script>

<template>
    <div class="max-w-4xl mx-auto px-6"> 
        <h2 class="text-xl font-bold mb-3 flex justify-between">
            <span>Skills</span>
            
        </h2>
        <BaseBadgeList
            v-if="skills.length > 0"
            :badges="skills"
        />
        <span
            v-else
            class="text-grey"
        >
            None
        </span>
    </div>
</template>
