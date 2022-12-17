import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const invoice = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await prisma.vendor.upsert(
      {
        where: {
          name: req.body.vendor_name ?? 'UNKNOWN'
        },
        update: {},
        create: {
          name: req.body.vendor_name
        }
      }
    )

    await prisma.invoice.upsert({
      where: {
        invoice_number: req?.body?.invoice_number
      },
      update: {},
      create: {
        invoice_number: req?.body?.invoice_number,
        total: Number(req?.body?.total),
        currency: req?.body?.currency ?? '',
        invoice_date: req?.body?.invoice_date,
        due_date: req?.body?.due_date,
        remittance_address: req?.body?.remittance_address,
        vendor_name: req?.body?.vendor_name
      }
    })

  } catch (e) {
    res.status(404).send('error creating invoice')
  }

  res.status(200).json({message: 'invoice submitted successfully'})
};

export default invoice;
