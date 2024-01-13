import request from "supertest";
// import { expect } from 'chai';
import app from "server";

describe("server checks", function(){
    it("server is running without error", function(done){
        request(app).get("/").expect(200, done)
        console.log("--> Server-Runs-Spec.ts")
    });
});