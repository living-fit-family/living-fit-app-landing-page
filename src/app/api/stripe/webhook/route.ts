import { NextRequest, NextResponse } from "next/server";
import { stripe } from '../../../../lib/stripe'

const endpointSecret = process.env.STRIPE_WEB_HOOK_SECRET!;

async function updateCustomer(request: any) {
    const res = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  });
 
  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const sig = request.headers.get('stripe-signature')!;
  const req = await request.text()
  let event;

  try {
    event= stripe.webhooks.constructEvent(req, sig, endpointSecret);
  } catch (err) {
    console.log(err)
    return new NextResponse("Bad Request", {
        status: 200,
        statusText: `Webhook Error: ${err}`
      })
  }

  let res;

  // Handle the event
  switch (event.type) {
    case 'customer.created':
      const customerCreated: any = event.data.object;
       
      const newUser = {
        paymentAccountId: customerCreated.id,
        email: customerCreated.email
      }

      res = await updateCustomer(newUser)
      
      
      // Then define and call a function to handle the event customer.created
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json(res);
};