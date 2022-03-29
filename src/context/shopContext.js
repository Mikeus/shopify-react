import React, { Component } from 'react'
import Client from 'shopify-buy'

const SHOP_URL = process.env.development.local.SHOP_URL
const STOREFRONT_API_ACCESS_TOKEN =
  process.env.development.local.STOREFRONT_API_ACCESS_TOKEN

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: SHOP_URL,
  storefrontAccessToken: STOREFRONT_API_ACCESS_TOKEN,
})

class ShopProvider extends Component {
  render() {
    return <div>shopContext</div>
  }
}

export default ShopProvider
