const createProduct = async (ctx, accessToken, shop) => {
  const query = JSON.stringify({
    query: `mutation {
      productCreate(input: {title: "#1 test product", productType: "My test type"}) {
        userErrors {
          field
          message
        }
        product {
          id
          title
          productType
        }
      }
    }`
  });

  

  const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Shopify-Access-Token": accessToken,
    },
    body: query
  })

  const responseJson = await response.json();
  console.log(responseJson)
  const confirmationUrl = responseJson
  return ctx.redirect(confirmationUrl)
};

module.exports = createProduct;