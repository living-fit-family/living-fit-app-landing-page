import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '../../../../../lib/stripe'
import axios from 'axios';


async function getUserFromCustomerAccountManager(uid: string) {
  let reqInstance = axios.create({
    headers: {
      Authorization: `Bearer 1234`
    }
  })

  const res = await reqInstance.get(`${process.env.CUSTOMER_ACCOUNT_MANAGER_BASE_URL}/users/${uid}`)
  return res;
}

export async function POST(request: NextRequest) {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { uid } = await request.json();

  const res = await getUserFromCustomerAccountManager(uid)
//   console.log(res.data)
  const { payment_account_id } = res.data;

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = process.env.LIVING_FIT_FAMILY_BASE_URL;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: payment_account_id,
    return_url: returnUrl,
  });

  if (portalSession.url) {
    return NextResponse.json({ portalSession })
  }
}