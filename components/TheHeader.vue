<template>
    <header class="mb-10">
        <div
            class="w-full px-3 py-9 bg-gradient-to-r from-primary to-secondary flex space-x-3.5 md:justify-center md:flex-col md:items-center md:space-x-0 shadow-lg">
            <div class="flex-none transition-transform transform hover:scale-110 duration-300">
                <img src="@/assets/images/Thanapat.jpg" alt="Thanapat"
                    class="rounded-full w-20 h-20 border-4 border-primary md:w-52 md:h-52 md:mb-4 hover:border-4 hover:border-white" />
            </div>
            <div class="text-white">
                <div
                    class="font-bold text-xl md:text-center md:text-2xl transition-colors duration-300 hover:text-primary">
                    Thanapat Sukkree
                </div>
                <p class="text-base md:text-center md:text-xl text-opacity-80 md:mt-2">
                    Computer Engineering, KMITL Prince of Chumphon
                </p>
                <div class="pt-2 flex flex-wrap gap-4 md:justify-center md:mt-2">
                    <BaseLink size="small" to="mailto: 65200156@kmitl.ac.th"
                        class="md:text-base md:px-7 md:py-3 md:space-x-2 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform rounded-md">
                        <span>Email</span>
                        <IconEnvelope class="inline-block w-3 md:w-4" />
                    </BaseLink>
                    <BaseLink size="small" to="https://www.facebook.com/thn.phathr.sukh.kri"
                        class="md:text-base md:px-7 md:py-3 md:space-x-2 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform rounded-md"
                        target="_blank">
                        <span>Facebook</span>
                        <IconLinkedin class="inline-block w-3 md:w-4" />
                    </BaseLink>

                </div>
            </div>
        </div>
    </header>
</template>
