const faker = require("faker");
faker.locale = "zh_CN";
const User = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  website: faker.internet.website,
  address:
    faker.address.streetAddress() +
    faker.address.city() +
    faker.address.country(),
  bio: faker.lorem.sentences(),
  image: faker.image.avatar(),
  sentence: faker.lorem.sentences()
};

module.exports = User;
