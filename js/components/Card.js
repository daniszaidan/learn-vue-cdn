export default {
  template: `
    <div class="grid gap-5 bg-gray-300 p-3 rounded-sm">
      <h2 v-if="$slots.heading" class="font-bold">
        <slot name="heading"/>
      </h2>

      <slot/>
    </div>
  `,

  props: {
    heading: String,
  },
};
