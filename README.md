# schade

Full Stack E-Commerce Store with Content Management System using: Next.js 14 App Router, React and Prisma.


### Languages and Tools used

<img align="left" alt="NextJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
<img align="left" alt="TailwindCSS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
<img align="left" alt="ShadcnUI" width="30px" style="padding-right:10px;" src="/toolsIMG/shadcnui.png" />
<img align="left" alt="PlanetScale" width="30px" style="padding-right:10px;" src="/toolsIMG/planetscale-seeklogo.svg" />
<img align="left" alt="Prisma" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" />
<img align="left" alt="MySQL" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

<br />
<br />

## Features
- Front-End Features:
  - Implemented user interface for vewing billboards and products from each category, navigating each category using filters, adding items to the shopping cart and buying the products using Stripe.

- Back-End Features:
  - The admin dashboard serves as both CMS, Admin and API. It is highly customisable and provides API endpoints to allow you to connect and create functionality for your own needs.
  - Store Manager which allows admin to control multiple stores from this single CMS.
  - Admin is able to create, update and delete billboards/categories/products/colours/sizes for each store.
  - Dashboard which allows admin to view orders/sales/revenue of each store.
  - Used Cloudinary to store media such as product images and billboards.
  - Used Clerk Authentication for admin Authentication and Authorisation to ensure the user data remains secure.
  - Used Stripe checkout and webhooks to automated processes like payment processes and order updates.
  - Used MySQL, Prisma and PlanetScale to ensure efficient data storage and scalability, enabling backend to handle increased loads as the website grows.

For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

</br>

## How to use schade locally

First, install the packages:

```shell
npm i
```

After installing the packages, connect to PlanetScale and Push Prisma:

```shell
npx prisma generate
npx prisma db push
```

Lastly, run the development server (Admin MUST RUN FIRST, then frontend store):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the store.