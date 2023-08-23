<template>
  <div v-for="quote in quotes" class="grid place-items-center">
    <div class="w-4/5 mt-9 lg:w-2/5 lg:mt-20">
      <!-- Open Quote Icon -->
      <div class="grid justify-items-start">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-9 fill-blue-500"
        >
          <path
            d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
            fill-rule="nonzero"
          />
        </svg>
      </div>

      <p class="px-12 font-QuoteC text-justify text-2xl text-gray-50">
        {{ quote.quote }}
      </p>

      <!-- Closed Quote Icon -->
      <div class="grid justify-items-end">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-9 fill-blue-500"
        >
          <path
            d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z"
            fill-rule="nonzero"
          />
        </svg>
      </div>
    </div>
    <div class="flex items-center">
      <!-- Dash Icon -->
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-6 stroke-current text-gray-50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12h18"
          />
        </svg>
      </div>
      <!-- Author -->
      <h2 class="text-gray-50 ml-3 font-Author">{{ quote.author }}</h2>
    </div>
    <div class="absolute mb-20 bottom-0">
      <button
        :disabled="refreshing"
        @click="refreshAll"
        class="mt-9 border-2 border-blue-600 rounded-full text-blue-600 px-5 py-3 lg:hover:bg-blue-600 lg:hover:border-blue-600 lg:hover:text-white"
      >
        Generate New
      </button>
    </div>
  </div>
</template>

<script setup>
const { data: quotes } = await useFetch(
  "https://api-verbaltrove.cyclic.cloud/quotes/random"
);

const refreshing = ref(false);
const refreshAll = async () => {
  refreshing.value = true;
  try {
    await refreshNuxtData();
  } finally {
    refreshing.value = false;
  }
};
</script>
