<template>
  <div class="pt-20">
    <div
      v-for="(category, index) in categories"
      key="index"
      class="grid place-items-center"
    >
      <div class="w-4/5 lg:w-2/5">
        <div class="mt-3">
          <NuxtLink
            :to="`/category/${category.id}`"
            class="text-gray-50 hover:text-blue-500"
            >{{ category.title }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: categories } = await useFetch(
  "https://api-verbaltrove.cyclic.cloud/categories"
);
</script>
