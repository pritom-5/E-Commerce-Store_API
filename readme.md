# Store API (backend portion of e-commerce app)

# Routes
| Method | Details           | URL                                                                                                                       |
|--------|-------------------|---------------------------------------------------------------------------------------------------------------------------|
| GET    | All products      | /api/products                                                                                                             |
| GET    | Filtered Products | /api/products?name="search"&price[lte]=400&price[gte]=100&company="ikea"&rating[lte]=4&rating[gte]=1&featured=true&page=2 |
|        |                   |                                                                                                                           |
# Tech used

- Express js.
- MongoDb
- Mongoose
- Node js.
- JS

# Run the app on local machine

clone or download the repo.

- run `npm i`
- add `.env` file with `PORT` and `MONGODB_URI`
- `npm run dev` to start
