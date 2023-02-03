require("dotenv").config();
const {
  connectToMongodb,
  closeMongodbConnection,
} = require("../src/services/mongodb");
const { startApolloServer } = require("../src/services/apollo");

describe("Test Querying graphql apollo server", () => {
  let server;
  beforeAll(async () => {
    await connectToMongodb();
    server = await startApolloServer();
  });

  afterAll(async () => {
    await closeMongodbConnection();
  });

  test("Should return all products with 200 success and with no errors", async () => {
    const response = await server.executeOperation({
      query: "query getAllProducts {products { id }}",
    });
    expect(response.errors).toBeUndefined();
    expect(response.data).toBeDefined();
  });
});
