<script setup lang="ts">
import { useData } from "../composables/data";
import { useSidebar } from "../composables/sidebar";

const { frontmatter, theme } = useData();
const { hasSidebar } = useSidebar();
</script>

<template>
    <footer
        v-if="theme.footer && frontmatter.footer !== false"
        class="VPFooter"
        :class="{ 'has-sidebar': hasSidebar }"
    >
        <div class="container">
            <p
                v-if="theme.footer.message"
                class="message"
                v-html="theme.footer.message"
            />
            <p
                v-if="theme.footer.copyright"
                class="copyright"
                v-html="theme.footer.copyright"
            />
        </div>
    </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--color-background-0);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--color-content-lite);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-liter);
}
</style>
