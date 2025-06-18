export default {
  template: `
    <form @submit.prevent="add">
      <input class="border border-gray-500 p-2 w-full" type="text" placeholder="add task..." v-model="task"/>
    </form>
  `,

  data() {
    return {
      task: '',
    };
  },

  methods: {
    add() {
      this.$emit('add', this.task);
      this.task = '';
    },
  },
};
