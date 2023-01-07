<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import useStudent from "../composables/studentApi";

const { createStudent, studentAllData, err, statusCode } = useStudent();

const formData = reactive({
  studentName: "",
  studentEmail: "",
});

const handleAddStudentForm = async () => {
  await createStudent(formData);
  if (statusCode.value === 201) {
    document.getElementById("AddStudentForm").reset();
  }
};
</script>
<template>
  <div
    class="bg-indigo-500 text-white text-2xl text-center font-bold flex justify-center"
  >
    Add Student
  </div>
  <form
    @submit.prevent="handleAddStudentForm"
    id="AddStudentForm"
    class="w-full"
  >
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
          v-model.trim="formData.studentName"
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
          v-model.trim="formData.studentEmail"
        />
      </div>
    </div>
    <div class="m-8 flex justify-center">
      <button
        type="submit"
        class="bg-indigo-500 py-2 rounded-md text-white w-20 font-medium mx-4"
      >
        Add
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
    <div
      v-if="err"
      class="bg-red-200 text-red-400 p-2 font-medium text-sm"
      role="alert"
    >
      !Oops Error encountered: {{ err }}
    </div>
    <div
      v-if="statusCode === 201"
      class="bg-green-100 text-green-400 p-2 font-medium text-sm"
      role="alert"
    >
      created Successfully
    </div>
  </form>
</template>
