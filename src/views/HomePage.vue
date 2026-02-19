<template>
  <div class="min-h-screen bg-white">
    <header class="fixed top-0 left-0 right-0 h-[65px] bg-white border-b border-[#e4e0eb66] z-50">
      <div class="h-full max-w-[1400px] mx-auto px-[60px] flex items-center justify-between">
        <div class="h-10 w-[72.69px] bg-[url(/isis-2.png)] bg-cover bg-center" />

        <nav class="flex gap-[7.1px]">
          <button
            v-for="(item, index) in navigationItems"
            :key="index"
            :class="[
              'h-9 px-4 rounded-[10px] [font-family:Plus_Jakarta_Sans,Helvetica] font-semibold text-sm transition-colors',
              item.active
                ? 'bg-[#2f0d73] text-white shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]'
                : 'text-[#5f527a] hover:bg-gray-100'
            ]"
            @click="handleNavigation(item.route)"
          >
            {{ item.label }}
          </button>
        </nav>
      </div>
    </header>

    <main class="pt-[65px]">
      <section class="relative bg-gradient-to-br from-[#6b46c1] via-[#7c3aed] to-[#a855f7] text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div class="relative max-w-[1400px] mx-auto px-[60px] py-24 text-center">
          <h1 class="text-5xl font-bold mb-6 [font-family:Plus_Jakarta_Sans,Helvetica]">
            Évaluation des<br />
            <span class="text-[#fbbf24]">Enseignements</span>
          </h1>

          <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90 [font-family:Plus_Jakarta_Sans,Helvetica]">
           Plateforme sécurisée et anonyme pour évaluer vos enseignements à ISIS. <br />
            Votre avis compte pour améliorer la qualité de la formation.
          </p>     


          <div class="flex gap-4 justify-center mb-12">
            <button
              @click="handleNavigation('/login')"
              class="h-12 px-8 bg-[#F56861] hover:bg-[#f59e0b] text-[#FFF] font-bold text-base rounded-xl shadow-lg [font-family:Plus_Jakarta_Sans,Helvetica] transition-colors"
            >
              Participer à l'évaluation
            </button>
            <button
              class="h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base rounded-xl border-2 border-white/30 [font-family:Plus_Jakarta_Sans,Helvetica] transition-colors"
            >
              Savoir plus 
            </button>
          </div>

          <div class="flex flex-wrap gap-3 justify-center items-center">
  <span
    v-for="year in ['FIE1', 'FIE2', 'FIE3', 'FIE4', 'FIE5', 'FIA3', 'FIA4', 'FIA5']"
    :key="year"
    class="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold [font-family:Plus_Jakarta_Sans,Helvetica] border border-white/5 transition-colors hover:bg-white/20 cursor-default"
  >
    {{ year }}
  </span>
</div>
        </div>

        <div class="w-full h-24 bg-white" style="clip-path: ellipse(70% 100% at 50% 100%)"></div>
      </section>

     <section class="max-w-[1400px] mx-auto px-[60px] py-20 relative">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
      Accès <span class="text-[#7c3aed]">rapide</span>
    </h2>
    <p class="text-[#5f527a] text-lg [font-family:Plus_Jakarta_Sans,Helvetica]">
      Choisissez votre espace pour commencer
    </p>
  </div>

  <div class="relative max-w-5xl mx-auto mb-20">
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <div class="bg-white rounded-2xl border border-[#e4e0eb] shadow-lg p-8 hover:shadow-xl transition-shadow z-10">
        <div class="w-16 h-16 bg-[#4e79f3] rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
          Espace Étudiant
        </h3>
        <p class="text-[#5f527a] mb-6 [font-family:Plus_Jakarta_Sans,Helvetica]">
          Accédez à vos évaluations et donnez votre avis sur les enseignements
        </p>
        <button class="w-full h-12 bg-[#7c3aed] hover:bg-[#6b2acd] text-white font-semibold rounded-xl transition-colors">
          Accéder
        </button>
      </div>

      <div class="bg-white rounded-2xl border border-[#e4e0eb] shadow-lg p-8 hover:shadow-xl transition-shadow z-10">
        <div class="w-16 h-16 bg-[#ed5b9e] rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
          Espace Enseignant
        </h3>
        <p class="text-[#5f527a] mb-6 [font-family:Plus_Jakarta_Sans,Helvetica]">
          Consultez les statistiques et retours de vos enseignements
        </p>
        <button class="w-full h-12 bg-[#7c3aed] hover:bg-[#6b2acd] text-white font-semibold rounded-xl transition-colors">
          Accéder
        </button>
      </div>
    </div>

    <div class="hidden xl:block absolute -right-10 bottom-0 w-[240px]">
      <img src="/image 3.png" alt="Illustration" class="w-full h-auto object-contain" />
    </div>
  </div>
