# Mesob Habesha Kitchen

A Next.js restaurant menu app. It has the same structure as the book-store project, with books replaced by Habesha dishes.

## Run it

```bash
npm install
cp .env.example .env.local   # then edit the values
npm run dev
```

Open http://localhost:3000.

## Demo accounts

- Customer: `ephrem@example.com` / `1234`
- Staff: `staff@example.com` / `1234` (can open `/kitchen`)

## What replaced what

| Book store | Habesha menu |
| --- | --- |
| `app/books` (`/books`) | `app/menu` (`/menu`) |
| `app/books/[id]` | `app/menu/[id]` |
| `app/data/books.js` | `app/data/dishes.js` |
| `app/data/reviews.js` (`bookId`) | `app/data/reviews.js` (`dishId`) |
| `lib/books.js` | `lib/dishes.js` |
| `app/api/books` | `app/api/dishes` |
| `BookCard`, `BookList`, `BookSkeleton` | `DishCard`, `DishList`, `DishSkeleton` |
| `PaginatedBooks`, `BookQuery` | `PaginatedDishes`, `DishQuery` |
| `bookId` in orders and checkout | `dishId` |
| `public/books/*.jpg` | `public/dishes/*.svg` (placeholders, replace with photos) |

Everything else (cart, checkout, orders, sign in, kitchen, dashboard, delivery map, middleware) keeps the same file names.

## Edit the menu

Change dishes and prices in `app/data/dishes.js`. To use real photos, drop `.jpg` files into `public/dishes/` and update the `image` field.
The simulated loading delay is in `lib/delay.js`.
