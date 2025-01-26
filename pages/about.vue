<template>
  <div>
    <h1>{{ error }}</h1>
    <h1>
      {{ status }}
    </h1>
    <h4>
      {{ data }}
    </h4>
  </div>
</template>
<script setup>
const { fetchData } = useExampleStore();

const { data, status, error } = await fetchData();
console.log(data);
</script>
