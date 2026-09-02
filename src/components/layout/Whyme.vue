<template>
    <section id="whyme" class="mt-32">
        <SectionHeader title="Why Me?"/>
        <div class="lg:grid-cols-2 p-12 overflow-hidden">
            <Experience data-aos="fade-down"/>
            <Education data-aos="fade-up"/>
        </div>
    </section>
</template>
<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Education from "@/components/layout/Education.vue";
import Experience from "@/components/layout/Experience.vue";
</script>