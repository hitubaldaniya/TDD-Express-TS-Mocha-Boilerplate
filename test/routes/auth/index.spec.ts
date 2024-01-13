import request from "supertest";
// import { expect } from 'chai';
import app from 'server';

describe("auth routes", function(){
    it("auth responds with 200", function(done){
        request(app).get("/auth").expect(200, done)
        console.log("--> auth/index.spec.ts")
    });
});