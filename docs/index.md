---
description: "Point d'entrée de la documentation Luna Park."
---

<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter();

if (router.route.path === '/') {
  router.go('/en/');
}
</script>
