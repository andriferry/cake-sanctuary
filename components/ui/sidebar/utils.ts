import { createContext } from 'radix-vue';
import type { ComputedRef, Ref } from 'vue';

export const [useSidebar, provideSidebarContext] = createContext<{
    state: ComputedRef<'expanded' | 'collapsed'>;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
}>('Sidebar');
