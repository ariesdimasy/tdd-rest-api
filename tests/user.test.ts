import request from "supertest"
import app from "./../app"

describe("GET /api/users", () => {
    it("should return an array of users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.status).toBe(200)
        expect(response.body).toEqual({
            "message": "OK",
            "users": ["User 1", "User 2", "User 3"]
        })
    })
})