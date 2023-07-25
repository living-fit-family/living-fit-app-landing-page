import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../../../lib/stripe'

export async function POST(request: NextRequest) {
  const jsonData = await request.json();
  
  const lookupKey = jsonData.lookup_key;
  const uid = jsonData.uid
  const email = jsonData.email;
  
  const prices = await stripe.prices.list({
      lookup_keys: [lookupKey?.toString()!],
      expand: ['data.product'],
    });
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      customer_email: email,
      metadata: {
        uid: uid
      },
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
        trial_end: 1693800000,
      },
      payment_method_collection: 'if_required',
      success_url: `${process.env.LIVING_FIT_FAMILY_BASE_URL}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.LIVING_FIT_FAMILY_BASE_URL}/?canceled=true`,
    });
    if (session.url) {
      return NextResponse.json({ session })
    }
}