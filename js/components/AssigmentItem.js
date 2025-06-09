export default {
  template: `
    <li v-for="assigment in assigments" :key="assigment.id">
      <label>
        <span>{{assigment.name}}</span>
        <input type="checkbox" v-model="assigment.complete" />
      </label>
    </li>
  `,

  props: {
    assigments: Object,
  },
};
