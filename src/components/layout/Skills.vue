<template>
    <section class="mt-32" id="skills">
        <SectionHeader title="My Skills"/>
        <div class="mt-20 flex justify-center">
            <ul class="flex flex-wrap justify-center items-center">
                <li ref="skillRefs" v-for="(element,index) in skills" :key="index"
                    :class="`mx-4 mb-6 rounded-[12px] bg-gradient-to-t ${element.bgGradient}`">
                  <div class="rounded-[12px] bg-primary mt-1 w-[120px] md:w-[150px] lg:w-[120px] min-h-[150px] md:min-h-[175px] flex flex-col justify-center items-center p-4 md:p-5 text-center">
                    <h3 class="font-bold text-[28px] md:text-[35px] text-white flex items-center justify-center">
                      <Countup v-if="visibleItems[index]" :endVal="element.percentage" :startVal="0" :duration="2"/> %
                    </h3>
                    <p class="font-normal text-[14px] md:text-[16px]" :style="{color:element.textColor}">{{ element.title }}</p>
                  </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref,onMounted } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";

const skills = ref([
    {
        percentage: 98,
        title: 'Django',
        bgGradient: 'to-[#092E20] from-[#00C85399]', // أخضر طبيعي / backend vibe
        textColor: '#00C853'
    },
    {
        percentage: 92,
        title: 'Django REST Framework',
        bgGradient: 'to-[#1B5E20] from-[#66BB6A99]', // أخضر داكن شويه / API backend
        textColor: '#66BB6A'
    },
    {
        percentage: 88,
        title: 'Vue.js',
        bgGradient: 'to-[#35495E] from-[#42B88399]', // لون Vue الرسمي / frontend vibe
        textColor: '#42B883'
    },
    {
        percentage: 92,
        title: 'HTML, CSS, JavaScript',
        bgGradient: 'to-[#F06529] from-[#E34F2699]', // HTML/JS Orange / frontend
        textColor: '#F06529'
    },
    {
        percentage: 86,
        title: 'PostgreSQL',
        bgGradient: 'to-[#336791] from-[#00AEEF99]', // لون Postgres أزرق
        textColor: '#00AEEF'
    },
    {
        percentage: 60,
        title: 'Git & GitHub',
        bgGradient: 'to-[#F05033] from-[#E84C3C99]', // لون Git الأحمر
        textColor: '#F05033'
    },
    {
        percentage: 55,
        title: 'Deployment & Hosting',
        bgGradient: 'to-[#007ACC] from-[#00A1FF99]', // أزرق تقني / ops vibe
        textColor: '#007ACC'
    },
    {
        percentage: 85,
        title: 'RESTful APIs',
        bgGradient: 'to-[#FF6F00] from-[#FFA00099]', // لون مميز / integration
        textColor: '#FFA000'
    },
])


const visibleItems = ref(skills.value.map(()=>false));
const skillRefs = ref([]);

onMounted(()=>{
    const observer = new IntersectionObserver(
        (entries) =>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    const index=skillRefs.value.indexOf(entry.target);
                    if(index !== -1){
                        visibleItems.value[index] = true;
                    }
                }
            })
        },
        {threshold:0.1}
    );

    skillRefs.value.forEach((el) => observer.observe(el))
})
</script>
