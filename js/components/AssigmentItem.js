export default {
  template: `
    <li v-for="assigment in assigments" :key="assigment.id" class="w-60">
      <label class="flex justify-between items-center bg-blue-100 p-2">
        <span>{{assigment.name}}</span>
        <input type="checkbox" v-model="assigment.complete" />
      </label>
    </li>
  `,

  props: {
    assigments: Object,
  },
};
