<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import useStudent from "../composables/studentApi";
import { useRoute } from "vue-router";

const { singleStudentDataFun, studentAllData, err } = useStudent();
const route = useRoute();

onMounted(() => {
  singleStudentDataFun(route.params.id);
});
</script>
<template>
  <div
    v-if="err"
    class="bg-red-200 text-red-400 p-2 font-medium text-sm"
    role="alert"
  >
    !Oops Error encountered: {{ err }}
  </div>
  <div v-else-if="studentAllData">
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
          <td class="py-3">{{ studentAllData.id }}</td>
          <td class="py-3">{{ studentAllData.studentName }}</td>
          <td class="py-3">{{ studentAllData.studentEmail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
