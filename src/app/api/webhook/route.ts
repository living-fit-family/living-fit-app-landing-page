import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../lib/stripe';
import Stripe from 'stripe';
import axios from 'axios';

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  type CustomMetadata = {
    uid: string,
    firstName: string,
    lastName: string,
  }

  const { customer: paymentAccountId, metadata } = session;

  const {
    uid,
    firstName,
    lastName
  } = metadata as CustomMetadata

  let reqInstance = axios.create({
    headers: {
      Authorization: `Bearer 1234`
    },
    data: {
      uid,
      firstName,
      lastName,
      paymentAccountId,
    }
  })

  await reqInstance.post(`${process.env.CUSTOMER_ACCOUNT_MANAGER_BASE_URL}/create`)
}

export async function POST(request: NextRequest) {
  let event;
  let body = await request.text()
  // Replace this endpoint secret with your endpoint's unique secret
  // If you are testing with the CLI, find the secret by running 'stripe listen'
  // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
  // at https://dashboard.stripe.com/webhooks
  const endpointSecret = process.env.WEBHOOK_ENDPOINT_SECRET;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers.get('stripe-signature');
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature ? signature : '',
        endpointSecret
      );
    } catch (err: any) {
      console.log(`⚠️  Webhook signature verification failed.`, err?.message);
      return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
    }
  }
  let session;
  let status;
  // Handle the event
  switch (event?.type) {
    case 'checkout.session.completed':
      session = event.data.object as Stripe.Checkout.Session
      status = session.status;
      console.log(`Subscription status is ${status}.`);
      // handle the checkout session completed.
      handleCheckoutSessionCompleted(session);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event?.type}.`);
  }
  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json({ message: "Ok" }, { status: 200 })
}