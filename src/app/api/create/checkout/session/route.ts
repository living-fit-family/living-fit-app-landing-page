import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../../../lib/stripe'

export async function POST(request: NextRequest) {
  const jsonData = await request.json();
  
  const { stripeId } = jsonData

  // Get current date
  var date = new Date();

  // Add 7 days to current date
  date.setDate(date.getDate() + 8);

  // Convert the date to unix time stamp
  var unixTimeStamp = Math.floor(date.getTime() / 1000);
  
  const session = await stripe.checkout.sessions.create({
    customer: stripeId,
    billing_address_collection: 'auto',
    line_items: [
      {
        price: process.env.STRIPE_PRICE,
        quantity: 1,

      },
    ],
    mode: 'subscription',
    subscription_data: {
      trial_settings: {
        end_behavior: {
          missing_payment_method: 'cancel',
        },
      },
      trial_end: unixTimeStamp,
    },
    payment_method_collection: 'always',
    success_url: `${process.env.LIVING_FIT_FAMILY_BASE_URL}/confirmation/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.LIVING_FIT_FAMILY_BASE_URL}/?canceled=true`,
  });
  if (session.url) {
    return NextResponse.json({ session })
  }
}