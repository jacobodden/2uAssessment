import { router } from "../trpc";
import { exampleRouter } from "./example";
import { invoiceRouter } from "./invoice";

export const appRouter = router({
  example: exampleRouter,
  invoice: invoiceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
