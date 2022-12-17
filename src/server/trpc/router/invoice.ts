import { z } from "zod";

import { router, publicProcedure } from '../trpc';

export const invoiceRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.invoice.findMany({
      where: {
        status: {
          equals: "pending"
        }
      },
      include: {
        vendor: true
      }
    });
  }),
  approve: publicProcedure
  .input(
    z.object({id: z.string()})
  )
  .mutation(({ctx, input}) => {
    return ctx.prisma.invoice.update({
      where: {
        id: input.id
      },
      data: {
        status: "Approved",
      },
    })
  }),
});
