import AssigmentItem from './AssigmentItem.js';

export default {
  components: { AssigmentItem },
  template: `
    <section v-show="assigments?.length" class='grid gap-5'>
      <h1 class="font-bold">{{title}}</h1>
      <div class="flex gap-2">
        <button 
          v-for="tag in tags" 
          @click="currentTag = tag"
          class="bg-blue-100 py-1 px-3 rounded-full text-sm cursor-pointer"
          :class="{
            'bg-blue-300' : tag === currentTag
          }"
        >
          {{ tag }}
        </button>
      </div>

      <ul class="space-y-2">
        <assigment-item :assigments="filteredAssigments"></assigment-item>
      </ul>
    </section>
  `,

  data() {
    return {
      currentTag: 'all',
    };
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.assigments.map((item) => item.tag))];
    },
    filteredAssigments() {
      if (this.currentTag === 'all') return this.assigments;
      return this.assigments.filter((item) => item.tag === this.currentTag);
    },
  },

  props: {
    assigments: Array,
    title: String,
  },
};
