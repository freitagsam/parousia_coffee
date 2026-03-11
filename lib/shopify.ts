// Shopify Storefront API client — configure once you have your store credentials

const domain  = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN  ?? ''
const token   = process.env.NEXT_PUBLIC_SHOPIFY_TOKEN   ?? ''
const endpoint = `https://${domain}/api/2024-01/graphql.json`

async function shopifyFetch(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  })
  return res.json()
}

export async function getProducts() {
  const { data } = await shopifyFetch(`{
    products(first: 20) {
      edges {
        node {
          id title handle
          priceRange { minVariantPrice { amount } }
          images(first: 1) { edges { node { url altText } } }
          variants(first: 1) { edges { node { id } } }
        }
      }
    }
  }`)
  return data?.products?.edges?.map((e: any) => e.node) ?? []
}

export async function createCart(variantId: string, quantity = 1) {
  const { data } = await shopifyFetch(`
    mutation {
      cartCreate(input: {
        lines: [{ quantity: ${quantity}, merchandiseId: "${variantId}" }]
      }) {
        cart { id checkoutUrl }
      }
    }
  `)
  return data?.cartCreate?.cart
}
