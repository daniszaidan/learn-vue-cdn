import AssigmentList from './AssigmentList.js';

export default {
  components: { AssigmentList },
  template: `
    <div class="space-y-5">
      <assigment-list :assigments="todo" title="Todo"></assigment-list>
      <assigment-list :assigments="completed" title="Completed"></assigment-list>
    </div>
  `,

  data() {
    return {
      assigments: [
        {
          id: 1,
          name: 'eat',
          complete: false,
        },
        {
          id: 2,
          name: 'sleep',
          complete: false,
        },
        {
          id: 3,
          name: 'work',
          complete: false,
        },
      ],
    };
  },

  computed: {
    todo() {
      return this.assigments.filter((item) => !item.complete);
    },
    completed() {
      return this.assigments.filter((item) => item.complete);
    },
  },
};
