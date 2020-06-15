const getSubscriptionUrl = async (ctx, accessToken, shop) => {
    const query = JSON.stringify({
      query: `mutation appPurchaseOneTimeCreate(
                $name: "One Time Purchase", 
                $price: { amount: 10, currencyCode: USD }, 
                returnUrl: "${process.env.HOST}") {
          appPurchaseOneTime {
            id
          }
          confirmationUrl
          userErrors {
            field
            message
          }
      }
      `
    }
);
  
    const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: query
    })
  
    const responseJson = await response.json();
    const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl
    return ctx.redirect(confirmationUrl)
  };
  
  module.exports = getSubscriptionUrl;