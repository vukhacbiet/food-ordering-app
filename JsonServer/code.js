const faker = require('@faker-js/faker');
const fs = require('fs');

function generateData() {
    let dataarray = []
    console.log(faker.faker)
    for(let id=1; id<=100; id++){
        let firstName = faker.faker.name.firstName();
        let middleName = faker.faker.name.middleName();
        let lastName = faker.faker.name.lastName();
        let gender = faker.faker.name.gender();
        let contact = faker.faker.phone.phoneNumber();
        let username = faker.faker.internet.userName();
        let email = faker.faker.internet.email();

        dataarray.push({
            "firstName":firstName,
            "middleName":middleName,
            "lastName":lastName,
            "gender":gender,
            "contact":contact,
            "username":username,
            "email":email,

        });
    }
    return {
        "data":dataarray
    }
}

let dataObj = generateData();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));