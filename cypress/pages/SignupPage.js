class SignupPage {

    login(mass) {
        cy.visit('/')
        cy.get('.btn-xs').click()
        cy.get('#email').type(mass.user)
        cy.get('#password').type(mass.password)
        cy.get('.btn-primary').click()
    }
    assertionUser(){
        cy.contains('Teste automacao')
    }
    clickDriverList() {
        cy.get(':nth-child(8) > .sidebar-header > .fa').click()
        cy.get('.sidebar-submenu > :nth-child(4) > a').click()
    }
    clickHelperList() {
        cy.get(':nth-child(8) > .sidebar-header > .fa').click()
        cy.get('.sidebar-submenu > :nth-child(5) > a').click()
    }
    clickCompanyList() {
        cy.get(':nth-child(8) > .sidebar-header > .fa').click()
        cy.get('li.active > .sidebar-submenu > :nth-child(2) > a').click()
    }
    clickVehicleList() {
        cy.get(':nth-child(8) > .sidebar-header > .fa').click()
        cy.get('.sidebar-submenu > :nth-child(3) > a').click()
    }
    deleteDriver(){
        cy.get('.sc-jzJRlG > svg > [cy="12"]').first().click().type('{downArrow}{downArrow}{downArrow}{downArrow}{enter}')
        cy.get('button[class="btn btn-lg btn-primary "]').click()
        cy.contains('O motorista foi excluído com sucesso!')
    }
    deleteVeiche(){
        cy.get('.sc-jzJRlG > svg > [cy="12"]').first().click().type('{downArrow}{downArrow}{enter}')
        cy.get('button[class="btn btn-lg btn-primary "]').click()
        cy.contains('O veículo foi excluído com sucesso!')
    }
    deleteHelper(){
        cy.get('.sc-jzJRlG > svg > [cy="12"]').first().click().type('{downArrow}{downArrow}{downArrow}{enter}')
        cy.get('button[class="btn btn-lg btn-primary "]').click()
        cy.contains('O ajudante foi excluído com sucesso!')

    }
    deleteCompany(){
        cy.get('.sc-jzJRlG > svg > [cy="12"]').first().click().type('{downArrow}{downArrow}{enter}')
        cy.get('button[class="btn btn-lg btn-primary "]').click()
        cy.contains('A empresa foi excluída com sucesso!')
    }
    editRegister(mass){
        cy.get('.sc-jzJRlG > svg > [cy="12"]').first().click()
        cy.contains('editar').click()
        cy.get('#name').clear().type(mass.nameFake)
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('nao exclua')
    }

    getUser(mass) {
        cy.get('.form-control').type(mass.name + '{enter}').wait(5000)
        cy.contains('Teste automacao')
    }
    registerBusiness(mass) {
        cy.get('.btn-primary').click()
        cy.get('#name').type(mass.name)
        cy.get('#zip_code').type(mass.zipCode)
        cy.get('#legal_name').type(mass.corporateName).wait(1000)
        cy.get('#email').type(mass.email)
        cy.get('#cnpj').type(mass.cnpj)
        cy.get('#street_number').type(mass.number)
        cy.get('.modal-footer > .btn-primary').click().wait(3000)
    }
    registerHelper(mass){
        cy.get('.css-19bb58m').type('gabriel{enter}')
        cy.get('#name').type(mass.name)
        cy.get('#cpf').type(mass.cpf)
        cy.get('#rg').type(mass.rg)
        cy.get('#zip_code').type(mass.adress.zipCode).wait(1000)
        cy.get('#street_number').type(mass.adress.number)
        cy.get('#cellphone').type(mass.phoneHelper)
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(5000)
    }
    resgisterDriver(mass) {
        cy.get(':nth-child(2) > .col-sm-10 > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').type('{downArrow}{enter}')
        cy.get('#group_name').type(mass.group)
        cy.get('#name').type(mass.name)
        cy.get('#cpf').type(mass.cpf)
        cy.get('#rg').type(mass.rg)
        cy.get('#license').type(mass.cnh)
        cy.get('#zip_code').type(mass.adress.zipCode)
        cy.get('#license_validity').type(mass.validity).wait(1000)
        cy.get('#street_number').type(mass.adress.number)
        cy.get('#cellphone').type(mass.phone)
        cy.get('#email').type(mass.email)
        cy.get(':nth-child(14) > .col-sm-10 > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').type('{enter}')
        cy.get('[style="float: right;"] > .btn-primary').click()
        cy.wait(5000)
    }
    registerVeiche(mass) {
        cy.get('#plate').type(mass.plate)
        cy.get('#capacity').type(mass.capacity)
        cy.get(':nth-child(2) > .col-sm-10 > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').type('{downArrow}{enter}')
        cy.get(':nth-child(3) > .col-sm-10 > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').type('teste automacao{enter}')
        cy.get('.modal-footer > .btn-primary').click().wait(5000)

    }     
    
    uploadImage() {
        const upload = ('image.jpg')
        cy.get('.btn-primary').click()
        cy.get('.sc-jhAzac > span').selectFile(upload, {
            action: 'drag-drop'
        })

    }
}
export default SignupPage;