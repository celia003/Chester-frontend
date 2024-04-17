import { ref, reactive, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event:any) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}


export function useKeyupCounter() {
  const count = ref(0);
  const input = ref('');
  const isFocused = ref(false);

  const onKeyup = (event:any) => {
    if (event.key === 'Enter') {
      if (isFocused.value) {
        count.value++;
        input.value = '';
      }
    }
  };

  const focus = () => {
    isFocused.value = true;
    // @ts-ignore
    document.activeElement.focus();
  };

  const blur = () => {
    isFocused.value = false;
  };

  return {
    count,
    input,
    isFocused,
    onKeyup,
    focus,
    blur,
  };
}


export default function useOnKeyUp(callback:any) {
  onMounted(() => {
    window.addEventListener('keyup', callback)
  })
}