</section>

      <section class="bg-[#f8f7fa] py-20">
        <div class="max-w-[1400px] mx-auto px-[60px]">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
              Une plateforme <span class="text-[#7c3aed]">moderne</span>
            </h2>
            <p class="text-[#5f527a] text-lg [font-family:Plus_Jakarta_Sans,Helvetica]">
              Conçue pour une expérience utilisateur optimale et sécurisée
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl border border-[#e4e0eb] shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
                Évaluation par matière
              </h3>
              <p class="text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
                Questionnaires pour
chaque enseignement
              </p>
            </div>

            <div class="bg-white rounded-2xl border border-[#e4e0eb] shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
                Anonymat garanti
              </h3>
              <p class="text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
                Réponses strictement anonymes et
sécurisées
              </p>
            </div>

            <div class="bg-white rounded-2xl border border-[#e4e0eb] shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
                Analyse en temps réel
              </h3>
              <p class="text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
Tableaux de bord et statistiques
détaillées              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1400px] mx-auto px-[60px] py-20">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
            Comment ça marche ?
          </h2>
          <p class="text-[#5f527a] text-lg [font-family:Plus_Jakarta_Sans,Helvetica]">
            Un processus simple en 3 étapes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-[#6b46c1] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-3xl font-bold text-white [font-family:Plus_Jakarta_Sans,Helvetica]">1</span>
            </div>
            <h3 class="text-xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
              Connexion
            </h3>
            <p class="text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
Connectez-vous avec votre email
institutionnel ISIS            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-[#6b46c1] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-3xl font-bold text-white [font-family:Plus_Jakarta_Sans,Helvetica]">2</span>
            </div>
            <h3 class="text-xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
              Évaluation
            </h3>
            <p class="text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
Répondez aux questionnaires de vos
enseignements            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-[#6b46c1] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="text-3xl font-bold text-white [font-family:Plus_Jakarta_Sans,Helvetica]">3</span>
            </div>
            <h3 class="text-xl font-bold text-[#1c0845] mb-3 [font-family:Plus_Jakarta_Sans,Helvetica]">
Envoi anonyme            </h3>
            <p class="text-[#5f527a] [font-family:Plus_Jakarta_Sans,Helvetica]">
Vos réponses sont enregistrées de
façon anonyme            </p>
          </div>
        </div>
      </section>

      <section class="max-w-[1400px] mx-auto px-[60px] py-12">
        <div class="bg-gradient-to-br from-[#6b46c1] to-[#a855f7] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 class="text-4xl font-bold mb-4 [font-family:Plus_Jakarta_Sans,Helvetica]">
            Prêt à donner votre avis ?
          </h2>
          <p class="text-lg mb-8 opacity-90 [font-family:Plus_Jakarta_Sans,Helvetica] max-w-2xl mx-auto">
Votre participation est essentielle pour améliorer la qualité des enseignements          </p>
          <button
            @click="handleNavigation('/login')"
            class="h-14 px-10 bg-[#f56861] hover:bg-[#f59e0b] text-[#FFF] font-bold text-lg rounded-xl shadow-lg [font-family:Plus_Jakarta_Sans,Helvetica] transition-colors inline-block"
          >
            Commencer l'évaluation
          </button>
          <div class="flex gap-6 justify-center mt-8 text-sm">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>100% Anonyme</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Sécurisé</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Rapide (2-5min)</span>
            </div>
          </div>
        </div>
      </section>
    </main>

   <footer class="bg-[#f8f7fa] border-t border-[#e4e0eb] py-10 mt-20">
  <div class="max-w-[1400px] mx-auto px-[60px]">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div class="flex items-center gap-5">
        <img src="/isis-2.png" alt="ISIS" class="h-9 w-auto object-contain" />
        <img src="/PartINSA-GrisRouge 1.png" alt="INSA" class="h-9 w-auto object-contain" />
        <img src="/image 1.png" alt="UC" class="h-9 w-auto object-contain" />
        
        <div class="h-10 w-[1px] bg-[#e4e0eb] mx-2 hidden md:block"></div>

        <span class="text-sm text-[#5f527a] leading-tight font-['Plus_Jakarta_Sans',Helvetica] max-w-[250px]">
          École d'ingénieurs ISIS partenaire avec INSA - INU Champollion
        </span>
      </div>

      <div class="flex items-center gap-3">
        <img src="C:\Users\GIS\Downloads\eya-test-main\eya-test-main\public\chat4.svg" alt="Contact" class="w-5 h-5 opacity-70" />
        <span class="text-sm text-[#5f527a] font-['Plus_Jakarta_Sans',Helvetica]">
          Contact technique
        </span>
      </div>

      <span class="text-sm text-[#5f527a] font-['Plus_Jakarta_Sans',Helvetica]">
        © 2026 Projet FIE-3 - Évaluation des enseignements
      </span>
      
    </div>
  </div>
</footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigationItems = [
  { label: "Accueil", active: true, route: "/" },
  { label: "Connexion", active: false, route: "/login" },
];

const handleNavigation = (route: string) => {
  router.push(route);
};
</script>
