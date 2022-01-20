import { Client, Commerce, CommercialClient, Customer, IndustrialClient, Industry, Place, Residence, ResidentialClient, User } from "./types"

//HERANÇA

//EXERCICIO 1 - HERANÇA

const newUser: User = new User ("1", "luiz@gmail.com", "Luiz", "123321")

console.log({id: newUser.getId(), name: newUser.getName(), email: newUser.getEmail()})

// //EXERCICIO 2 - HERANÇA

const newCustomer: Customer = new Customer ("2", "ricardo@gmail.com", "Ricardo", "456456", "Visa")

console.log(newCustomer)

// //EXERCICIO 4 - HERANÇA

console.log(newCustomer.introduceYourself())

// //POLIMORFISMO

// //EXERCICIO 1 - POLIMORFISMO

const newClient: Client = {
    name: "Mari",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}

console.log(newClient)

// //EXERCICIO 2 - POLIMORFISMO

/*const newPlace: Place = new Place ("01234567")

console.log(newPlace)*/

// //EXERCICIO 3 - POLIMORFISMO

const newResidence: Residence = new Residence(3, "12345678")

const newCommerce: Commerce = new Commerce(5, "87654321")

const newIndustry: Industry = new Industry(7, "02466420")

console.log({residenceCEP: newResidence.getCep(),commerceCEP: newCommerce.getCep(),industryCEP: newIndustry.getCep()})

//EXERCICIO 4 - POLIMORFISMO

const newResidentialClient: ResidentialClient = new ResidentialClient ("Clara", 1, 10, "333.555.777-99", 2, "12345678")

console.log(newResidentialClient)
console.log(newResidentialClient.calculateBill())

//EXERCICIO 5 - POLIMORFISMO

const newCommercialClient: CommercialClient = new CommercialClient ("Doces Illes", 2, 10, "11.222.444/0001-66", 1, "87654321")

console.log(newCommercialClient)
console.log(newCommercialClient.calculateBill())

//EXERCICIO 6 - POLIMORFISMO

const newIndustrialClient: IndustrialClient = new IndustrialClient ("Illes S/A", 3, 10, 2022/2021, 4, "02461357")

console.log(newIndustrialClient)
console.log(newIndustrialClient.calculateBill())