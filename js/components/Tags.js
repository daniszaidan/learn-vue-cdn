export default {
  template: `
    <div class="flex gap-2">
      <button 
        v-for="tag in tags" 
        @click="$emit('change', tag)"
        class="bg-blue-100 py-1 px-3 rounded-full text-sm cursor-pointer"
        :class="{
          'bg-blue-300' : tag === currentTag
        }"
      >
        {{ tag }}
      </button>
    </div>
  `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)];
    },
  },
};
