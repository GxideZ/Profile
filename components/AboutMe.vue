<script setup>

</script>

<template>
    <div class="max-w-4xl mx-auto px-6"> 
        <h2 class="text-xl font-bold mb-3 flex justify-between">
            <span>About me</span>
        </h2>
        <div class="md:flex md:space-x-2">
            <div class="flex space-x-3 md:flex-1">
                <div class="text-sm flex-1 md:text-base">
                    <h3 class="text-base md:text-lg">
                        Name : Thanapat Sukkree
                        <!-- {{ experience.title }} -->
                    </h3>
                    <h3 class="text-base md:text-lg">
                        Nickname : Guide
                        <!-- {{ experience.title }} -->
                    </h3>
                <div>

                        <span>
                            Date of Birth : 10 January 2004
                        </span>
                        <span> · </span>
                        <span>
                              20 Years old
                        </span>
                    </div>
                    <div>
                        <span>
                            Computer Engineering Bachelor's degree, year 3
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
                    <BaseBadgeList :badges="['KMITL Prince of Chumphon Campus']" />
                </div>
            </div>
            <div class="hidden md:block md:flex-1">
                <p class="whitespace-pre-wrap">
                    · Frontend Developer (interested)
                </p>
                <p class="whitespace-pre-wrap">
                    · Backend Developer (interested)
                </p>
                <p class="whitespace-pre-wrap">
                    · Full Stack Developer (interested)
                </p>
            </div>
        </div>
    </div>

</template>