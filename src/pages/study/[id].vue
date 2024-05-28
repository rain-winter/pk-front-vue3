<script setup lang="ts">
import { useParams } from '@/hook/useParams'

// const route = useRoute().params as Params
type Params = {
  id: string
}
const route = useParams<Params>()
</script>
<template>
  <div>{{ route.id }}</div>
</template>
