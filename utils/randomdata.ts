import { faker } from '@faker-js/faker';

export class RandomData {

    static getFirstName() {

        return faker.person.firstName();

    }

    static getLastName() {

        return faker.person.lastName();

    }

    static getEmail() {

        return faker.internet.email();

    }

    static getPassword() {

        return faker.internet.password();

    }

}