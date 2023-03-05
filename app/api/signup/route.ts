import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== "POST"){
    res.status(400).json({message: "Must be a post request"})
  }

  

  res.status(200).json({ name: 'John Doe' })
}