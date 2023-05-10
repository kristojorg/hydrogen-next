import { getStorefrontApiUrl } from "@/shopify";

export default async function Home() {
  const api_url = getStorefrontApiUrl();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This should show my API url: {api_url}
    </main>
  );
}
