import VueTelInput from 'vue-tel-input';

Nova.booting((Vue, router, store) => {
  Vue.use(VueTelInput);
  Vue.component('index-nova-phone-field', require('./components/IndexField'))
  Vue.component('detail-nova-phone-field', require('./components/DetailField'))
  Vue.component('form-nova-phone-field', require('./components/FormField'))
})
