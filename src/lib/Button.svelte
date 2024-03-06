<script>
  export let caption;
  export let bgColor;
  export let color;
</script>
<button class={`px-4 py-2 border border-solid rounded-md bg-${bgColor} text-${color} uppercase tracking-wider font-semibold hover:bg-gradient-to-r hover:from-gray-300`}>
  {caption}
</button>