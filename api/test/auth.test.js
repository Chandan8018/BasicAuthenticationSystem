(async () => {
  const chai = await import("chai");
  const chaiHttp = await import("chai-http");
  const app = (await import("../index.js")).default; // Adjust path as per your project structure

  const { expect } = chai;
  chai.use(chaiHttp);

  describe("Authentication API", () => {
    it("should register a new user", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          username: "testuser",
          email: "test@example.com",
          password: "password123",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("userId");
          expect(res.body).to.have.property("username", "testuser");
          expect(res.body).to.have.property("email", "test@example.com");
          done();
        });
    });

    it("should login a user and return a JWT", (done) => {
      chai
        .request(app)
        .post("/api/auth/login")
        .send({ email: "test@example.com", password: "password123" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("userId");
          expect(res.body).to.have.property("username", "testuser");
          expect(res.body).to.have.property("email", "test@example.com");
          expect(res.body).to.have.property("token");
          done();
        });
    });

    it("should not register a user with missing fields", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({ username: "testuser", email: "test@example.com" }) // Missing password
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("statusCode", 400);
          expect(res.body).to.have.property(
            "message",
            "All fields are required"
          );
          done();
        });
    });

    it("should not login with incorrect password", (done) => {
      chai
        .request(app)
        .post("/api/auth/login")
        .send({ email: "test@example.com", password: "wrongpassword" })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("statusCode", 400);
          expect(res.body).to.have.property("message", "Invalid password");
          done();
        });
    });
  });
})();
