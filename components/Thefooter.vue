<template>
    <footer class="mt-10">
        <div class="w-full px-3 py-10 bg-gradient-to-r from-primary to-secondary text-center md:py-20 shadow-lg">
            <h2 class="text-lg mb-4 font-bold text-white md:text-2xl md:mb-5 transition-colors hover:text-primary">
                looking for interns? Contact me now ! !
            </h2>
            <p class="text-sm text-white mb-6 md:text-lg opacity-80">
                I'm available for work, feel free to reach out!
            </p>

            <div class="flex justify-center gap-8 mb-6">
                <div class="text-white text-lg transition-transform hover:scale-110 duration-300">
                    <p class="font-bold text-xl mb-1">Phone</p>
                    <a href="tel:+66612345678" class="text-white hover:text-primary text-lg">+66 99 418 5781</a>
                </div>

                <div class="text-white text-lg transition-transform hover:scale-110 duration-300">
                    <p class="font-bold text-xl mb-1">Email</p>
                    <a href="mailto:65200156@kmitl.ac.th"
                        class="text-white hover:text-primary text-lg">65200156@kmitl.ac.th</a>
                </div>
            </div>

            <BaseLink size="large" to="mailto:65200156@kmitl.ac.th" target="_blank"
                class="inline-block bg-primary text-black px-6 py-3 rounded-md shadow-lg hover:bg-primary-dark hover:shadow-xl hover:scale-105 transition-transform transition-colors duration-300 ease-in-out">
                <span class="text-white flex items-center justify-center">
                    <span class="mr-2">Contact me</span>
                    <IconEnvelope class="inline-block w-4 text-white" />
                </span>
            </BaseLink>

        </div>
    </footer>
</template>