const app = {
  data() {
    return {
      name: "",
      input_name: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
    },
  },
};

Vue.createApp(app).mount("#app");
