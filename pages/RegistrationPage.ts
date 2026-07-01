import { Locator, Page ,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class RegistrationPage extends BasePage {

    

    readonly name: Locator;
    readonly email: Locator;
    readonly signupButton: Locator;
    readonly titleMr: Locator;
    readonly password: Locator;
    readonly day: Locator;
    readonly month: Locator;
    readonly year: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address1: Locator;
    readonly address2: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;

    readonly createAccountButton: Locator;
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;
    readonly enterAccountInformationHeading: Locator;

    constructor(page: Page) {

        super(page)

        this.name = page.locator("input[data-qa='signup-name']");
        this.email = page.locator("input[data-qa='signup-email']");
        this.signupButton = page.locator("button[data-qa='signup-button']");
        this.titleMr = page.locator("#id_gender1");

        this.password = page.locator("#password");

        this.day = page.locator("#days");

        this.month = page.locator("#months");

        this.year = page.locator("#years");

        this.firstName = page.locator("#first_name");

        this.lastName = page.locator("#last_name");

        this.company = page.locator("#company");

        this.address1 = page.locator("#address1");

        this.address2 = page.locator("#address2");

        this.country = page.locator("#country");

        this.state = page.locator("#state");

        this.city = page.locator("#city");

        this.zipcode = page.locator("#zipcode");

        this.mobileNumber = page.locator("#mobile_number");

        this.createAccountButton = page.locator("button[data-qa='create-account']");

        this.accountCreatedMessage = page.locator("b");

        this.continueButton = page.locator("a[data-qa='continue-button']");
        this.enterAccountInformationHeading = page.getByText("Enter Account Information");

    }

    async enterRegistrationDetails(name: string, email: string) {

        await this.name.fill(name);
        await this.email.fill(email);

    }

    async clickSignup() {

        await this.signupButton.click();

    }
    async completeRegistration(password: string) {

    await this.titleMr.check();

    await this.password.fill(password);

    await this.day.selectOption("10");

    await this.month.selectOption("5");

    await this.year.selectOption("1998");

    await this.firstName.fill("Gopi");

    await this.lastName.fill("Reddy");

    await this.company.fill("ABC Company");

    await this.address1.fill("Hyderabad");

    await this.address2.fill("Kukatpally");

    await this.country.selectOption("India");

    await this.state.fill("Telangana");

    await this.city.fill("Hyderabad");

    await this.zipcode.fill("500072");

    await this.mobileNumber.fill("9876543210");

    await this.createAccountButton.click();
    

}
    async verifyAccountCreated() {

    return await this.accountCreatedMessage.textContent();

}
async verifyEnterAccountInformationPage() {
    await expect(this.enterAccountInformationHeading).toBeVisible();
}
async clickContinue() {

    await this.continueButton.click();

}
}