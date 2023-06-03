/**
 * 1.install stripe and react stripe js
 * 2.create a checkout form with card element (card element contains: card number,expiration date,dvs zip code )
 * 3.create account on stripe and get the publishable key pk
 * 4.get cart information
 * create a payment method
 * use test card to test payment:
 * on the server site install payment stripe :npm install --save stripe
 * create a payment intent api with payment method types : ['card']
 * make sure yoy provide amount in cents (multiply price with 100)
 * 9. call payment intent to get client secret and store it in a state
 * 10 use confirmPayment api with client secret card info
 * display confirm card error
 * display confirm card success
 * do things after payment .....>
 */