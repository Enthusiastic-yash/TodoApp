<script setup>
import useStudent from "../composables/studentApi";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const {
  studentAllData,
  err,
  singleStudentDataFun,
  updateStudentData,
  statusCode,
} = useStudent();

const route = useRoute();
onMounted(() => {
  singleStudentDataFun(route.params.id);
});

const handleUpdateForm = async () => {
  await updateStudentData(route.params.id, studentAllData.value);
};
</script>
<template>
  <div
    v-if="err"
    class="bg-red-200 text-red-400 p-2 font-medium text-sm"
    role="alert"
  >
    !Oops Error encountered: {{ err }}
  </div>
  <form
    @submit.prevent="handleUpdateForm"
    id="AddStudentForm"
    class="w-full"
    v-if="!err"
  >
    <div class="flex items-center m-6">
      <div class="w-1/5 font-medium">
        <label for="stuId">ID : </label>
      </div>
      <div class="w-4/5">
        <input
          class="border-2 border-gray-200 rounded-xl outline-none w-full py-2 px-4"
          type="text"
          id="stuName"
          required
          placeholder="Enter your name"
          disabled
          readonly
          v-model.trim="studentAllData.id"
        />
      </div>
    </div>
    <div class="flex items-center m-6">
      <div class="w-1/5 font-medium">
        <label for="stuName">Name : </label>
      </div>
      <div class="w-4/5">
        <input
          class="border-2 border-gray-200 rounded-xl outline-none w-full py-2 px-4"
          type="text"
          id="stuName"
          required
          placeholder="Enter your name"
          v-model.trim="studentAllData.studentName"
        />
      </div>
    </div>

    <div class="flex items-center m-6">
      <div class="w-1/5 font-medium">
        <label for="stuEmail">Email : </label>
      </div>
      <div class="w-4/5">
        <input
          class="border-2 border-gray-200 rounded-xl outline-none w-full py-2 px-4"
          type="email"
          id="stuEmail"
          required
          placeholder="Enter your Email"
          v-model.trim="studentAllData.studentEmail"
        />
      </div>
    </div>
    <div class="m-8 flex justify-center">
      <button
        type="submit"
        class="bg-indigo-500 py-2 rounded-md text-white w-20 font-medium mx-4"
      >
        update
      </button>
      <RouterLink :to="{ name: 'List' }">
        <button
          type="submit"
          class="bg-emerald-500 p-2 rounded-md text-white w-20 font-medium mx-4"
        >
          Back
        </button>
      </RouterLink>
    </div>
  </form>

  <div
    v-if="statusCode === 200"
    class="bg-green-100 text-green-400 p-2 font-medium text-sm"
    role="alert"
  >
    updated Successfully
  </div>
</template>
