const request = require("supertest");
const app = require("../src/index");

describe("Express app", () => {
  test("GET / returns greeting", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(typeof res.body.message).toBe("string");
  });

  test("GET /health returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
    expect(res.body).toHaveProperty("uptime");
  });
});
