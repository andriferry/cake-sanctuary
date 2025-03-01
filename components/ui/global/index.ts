import { Icon } from '#components'
import { defineComponent } from 'vue'

const { icons } = useAppConfig()

const ChevronUpIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.chevronUp, class: 'w-4' })
  }
})

const ArrowDoubleLeftIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.doubleChevronLeft, class: 'w-4' })
  }
})

const ArrowDoubleRightIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.doubleChevronRight, class: 'w-4' })
  }
})

const ArrowLeftIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.chevronLeft, class: 'w-4' })
  }
})

const ArrowRightIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.chevronRight, class: 'w-4' })
  }
})

const ChevronDownIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.chevronDown, class: 'w-4' })
  }
})

const CheckIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.check, class: 'w-4' })
  }
})

const SortIcon = defineComponent(() => {
  // use Composition API here like in <script setup>
  return () => {
    return h(Icon, { name: icons.sort, class: 'w-4' })
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
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SortIcon,
  WrapperPages,
}
