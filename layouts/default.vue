<!-- Default Layout -->
<template>
  <div class="bg-gray-900 min-h-screen">
    <div class="container mx-auto">
      <!-- Nav Button -->
      <div>
        <!-- Icon -->
        <button
          ref="dropdownButton"
          @click="toggleDropdown"
          class="absolute bottom-0 right-0 mr-9 lg:mr-44 mb-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-14 fill-current text-gray-50 rounded-full bg-gray-950 p-2"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.25zM3.75 11a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75zM8 12.313a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75zm0 5.937a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75z"
            />
          </svg>
        </button>

        <!-- Links -->
        <div
          v-if="isOpen"
          class="absolute bottom-0 right-0 text-gray-50 font-roboto up grid grid-rows-4 mr-9 lg:mr-36 mb-40 bg-gray-600 rounded-md px-4 pt-7 h-30"
        >
          <div>
            <NuxtLink to="/category">
              <button class="hover:text-blue-500 uppercase">Category</button>
            </NuxtLink>
          </div>
          <div class="mt-3">
            <NuxtLink to="/">
              <button class="hover:text-blue-500 uppercase">Home</button>
            </NuxtLink>
          </div>
        </div>
        <div
          v-if="isOpen"
          class="absolute bottom-0 right-0 mr-9 lg:mr-48 mb-36"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 512 512"
            class="w-9 fill-current text-gray-600"
          >
            <path d="M256 0 72.115 256 256 512l183.885-256z" />
          </svg>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const isOpen = ref(false);
const dropdownButton = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Close dropdown when clicked outside
const closeDropdown = (event) => {
  if (
    process.client &&
    isOpen.value &&
    dropdownButton.value &&
    !dropdownButton.value.contains(event.target)
  ) {
    isOpen.value = false;
  }
};

watchEffect(() => {
  if (process.client) {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }
});
</script>
