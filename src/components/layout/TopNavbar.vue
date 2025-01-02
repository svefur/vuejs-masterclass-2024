<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar' /* PartiallyEnd: #3632/scriptSetup.vue */

import Input from '../ui/input/Input.vue'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
</script>
<template>
	<nav class="h-16 border-b bg-muted/40 flex gap-2 justify-between px-6 items-center">
		<form class="relative h-fit w-full max-w-96">
			<iconify-icon class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground" icon="lucide:search"></iconify-icon>
			<Input class="w-full pl-8 bg-background" type="text" placeholder="Search ..." />
		</form>
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</nav>
</template>
<style scope></style>
