import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  privateStorefrontToken: "{access-token}",
  storeDomain: "{store-domain}",
  storefrontApiVersion: "2023-04",
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
