<script setup>
defineProps({
    experiences: Array,
    hasMoreExperiences: Boolean,
    isExperienceVisible: Function,
});

defineEmits([ 'more']);
</script>

<template>
    <div class="max-w-4xl mx-auto px-6"> 
        <h2 class=" text-xl font-bold mb-3 flex justify-between">
            <span>Educations</span>
            
        </h2>
        <ol
            v-if="experiences.length > 0"
            class="space-y-6"
        >
            <li
                v-for="(experience, index) in experiences"
                :key="experience.id"
            >
                <div v-if="isExperienceVisible(index)">
                    <ExperienceItem :experience="experience" />
                </div>
            </li>
        </ol>
        <span
            v-else
            class="text-grey"
        >
            None
        </span>
        <BaseButton
            v-if="hasMoreExperiences"
            @click="$emit('more')"
            type="button"
            size="small"
            variant="secondary"
            class="block w-full mt-5 rounded-full"
        >
            Load More
        </BaseButton>

    </div>
</template>