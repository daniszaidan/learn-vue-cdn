import AssigmentList from './AssigmentList.js';
import FormInput from './FormInput.js';

export default {
  components: { AssigmentList, FormInput },
  template: `
    <div class="space-y-5">
      <assigment-list :assigments="todo" title="Todo"></assigment-list>
      <assigment-list :assigments="completed" title="Completed"></assigment-list>
      <form-input @add="add"></form-input>
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

  methods: {
    add(name) {
      this.assigments.push({
        id: this.assigments.length + 1,
        name: name,
        complete: false,
      });
    },
  },
};
