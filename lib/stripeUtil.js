// import { loadStripe } from '@stripe/stripe-js'

export const handleJoinButtonClick = async (user, stripePublicKey) => {
  if(!user || ! stripePublicKey) {
    alert("App is currently in Demo Mode only, subscriptions will be available once we are live.")
  }
  alert("App is currently in Demo Mode only, subscriptions will be available once we are live.")
  // if (Object.keys(user).length <= 0) {
  //   alert("Must sign up or login to subscribe.")
  //   return
  // }
  // try {
  //   const stripe = await loadStripe(stripePublicKey);
  //   const response = await fetch('/api/stripe/session', {
  //     method: 'POST',
  //   });
  //   const data = await response.json();

  //   if (data.status === 'error') {
  //     alert(data.message);
  //     return;
  //   }

  //   const sessionId = data.sessionId;
  //   stripe?.redirectToCheckout({
  //     sessionId,
  //   });
  // } catch (error) {
  //   console.error('Error loading Stripe:', error);
  // }
};
