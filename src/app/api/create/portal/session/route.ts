import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../../../lib/stripe'
import { db } from '../../../../../lib/firebase-admin'

async function getPaymentAccountId(uid: string) {
  const user = db.collection('users').doc(uid)
  
  const doc = await user.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    return JSON.parse(JSON.stringify(doc.data()))
  }
}

export async function POST(request: NextRequest) {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { uid } = await request.json();
  const res = await getPaymentAccountId(uid)

  const { paymentAccountId } = res;

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = process.env.LIVING_FIT_FAMILY_BASE_URL;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: paymentAccountId,
    return_url: returnUrl,
  });

  if (portalSession.url) {
    return NextResponse.json({ portalSession })
  }
}