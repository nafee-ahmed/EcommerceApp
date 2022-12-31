import axios from "axios";

export const backendLink = "http://localhost:3001/api";

export const ax = axios.create({
  baseURL: backendLink,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const tealColor = "#25ACB2";

export const STRIPE_PUBLISHABLE_KEY = "pk_test_51ML03uI2q0PGq3qgtvMINgENrQ29m3uP9vv50aVQFgXfFgw2nq5ZWei2r6O26bv7SzEsHLIGomTQFLqZyFRcFHZK007QpvAhb6"
