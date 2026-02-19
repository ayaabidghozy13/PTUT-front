<template>
  <div class="relative min-h-screen bg-[#fcfcfc] flex flex-col">
    <header class="fixed top-0 left-0 right-0 h-[65px] bg-[#fcfcfc99] border-b border-[#e4e0eb66] backdrop-blur-sm z-50">
      <div class="h-full max-w-[1400px] mx-auto px-[60.4px] flex items-center">
        <button @click="handleNavigation('/')" class="h-10 w-[72.69px] bg-[url(/isis-2.png)] bg-cover bg-center ml-8 cursor-pointer" />
      </div>
    </header>

    <nav class="fixed top-[29px] right-[60px] flex gap-[7.1px] z-50">
      <button
        v-for="(item, index) in navigationItems"
        :key="index"
        :class="[
          'h-9 px-4 rounded-[10px] [font-family:Plus_Jakarta_Sans,Helvetica] font-semibold text-sm transition-colors',
          item.active
            ? 'bg-[#2f0d73] text-white shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] hover:bg-[#2f0d73]'
            : 'text-[#5f527a] hover:bg-gray-100'
        ]"
        @click="handleNavigation(item.route)"
      >
        {{ item.label }}
      </button>
    </nav>

    <main class="flex-1 flex items-center justify-center pt-[65px] pb-[97px]">
      <div class="w-full max-w-[448px] px-4">
        <div class="flex justify-center mb-5">
          <div class="h-10 w-[72.69px] bg-[url(/isis.png)] bg-cover bg-center" />
        </div>

        <h1 class="text-2xl font-bold text-[#1c0845] text-center mb-2 [font-family:Plus_Jakarta_Sans,Helvetica] tracking-[-0.60px]">
          Connexion
        </h1>

        <p class="text-base text-[#5f527a] text-center mb-6 [font-family:Plus_Jakarta_Sans,Helvetica]">
          Utilisez votre adresse email ISIS
        </p>

        <div class="bg-white rounded-2xl border-[#e4e0eb] shadow-[0px_10px_20px_-2px_#2f0d730a,0px_2px_15px_-3px_#2f0d731a]">
          <div class="p-[33px]">
            <div class="space-y-6">
              <div class="space-y-2">
                <label
                  for="email"
                  class="text-sm font-medium text-[#1c0845] [font-family:Plus_Jakarta_Sans,Helvetica] block"
                >
                  Adresse email institutionnelle
                </label>
                <div class="relative">
                  <img
                    src="/svg-2.svg"
                    alt="Email icon"
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    id="email"
                    type="email"
                    v-model="email"
                    class="h-12 w-full pl-[40.8px] bg-[#fcfcfc] border border-[#e4e0eb] rounded-[10px] text-sm text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2f0d73]"
                  />
                </div>
                <p class="text-xs text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
                  Exemple : jean.dupont@etud.univ-jfc.fr
                </p>
              </div>

              <div class="space-y-2">
                <div class="relative">
                  <img
                    src="/vector.svg"
                    alt="LockIcon icon"
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[21px]"
                  />
                  <input
                    id="password"
                    type="password"
                    v-model="password"
                    class="h-12 w-full pl-[41px] bg-[#fcfcfc] border border-[#e4e0eb] rounded-[10px] text-sm text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2f0d73]"
                  />
                </div>
              </div>

              <div class="flex items-start gap-2">
                <input
                  id="consent"
                  type="checkbox"
                  v-model="consent"
                  class="mt-0.5 h-4 w-4 rounded border-[#e4e0eb] text-[#2f0d73] focus:ring-[#2f0d73]"
                />
                <label
                  for="consent"
                  class="text-sm text-dark [font-family:Plus_Jakarta_Sans,Helvetica] tracking-[-0.28px] cursor-pointer"
                >
                  J'accepte le stockage anonyme de mes données.
                </label>
              </div>

              <button
                @click="handleLogin"
                class="w-full h-12 bg-[linear-gradient(173deg,rgba(47,13,115,1)_0%,rgba(128,82,218,1)_100%)] hover:bg-[linear-gradient(173deg,rgba(47,13,115,0.9)_0%,rgba(128,82,218,0.9)_100%)] text-white font-bold text-base rounded-xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] [font-family:Plus_Jakarta_Sans,Helvetica] transition-colors"
              >
                Se connecter
              </button>

              <div class="bg-[#f2f1f480] rounded-xl border border-[#e4e0eb] p-4">
                <div class="flex items-start gap-3">
                  <img
                    src="/svg-3.svg"
                    alt="Shield icon"
                    class="w-5 h-5 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <h3 class="text-sm font-medium text-[#1c0845] mb-1 [font-family:Plus_Jakarta_Sans,Helvetica]">
                      Connexion sécurisée
                    </h3>
                    <p class="text-xs text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica] leading-4">
                      Votre mot de passe vous a été envoyé sur votre adresse
                      email champollion en début d'année.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-12 mt-8">
          <div
            v-for="(badge, index) in securityBadges"
            :key="index"
            class="flex items-center gap-2"
          >
            <img :src="badge.icon" alt="Security icon" class="w-4 h-4" />
            <span class="text-sm text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
              {{ badge.text }}
            </span>
          </div>
        </div>
      </div>
    </main>

    <footer class="fixed bottom-0 left-0 right-0 h-[97px] bg-[#f2f1f44c] border-t border-[#e4e0eb]">
      <div class="h-full max-w-[1400px] mx-auto px-[92.4px] flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="h-8 w-[58.15px] opacity-80 bg-[url(/isis-1.png)] bg-cover bg-center" />
          <span class="text-sm text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
            École d'ingénieurs ISIS - INU Champollion
          </span>
        </div>

        <div class="flex items-center gap-2">
          <img src="/chat4.svg" alt="Chat icon" class="w-6 h-6" />
          <span class="text-sm text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
            Contact technique
          </span>
        </div>

        <span class="text-sm text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
          © 2026 Projet FIE-3 - Évaluation des enseignements
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigationItems = [
  { label: "Accueil", active: false, route: "/" },
  { label: "Connexion", active: true, route: "/login" },
];

const securityBadges = [
  { icon: "/svg.svg", text: "Données sécurisées" },
  { icon: "/svg.svg", text: "Anonymat garanti" },
];

const email = ref("prenom.nom@etud.univ-jfc.fr");
const password = ref("***************");
const consent = ref(false);

const handleLogin = () => {
  console.log("Login clicked", { email: email.value, consent: consent.value });
};

const handleNavigation = (route: string) => {
  router.push(route);
};
</script>
