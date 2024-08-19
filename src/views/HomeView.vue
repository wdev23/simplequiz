<template>
  <div class="home_container">
    <header class="bg-cl_blueClear">
      <h1
        class="text-2xl text-white font-bold py-6 text-center
        cursor-pointer transform transition-all tracking-wider leading-tight duration-300 hover:scale-90 hover:text-cl_blueDark">
        TEST
      </h1>
    </header>

    <section class="top_s h-full bg-cl_ccc">
      <div class="container h-full md:h-[420px] w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 py-4">

        <form @submit.prevent="" class="shadow-lg
        flex flex-col gap-3 items-center justify-center
        border-2 h-[380px] w-[380px] rounded-md border-cl_blueClear bg-cl_greyLight">

          <p class="text-lg text-black">{{ question }}</p>
          <input type="text" name="current" v-model="answer" class="border-2 border-cl_blueClear" />
          <p class="text-2xl text-cl_blueDark font-bold">{{ areWeDone ? 'Your score is ' + score : 'Next question' }}</p>
        </form>

        <aside class="second_s h-full w-[380px] shadow-2xl">
          <div class="bg-[url('@/assets/img/quiz.jpg')] h-[380px] md:h-full w-full border-2 border-cl_blueClear bg-cover bg-center"></div>
        </aside>

      </div>
    </section>

    <footer class="h-36 bg-cl_blueClear flex justify-center items-center">
      <button @click="restartQuiz" class="font-bold text-white p-4 bg-cl_blueDark rounded-lg
        hover:bg-cl_blueLight focus:outline-none focus:ring-4 focus:ring-cl_blueClear focus:ring-opacity-50 active:bg-cl_blueDarker transition">
        Restart Quiz
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const questions = [
  'How much is 2+2',
  'How much is 3*5+1',
  'What is the rest from 3/1'
];
const answers = [
  '4',
  '16',
  '1'
];

const current = ref(0);
const score = ref(0);
const answer = ref('');

const question = computed(() => questions[current.value]);
const rightAnswer = computed(() => answers[current.value]);
const areWeDone = computed(() => current.value >= questions.length);

const check = () => {
  if (answer.value === rightAnswer.value) {
    score.value++;
  }
  answer.value = '';
  current.value++;
  
  if (areWeDone.value) {
    clearInterval(interval);
  }
};

const restartQuiz = () => {
  current.value = 0;
  score.value = 0;
  answer.value = '';
  clearInterval(interval); // Clear any existing intervals
  interval = setInterval(check, 4000); // Restart the interval
};

let interval = setInterval(check, 4000);

</script>

<style scoped>
/* Your styles here */
</style>
