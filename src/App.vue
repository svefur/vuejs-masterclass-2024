<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

console.log(import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase)
</script>

<template>
	<main>
		<router-view />
	</main>
</template>
