<script setup>
import {computed} from "vue";

const props = defineProps({
  isRed: {
    type: Boolean,
    default: false
  },
  isBlue: {
    type: Boolean,
    default: false
  },
  isYellow: {
    type: Boolean,
    default: false
  },
  isPurple: {
    type: Boolean,
    default: false
  },
})

const btnStyles = computed(() => {
  if (props.isRed) return 'bg-reddish outline outline-2 outline-tertiary'
  else if (props.isBlue) return 'bg-secondary outline outline-2 outline-yellow'
  else if (props.isYellow) return 'bg-accent outline outline-2 outline-tertiary !text-dark'
  else if (props.isPurple) return 'bg-purple outline outline-2 outline-tertiary'
  else return 'bg-primary'
})
</script>

<template>
  <button
      :class="[btnStyles]"
      class="text-white rounded-4xl text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl font-bold px-3 sm:px-5 py-2 lg:px-6 3xl:px-9.5 3xl:py-5"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
button:hover{
  box-shadow: 0 3px 9px 1px theme('colors.primary');
  transform: translateY(-3px);
}
</style>