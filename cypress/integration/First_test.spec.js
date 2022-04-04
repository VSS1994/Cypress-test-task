//Сильно не пинайте, я с автотестами только вчера познакомился :)
//Тесты написаны 04.04.2022

describe('Cypress Tests', () => {
    it('Proper login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Открыть страницу сайта')
            cy.visit(data.main_url)

            cy.log('Нажать Войти')
            cy.get('#main-menu > ul > li:nth-child(2) > a')
                .click()

            cy.log('Ввод имени для регистрации')
            cy.get('body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]')
                .type(data.main_name)

            cy.log('Ввод имейла для регистрации')
            cy.get('body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]')
                .type(data.main_email)
            
            cy.log('Ввод пароля для регистрации')
            cy.get('body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=password]')
                .type(data.main_password)
            
            cy.log('Нажать Регистрация')
            cy.get('body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input')
                .click()

            cy.wait(3000);
        })
    }) //Bug-1. Нет редиректа на страницу подтверждения регистрации

    it('Sign-in test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Нажать Войти')
            cy.get('#main-menu > ul > li:nth-child(2) > a')
                .click()

            cy.log('Ввести имейл для входа зарегистрированного польхователя')
            cy.get('body > div.content > div.row > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]')
                .type(data.main_email)

            cy.log('Ввести пароль для входа зарегистрированного польхователя')
            cy.get('body > div.content > div.row > div:nth-child(1) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]')
                .type(data.main_password)

            cy.log('Нажать Авторизоваться')
            cy.get('body > div.content > div.row > div:nth-child(1) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input')
                .click()
            
            cy.wait(3000);
        })
    }) //Bug-2. Нет редиректа на главную страницу после входа

    it('TestUser surch test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Нажать Пользователи')
            cy.get('#main-menu > ul > li:nth-child(1) > a')
                .click()
            
            cy.log('Ввести имя пользователя в поле Имейл/Имя')
            cy.get('body > div.content > form > table > tbody > tr:nth-child(4) > td > input')
                .type(data.main_name)
            
            cy.log('Нажать Найти')
            cy.get('body > div.content > form > table > tbody > tr:nth-child(5) > td:nth-child(1) > button')
                .click()
            
            cy.wait(3000);
        })
    }) //Дописать парсинг по выдаче таблицы для проверки наличия нового пользователя
})