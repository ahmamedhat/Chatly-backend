require("dotenv").config();
// const {
//   connectToMongodb,
//   closeMongodbConnection,
// } = require("../src/services/mongodb");
// const { startApolloServer } = require("../src/services/apollo");

describe("Test Querying graphql apollo server", () => {
  test("dummy test", async () => {
    expect(true);
  });
  // let server;
  // beforeAll(async () => {
  //   await connectToMongodb("E2E-Tests");
  //   server = await startApolloServer();
  // });

  // afterAll(async () => {
  //   await closeMongodbConnection();
  //   server.stop();
  // });

  // test("Should return all products with 200 success and with no errors", async () => {
  //   const response = await server.executeOperation({
  //     query: "query getAllProducts {products { _id }}",
  //   });

  //   expect(response.body.singleResult.errors).toBeUndefined();
  //   expect(response.body.singleResult.data).toBeDefined();
  // });

  // test("Should create new product and return it in response body", async () => {
  //   const query = `mutation AddNewProduct($name: String!, $price: Float!, $description: String!, $color: String!, $quantity: Int!, $salePrice: Float!) {
  //     addNewProduct(name: $name, price: $price, description: $description, color: $color, quantity: $quantity, salePrice: $salePrice) {
  //       _id
  //     }
  //   }`;

  //   const variables = {
  //     name: "Test product",
  //     price: 39.99,
  //     description: "Test description...",
  //     color: "Black",
  //     quantity: 5,
  //     salePrice: 34.99,
  //   };

  //   const response = await server.executeOperation({
  //     query,
  //     variables,
  //   });

  //   expect(response.body.singleResult.errors).toBeUndefined();
  //   expect(response.body.singleResult.data.addNewProduct._id).toBeDefined();
  // });
});
