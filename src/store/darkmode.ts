import { writable } from "svelte/store";


export default (() => {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggle: () => update((n) => !n),
  };
})();
