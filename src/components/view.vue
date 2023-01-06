<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <table class="w-full table-auto">
    <thead>
      <tr class="bg-gray-300">
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="w-full">
        <td class="py-3">1</td>
        <td class="py-3">yash</td>
        <td class="py-3">yash@gmail.com</td>
      </tr>
    </tbody>
  </table>

  <div class="m-8 flex justify-center">
    <RouterLink :to="{ name: 'List' }">
      <button
        type="submit"
        class="bg-emerald-500 p-2 rounded-md text-white w-20 font-medium"
      >
        Back
      </button>
    </RouterLink>
  </div>
</template>
