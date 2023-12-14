import { createClient } from "@sanity/client";

const clients = createClient({
  projectId: "o1bqd984",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21", 
});

export default clients;
