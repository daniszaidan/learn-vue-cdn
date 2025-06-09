import AssigmentItem from './AssigmentItem.js';

export default {
  components: { AssigmentItem },
  template: `
    <section v-show="assigments?.length">
      <h1 class="font-bold">{{title}}</h1>
      <ul>
        <assigment-item :assigments="assigments"></assigment-item>
      </ul>
    </section>
  `,

  props: {
    assigments: Array,
    title: String,
  },
};
