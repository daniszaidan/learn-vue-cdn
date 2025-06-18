import AssigmentItem from './AssigmentItem.js';
import Card from './Card.js';
import Tags from './Tags.js';

export default {
  components: { AssigmentItem, Tags, Card },
  template: `
    <card v-show="assigments?.length">
      <template #heading>{{title}}</template>
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
    </card>
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
