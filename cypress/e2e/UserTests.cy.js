import BaseLib from "./Base/BaseLib";

describe("Petstore API TESTING", function () {

    const baseLib = new BaseLib
    var username = baseLib.randomUserName();
    var usernameUpdate = baseLib.randomUserName();

    it("POST /v2/user (User Create)", function () {

        const userInfo = {
            "id": 12139921309,
            "username": username,
            "firstName": "Test",
            "lastName": "QA",
            "email": "testqa@test.com",
            "password": "test123",
            "phone": "5456455658",
            "userStatus": 1
        }

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: userInfo
        }).then((response) => {
            expect(response.status).to.eq(200)
        })


    });


    it("PUT /v2/user/{username} (User Update)", function () {
        const userInfo = {
            "id": 12139921309,
            "username": usernameUpdate,
            "firstName": "Test",
            "lastName": "QA",
            "email": "testqa@test.com",
            "password": "test123",
            "phone": "5456455658",
            "userStatus": 1
        }

        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/' + username,
            body: userInfo
        }).then((response) => {
            expect(response.status).to.eq(200)
        })


    });


    it("GET /v2/user/{userName}", function () {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/' + usernameUpdate).then((response) => {
            expect(response.status).to.eq(200)
        })

    });



    it("GET /v2/user/login}", function () {
        const userInfo = {
            "username": usernameUpdate,
            "password": "rifat123"
        }

        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/login',
            query: userInfo
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    });


    it("Delete /v2/user/ (User Delete)", function () {

        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/' + usernameUpdate,
        }).then((response) => {
            expect(response.status).to.eq(200)
        })


    });

    it("GET /v2/user/{userName}", function () {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/' + usernameUpdate).then((response) => {
            expect(response.status).to.eq(404)
        })

    });

    it("GET /v2/user/logout", function () {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/logout').then((response) => {
            expect(response.status).to.eq(200)
        })

    });


});
