import { Icon } from '#components'
import config from '@/app.config'
import { defineComponent } from 'vue'

const { icons } = config

const ChevronUpIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.chevronUp,
      class: 'w-4',
    })
  }
})

const ArrowDoubleLeftIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.doubleChevronLeft,
      class: 'w-4',
    })
  }
})

const ArrowDoubleRightIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.doubleChevronRight,
      class: 'w-4',
    })
  }
})

const ChevronLeftIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.chevronLeft,
      class: 'w-4',
    })
  }
})

const ChevronRightIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.chevronRight,
      class: 'w-4',
    })
  }
})

const ChevronDownIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.chevronDown,
      class: 'w-4',
    })
  }
})

const ArrowUpIcon = defineComponent(() => {
  return () => {
    return h(Icon, {
      class: 'w-4',
      name: icons.arrowUp,
    })
  }
})

const ArrowDownIcon = defineComponent(() => {
  return () => {
    return h(Icon, {
      class: 'w-4',
      name: icons.arrowDown,
    })
  }
})

const CheckIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.check,
      class: 'w-4',
    })
  }
})

const SortIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, {
      name: icons.sort,
      class: 'w-4',
    })
  }
})

const WrapperPages = defineComponent((props, { slots }) => {
  return () => {
    return h('div', { class: 'grid lg:p-4 gap-3 grid-flow-row auto-rows-max' }, slots.default ? slots.default() : 'Main Content')
  }
})

export {
  ArrowDoubleLeftIcon,
  ArrowDoubleRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SortIcon,
  WrapperPages,
}
