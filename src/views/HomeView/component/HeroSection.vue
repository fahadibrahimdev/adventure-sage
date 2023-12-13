<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="pt-48 pb-24 xl:py-56 3xl:py-64">
    <div class="container">
      <div class="grid lg:grid-cols-3 gap-20 lg:gap-10 3xl:gap-10">
        <div class="col-span-2 text-white">
          <h1 class="text-4.5xl xl:text-5xl 3xl:text-6xl font-bold pb-2 md:pb-5">
            {{ heroSectionContent.heading }}
          </h1>
          <p class="text-base lg:text-xl xl:text-2xl 3xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>
          <h3 class="text-2xl lg:text-3xl xl:text-4xl 3xl:text-4.5xl py-8 xl:pt-12">
            {{ heroSectionContent.subHeading }}
          </h3>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton is-red>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton is-blue @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
