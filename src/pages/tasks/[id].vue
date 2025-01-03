<script setup lang="ts">
const route = useRoute()
</script>
<template>
	<h1>Task {{ route.params.id }}</h1>
</template>
<style scope></style>
