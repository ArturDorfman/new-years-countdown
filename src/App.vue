<template>
  <div class="app-wrapper">
    <div class="countdown-box">
      <CountdownHeader />
      <main class="flex justify-center">
        <CountdownSegment label="days" :number="newYearCountdown.days" />
        <CountdownSegment label="hours" :number="newYearCountdown.hours" />
        <CountdownSegment label="minutes" :number="newYearCountdown.minutes" />
        <CountdownSegment label="seconds" :number="newYearCountdown.seconds" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useTimeout, useCountdown } from './composables'
import CountdownHeader from "@/components/CountdownHeader.vue";
import CountdownSegment from "@/components/CountdownSegment.vue";

const { setCountdown, stopCountdown } = useTimeout()
const { getTimeBeforeNewYear } = useCountdown()

const newYearCountdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

function updateCountdownTime (countdownTime) {
  newYearCountdown.value = { ...countdownTime }
}

function updateNewYearCountdown () {
  const timeUntilNewYear = getTimeBeforeNewYear()
  updateCountdownTime(timeUntilNewYear)
}

onMounted(() => {
  setCountdown(updateNewYearCountdown)
})

onUnmounted(stopCountdown)
</script>

<style scoped>
.app-wrapper {
  @apply flex items-center justify-center w-full h-full p-10;
}
.countdown-box {
  @apply shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px];
}
body {
  @apply bg-gray-100;
}
</style>
