<template>
  <header class="fixed top-0 left-0 right-0 h-[65px] bg-[#fcfcfc99] border-b border-[#e4e0eb66] backdrop-blur-sm z-50">
    <div class="h-full max-w-[1400px] mx-auto px-[60.4px] flex items-center justify-between">
      <button @click="goTo('/')" class="h-10 w-[72.69px] bg-[url(/isis-2.png)] bg-cover bg-center cursor-pointer border-none" />

      <nav class="flex gap-[7.1px]">
        <button
          v-for="(item, index) in navigationItems"
          :key="index"
          :class="[
            'h-9 px-4 rounded-[10px] font-semibold text-sm transition-colors',
            $route.path === item.route
              ? 'bg-[#2f0d73] text-white shadow-md'
              : 'text-[#5f527a] hover:bg-gray-100'
          ]"
          @click="goTo(item.route)"
        >
          {{ item.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigationItems = [
  { label: "Accueil", route: "/" },
  { label: "Connexion", route: "/login" },
];

const goTo = (route) => {
  router.push(route);
};
</script>
