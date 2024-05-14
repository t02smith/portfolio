export const useOverlay = defineStore("overlay", () => {
  const open = ref<boolean>(false);

  const toggle = () => {
    open.value = !open.value;
  };

  const set = (newVal: boolean) => {
    open.value = newVal;
  };

  return {
    open,
    toggle,
    set,
  };
});
