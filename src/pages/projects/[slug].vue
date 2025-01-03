<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
	<h1>Project {{ route.params.slug }}</h1>
</template>
<style scope></style>
