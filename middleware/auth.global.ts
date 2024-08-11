// To register Middleware Global Use .global extension => One Way

// If you want to register middleware in particular component then
// In particular component use script tag in which write code as given below
// definePageMeta({
// middleware : 'auth',
// });

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("to", to);
  console.log("from", from);
});
