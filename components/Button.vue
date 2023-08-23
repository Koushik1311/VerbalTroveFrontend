<template>
  <div>
    <button
      class="border-2 border-blue-600 rounded-full text-blue-600 px-5 py-3 lg:hover:bg-blue-600 lg:hover:border-blue-600 lg:hover:text-white"
    >
      {{ button }}
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  button: String,
});
</script>
