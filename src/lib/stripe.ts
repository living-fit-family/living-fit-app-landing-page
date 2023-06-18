import Stripe from 'stripe';
import * as dotenv from 'dotenv'

dotenv.config();

const apiKey = process.env.STRIPE_SECRET_KEY;
let stripe: Stripe;

if (apiKey) {
    stripe = new Stripe(apiKey, {
        apiVersion: '2022-11-15'
    });
} else {
    throw new Error("Cannot configure Stripe. API key not found.")
}

export {
    stripe
}
