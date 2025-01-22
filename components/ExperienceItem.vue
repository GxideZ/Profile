<script setup>
    import moment from 'moment';

    const props = defineProps({
        experience: Object,
    });

    const experienceType = computed(() => useExperienceType(props.experience.type));

    const start = computed(() => moment(props.experience.start).format('MMM YYYY'))
    const end = computed(() => props.experience.end ? moment(props.experience.end).format('MMM YYYY') : 'Present')
    const diff = computed(() => {
        const { diffInYear, diffInMonth } = useDateRangeDiff(props.experience.start, props.experience.end);

        if (diffInYear > 1) {
            return `${diffInYear} year(s)`;
        }

        return `${diffInMonth} month(s)`;

})
</script>

<template>
    <div class="md:flex md:space-x-2">
        <div class="flex space-x-3 md:flex-1">
            <div>
                <img
                    src="@/assets/images/PC.jpg"
                    alt="Prachuabwittayalai School."
                    class="w-10 h-10 rounded-md"
                />

            </div>
            <div class="text-sm flex-1 md:text-base">
                <h3 class="font-bold text-base md:text-lg">
                    Prachuabwittayalai School.
                    <!-- {{ experience.title }} -->
                </h3>
                <div>

                    <span>                 
                        Science-Math
                        <!-- {{ experience.company }} -->
                    </span>
                    <span> · </span>
                    <span>
                        Prachuap Khiri Khan
                        <!-- {{ experienceType }} -->
                    </span>
                </div>
                <div>
                    <span>
                        2019 - 2022 · 3 year(s)
                        <!-- {{ start }} - {{ end }} · {{ diff }} -->
                    </span>
                </div>

                <div class="py-3 md:hidden">
                    <p class="whitespace-pre-wrap">
                        · GPA : 3.35 / 4.00
                        <!-- {{ experience.detail }} -->
                    </p>
                    <p class="whitespace-pre-wrap">
                        · Science-Math Room
                        <!-- {{ experience.detail }} -->
                    </p>
                </div>
                <BaseBadgeList :badges="['Student']" />
            </div>
        </div>
        <div class="hidden md:block md:flex-1">
            <p class="whitespace-pre-wrap">
                · GPA : 3.68 / 4.00
                <!-- {{ experience.detail }} -->
            </p>
            <p class="whitespace-pre-wrap">
                · Science-Math Room
                <!-- {{ experience.detail }} -->
            </p>
        </div>
    </div>
    
    <div class="md:flex md:space-x-2">
        <div class="flex space-x-3 md:flex-1">
            <div>
                <img
                    src="@/assets/images/PT.jpeg"
                    alt="Prachuabwittayalai School."
                    class="w-10 h-10 rounded-md"
                />
            </div>
            <div class="text-sm flex-1 md:text-base">
                <h3 class="font-bold text-base md:text-lg">
                    King Mongkut's Institute of Technology Ladkrabang Prince of Chumphon Campus.
                    <!-- {{ experience.title }} -->
                </h3>
                <div>

                    <span>
                        Computer Engineering
                        <!-- {{ experience.company }} -->
                    </span>
                    <span> · </span>
                    <span>
                        Chumphon 
                        <!-- {{ experienceType }} -->
                    </span>
                </div>
                <div>
                    <span>
                        2022 - Present · 2 year(s)
                        <!-- {{ start }} - {{ end }} · {{ diff }} -->
                    </span>
                </div>

                <div class="py-3 md:hidden">
                    <p class="whitespace-pre-wrap">
                        · GPA : 3.77 / 4.00 
                        
                        <!-- {{ experience.detail }} -->
                    </p>
                    <p class="whitespace-pre-wrap">
                      
                        · Bachelor of Engineering Program in Computer Engineering
                        <!-- {{ experience.detail }} -->
                    </p>
                </div>
                <BaseBadgeList :badges="['University students']" />
                <!-- experience.skills  -->
            </div>
        </div>
        <div class="hidden md:block md:flex-1">
            <p class="whitespace-pre-wrap">
                · GPA : 3.77 / 4.00
                
                
                <!-- {{ experience.detail }} -->
            </p>
            <p class="whitespace-pre-wrap">
                · Bachelor of Engineering Program in Computer Engineering
                <!-- {{ experience.detail }} -->
            </p>
        </div>

    </div>
    
</template>