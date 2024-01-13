import request from "supertest";
// import { expect } from 'chai';
import app from 'server';

describe("dashboard routes", function(){
    it("dashboard responds with 200", function(done){
        request(app).get("/dashboard").expect(200, done)
        console.log("--> dashboard/index.spec.ts")
    });
});