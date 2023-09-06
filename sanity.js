import { createClient } from "@sanity/client";

const clients = createClient({
  projectId: "o1bqd984",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export default clients;
