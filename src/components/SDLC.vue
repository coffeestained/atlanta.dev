<script setup lang="ts">
import SDLCFeatureItem from './SDLCFeatureItem.vue'
import IconRequirements from './icons/IconRequirements.vue'
import IconMaintain from './icons/IconMaintain.vue'
import IconPlanning from './icons/IconPlanning.vue'
import IconDevelop from './icons/IconDevelop.vue'
import IconDesign from './icons/IconDesign.vue'
</script>

<template>
  <SDLCFeatureItem>
    <template #icon>
      <IconPlanning />
    </template>
    <template #heading>Planning</template>

    Requirement analysis is the most important and fundamental stage in SDLC.
  </SDLCFeatureItem>

  <SDLCFeatureItem>
    <template #icon>
      <IconRequirements />
    </template>
    <template #heading>Requirements</template>

    We can help in clearly defining and documenting the product requirements while working to get them approved from the customer or the market analysts.
  </SDLCFeatureItem>

  <SDLCFeatureItem>
    <template #icon>
      <IconDesign />
    </template>
    <template #heading>Design</template>

    A design approach clearly defines all the architectural modules of the product along with its communication
    and data flow representation with the external and third party modules (if any).
  </SDLCFeatureItem>

  <SDLCFeatureItem>
    <template #icon>
      <IconDevelop />
    </template>
    <template #heading>Develop</template>

    Fingers to keyboard -- the product is built. The design is performed in a detailed and organized manner, code generation can be accomplished without much hassle.
  </SDLCFeatureItem>

  <SDLCFeatureItem>
    <template #icon>
      <IconMaintain />
    </template>
    <template #heading>Deploy, Testing & Maintain</template>

    Testing occurs at all stages. The product may be released as it is or with suggested enhancements in the targeting domain segment.
    After the product is released, its maintenance is managed.
  </SDLCFeatureItem>
</template>
