require("dotenv").config();
const {
  connectToMongodb,
  closeMongodbConnection,
} = require("../src/services/mongodb");
const { startApolloServer } = require("../src/services/apollo");

describe("Test Querying graphql apollo server", () => {
  let server;
  beforeAll(async () => {
    await connectToMongodb("E2E-Tests");
    server = await startApolloServer();
  });

  afterAll(async () => {
    await closeMongodbConnection();
    server.stop();
  });

  test("Should return all orders with 200 success and with no errors", async () => {
    const response = await server.executeOperation({
      query: "query getAllOrders {orders { _id }}",
    });

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data).toBeDefined();
  });

  test("Should create new order and return it in response body", async () => {
    const query = `mutation MakeNewOrder($name: String!, $email: String!, $total: Float!) {
      makeNewOrder(name: $name, email: $email, total: $total) {
        _id
      }
    }`;

    const variables = {
      name: "Test order",
      email: "test@gmail.com",
      total: 254.99,
    };

    const response = await server.executeOperation({
      query,
      variables,
    });
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data.makeNewOrder._id).toBeDefined();
  });
});
