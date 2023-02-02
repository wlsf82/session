import SignupPage from '../pages/SignupPage'
var signup = new SignupPage

const options = { env: { snapshotOnly: true } }

describe('Cenarios de teste',options, function () {
    beforeEach(function () {
        cy.login()
        cy.fixture('mass').then((massa_de_dados) => {
            this.mass = massa_de_dados
        })
        
    })/*
    it('Login com sucesso', function () {
        const user = Cypress.env('user_name')
        const password = Cypress.env('user_password')
        const options = { cacheSession: false }
        cy.login(user, password, options)
    })*/
     /*-----------Tela de motorista-------------------------------*/
    it('Cadastrar um motorista', function () {
        cy.visit('/')
        signup.clickDriverList()
        signup.uploadImage()
        signup.resgisterDriver(this.mass.fillForm)
    })
    it('Buscar um motorista cadastrado', function () {
        signup.clickDriverList()
        signup.getUser(this.mass.fillForm)

    })
    it('editar um motorista', function () {
        signup.editRegister(this.mass.fillForm)
    })
    it('deletar um motorista', function () {
        signup.deleteDriver()
    })
    /*-------------Tela de veiculo-----------------------------*/
    it('Cadastrar um veiculo', function () {
        signup.login(this.mass.registration)
        signup.clickVehicleList()
        signup.uploadImage()
        signup.registerVeiche(this.mass.formVeiche)
    })
    it('Buscar um veiculo cadastrado', function () {
        signup.getUser(this.mass.fillForm)
    })
    it('deletar um veiculo', function () {
        signup.deleteVeiche()
    })
     /*------------Tela de empresa------------------------------*/
    it('Cadastrar uma empresa', function () {
        signup.login(this.mass.registration)
        signup.clickCompanyList()
        signup.registerBusiness(this.mass.formBusiness)
    })
    it('Buscar uma empresa cadastrada', function () {
        signup.getUser(this.mass.fillForm)
    })
    it('editar uma empresa', function () {
        signup.editRegister(this.mass.fillForm)
    })
    it('deletar uma empresa', function(){
        signup.deleteCompany()
    })
     /*--------------Cadastrar um ajudante----------------------------*/
    it('Cadastrar um ajudante', function () {
        signup.login(this.mass.registration)
        signup.clickHelperList()
        signup.uploadImage()
        signup.registerHelper(this.mass.fillForm)
    })
    it('Buscar um ajudante cadastrado', function () {
        signup.getUser(this.mass.fillForm)
    })
    it('editar um ajudante',function(){
        signup.editRegister(this.mass.fillForm)
    })
    it('deletar um ajudante', function () {
        signup.deleteHelper()
    })
     /*------------------------------------------*/

    
}) 