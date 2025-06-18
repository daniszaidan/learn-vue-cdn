import AssigmentItem from './AssigmentItem.js';
import Tags from './Tags.js';

export default {
  components: { AssigmentItem, Tags },
  template: `
    <section v-show="assigments?.length" class='grid gap-5'>
      <h1 class="font-bold">{{title}}</h1>
      <tags 
        :initial-tags="assigments.map(item => item.tag)"
        // :current-tag="currentTag"
        // @change="currentTag = $event"
        // v-model="currentTag"
        v-model:currentTag="currentTag"
      ></tags>

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
