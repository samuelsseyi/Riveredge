# Riveredge Restaurant — independent website concept

React, TypeScript, Vite and Tailwind prototype for Vercel. It has no backend, payments, email delivery or restaurant system connection.

## Run

```sh
npm install
npm run dev
npm run build
```

Deploy the repository as a Vite project on Vercel. `vercel.json` provides route fallback for direct navigation.

## Owner review before any public launch

- Confirm hours in `src/data/content.ts`. The [official homepage](https://riveredgerestaurant.ca/) currently says Monday closed and Tuesday–Sunday 9 am–8:30 pm, while the [contact page](https://riveredgerestaurant.ca/contact/) differs for Sunday and has an incomplete Friday/Saturday entry.
- Replace the illustrative menu data and prices in `src/data/content.ts` with owner-approved entries from the [official menu](https://riveredgerestaurant.ca/menu/). Every current item and amount is labelled as concept content in the interface.
- Replace concept photographs with authorized Riveredge photographs. Current local dining images are Unsplash concept photography and are visibly labelled throughout. Source IDs: `photo-1533089860892-a7c6f0a88666`, `photo-1414235077428-338989a2e8c0`, `photo-1547592180-85f173990554`. The Ontario river image is AI-generated illustrative scenery and is also clearly labelled as a concept image.
- Review all service wording, especially catering arrangements, before representing it as a live offer.

The historical claims in the site follow the [official homepage](https://riveredgerestaurant.ca/), which describes Riveredge's 1930s establishment, location beside the Maskinonge River, Douglas fir beams and homestyle meals. The [official menu page](https://riveredgerestaurant.ca/menu/) describes catering, large reservations and small groups.

## Demo behavior

Cart, event inquiry and reservation progress stay in browser localStorage. The footer’s **Explore the Concept** control opens each journey and resets all demo data. Completion screens state that nothing was sent or booked. The site sets `noindex,nofollow` metadata.
