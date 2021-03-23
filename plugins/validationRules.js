import Vue from 'vue'

Vue.prototype.$required = value => {
  return !!value || 'Valor obligatorio';
}
Vue.prototype.$email = value => {
  return /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/.test(value) || "Correo inválido";
}
Vue.prototype.$maxLength = (value, length) => {
  console.log("value", value);
  console.log("length", length);
  return value.length > length || `Largo máximo ${length} caracteres`;
}
Vue.prototype.$passMinLength = (value) => {
  return value.length < 6 || `Largo mínimo 6 caracteres`;
}
