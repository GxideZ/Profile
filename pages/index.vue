<script setup>
    useHead({
        title: 'MyProfile',
        meta: [
            { name: 'description', content: 'MyProfile'},
        ]
    });

    const experience = {"logo":''};
    
    function inExperienceVisible(index) {
        return true;
    }

    const portfolios = [
    {
        "id": "1",
        "cover": "https://i.ytimg.com/vi/v5NUVLI-q-s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmGCyAQ-uk7l82R9M5oaMw7g9dAg",
        "images": [
            "@/assets/images/PT.jpeg"
        ],
        "skills": ["PHP","MySQL","JavaScript"],
        "title": "Apartment Management System",
        "content": "Apartment Management System",
        "time":"October 2024",
        "excerpt": "I have designed an apartment management system as a website, featuring a member registration system and a login system. The website offers various functionalities, such as rent calculation, room status updates, and management tools designed to enhance user convenience. The system was developed using MySQL as the database and PHP as the programming language for the website. ",
    },
    {
        "id": "2",
        "cover": "https://down-my.img.susercontent.com/file/cn-11134207-7r98o-lstavhtcxtct32",

        "skills": ["React","PostgreSQL","Express.js"],
        "title": "Instument for measuring Soil and Air moisture",
        "content": "Create something new",
        "time":"September 2024",
        "excerpt": "I was responsible for the software development in this project, which involves creating a device to measure soil and air humidity. The project utilizes PostgreSQL as the database and Node-RED to integrate hardware and software. The website was developed using the React framework to build a dashboard that displays the status of soil and air humidity.",
    },
    
    ];

</script>

<template> 
    <TheHeader />
    <section class="mb-10">
        <AboutMe />
    </section>
    <section class="mb-10">
        <SkillList
            :skills="['HTML','CSS','JavaScript','PHP','C , C++','MySQL','PostgreSQL', 'Vue.js', 'Nuxt','React','Tailwind css','Bootstrap']"/>
    </section>
    <section class="mb-10">
        <ExperienceList
            :experiences="[experience]"
            :isExperienceVisible="inExperienceVisible"
    />
    </section>
    <section class="mb-10">
        <PortfolioList
            :portfolios="portfolios"
        />
    </section>
    


    <Thefooter />
</template>