// import prisma from "../../../lib/prisma";
// import { authOptions } from "@/pages/api/auth/[...nextauth].js";
// import { getServerSession } from "next-auth/next";
// import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end() //Method Not Allowed
    return
  }

  // const session = await getServerSession(req, res, authOptions)
  // if (!session) return res.status(401).json({ message: 'Not logged in' })
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: session.user.id,
  //   },
  // })

  // if (!user) return res.status(401).json({ message: 'User not found' })
  
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);  
  // const stripe_session = await stripe.checkout.sessions.retrieve(
  //   req.body.session_id
  // )

  // await prisma.user.update({
  //   data: {
  //     isSubscriber: true,
  //   },
  //   where: {
  //     id: stripe_session.client_reference_id,
  //   },
  // })

  res.end()
}