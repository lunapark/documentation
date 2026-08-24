---
description: "Configurez l'assistant IA Sidekick et ses fournisseurs dans Luna Park."
---

<script setup lang="ts">
import Popup from "/assets/images/getting-started/sidekick/popup.png";
import ProviderConfig from "/assets/images/getting-started/sidekick/provider-config.png";
</script>

# Configurer le Sidekick

Le **Sidekick** est l'assistant IA intégré à Luna Park.

Ouvrez le panneau avec `Ctrl + Shift + F`, puis allez dans l'onglet **Sidekick** (à côté de **Navigator** et **Finder**).

<DImage :src="Popup" alt="Popup ouverte sur l'onglet Sidekick" />

## Configurer un provider

Trois providers supportés : **Gemini**, **Anthropic**, **OpenRouter**. Pour chacun :

1. Sélectionnez le provider.
2. Renseignez votre `API Key`.
3. Choisissez le modèle.

<DImage :src="ProviderConfig" alt="Configuration d'un provider avec API Key et choix du modèle" />
