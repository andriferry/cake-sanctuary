import type {
  UnwrapRefCarouselApi as CarouselApi,
  CarouselEmits,
  CarouselProps,
} from './interface'
import { createInjectionState } from '@vueuse/core'
import emblaCarouselVue from 'embla-carousel-vue'
import { onMounted, ref } from 'vue'

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }: CarouselProps, emits: CarouselEmits) => {
    const canScrollNext = ref(false)
    const canScrollPrev = ref(false)
    const currentPage = ref(0)

    const config: CarouselProps = {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    }

    const [emblaNode, emblaApi] = emblaCarouselVue(config, plugins)

    const scrollPrev = () => {
      emblaApi.value?.scrollPrev()
    }
    const scrollNext = () => {
      emblaApi.value?.scrollNext()
    }

    const onSelect = (api: CarouselApi) => {
      canScrollNext.value = api?.canScrollNext() || false
      canScrollPrev.value = api?.canScrollPrev() || false
    }

    onMounted(() => {
      if (!emblaApi.value)
        return

      emblaApi.value?.on('init', onSelect)
      emblaApi.value?.on('reInit', onSelect)
      emblaApi.value?.on('select', onSelect)

      // emits('init-api', emblaApi.value);
    })

    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      currentPage,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation,
    }
  },
)

function useCarousel() {
  const carouselState = useInjectCarousel()

  if (!carouselState)
    throw new Error('useCarousel must be used within a <Carousel />')

  return carouselState
}

export { useCarousel, useProvideCarousel }
