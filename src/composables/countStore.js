import { ref } from "vue";

export const sharedCount = ref(10);

// if we initialise sharedCount as simply a JS variable/const, its value will change only in the component where the update logic is happening and will remain same in all other componenets that are sharing this value.
// when we use ref, shareCount value will react to an update that is happeinig in one component and will get updated in all components using it.
