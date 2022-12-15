# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.


---

# 2uAssessment - Requirements
The business analyst assigned to your sprint team has presented you with two
user stories to complete this sprint. This assessment asks you to complete these
story cards to the best of your ability. 

The assessment is more about creating a working solution that meets as many of
the acceptance criteria as possible than it is about getting every detail
perfect. It is not necessary to complete every acceptance criteria to submit the
assessment. Complete what you can and leave "TODO:" comments with appropriate
placeholder instructions anywhere you are unable to complete your code. You must
turn the assignment by the end of the third day after you are given the
assignment.

Fork this repo and push the code to your new forked repo. Submit the forked
repo's URL to greg@2ulaundry.com

## User story 1
As a vendor supplying services to 2ULaundry I need to submit invoices via an API
in order to receive payment in a timely manner.

### Acceptance criteria
1. The API accepts JSON formatted HTTP POST requests at the route '/Invoice' The
   following is a sample Invoice request that will be submitted to the API
   endpoint.

```javascript
{
  "invoice_number": "12345",
  "total": "199.99",
  "currency": "USD",
  "invoice_date": "2019-08-17",
  "due_date": "2019-09-17",
  "vendor_name": "Acme Cleaners Inc.",
  "remittance_address": "123 ABC St. Charlotte, NC 28209"
}
```

2. The API returns an HTTP 200 Response code and the following message body

```javascript
{
  "message": "invoice submitted successfully"
}
```

3. Store the invoices in a data store of your choice with an additional property
   and value "status": "pending" 

## User story 2
As a member of the 2ULaundry Accounting Team I need to see a list of invoices
that have been submitted by vendors, but have not yet been approved for payment
so that I can review and approve them.


### Acceptance criteria
1. Create an interface with react.js that shows a list of unapproved invoices
   that are submitted via API described in user story #1.
2. Display the following fields for each invoice:"Invoice Number", "Vendor
   Name", "Vendor Address", "Invoice Total", "Invoice Date", "Due Date"
3. Create a solution that allows the user to select and approve invoices. Once
   an invoice is "Approved" it should dissappear from the list of available
   invoices.
4. When the user approves an invoice the "status" property for that invoice
   should be updated to "Approved"
5. When an invoice is submitted via the API from user story #1, it should
   populate in the list of displayed invoices without requiring the user to
   manually refresh the list of invoices.
