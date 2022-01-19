/* 
Exercício 1

A - O construtor serve para inicializar variáveis atribuídas na classe. 
    Chamamos o construtor através de uma nova instancia, usando new e o nome da classe.

B - Uma vez.

C - Conseguimos ter acesso através de 2 formas. 
    A primeira através de dentro da própria classe usando "THIS".
    E a segunda através dos métodos públicos chamados de getters e setters.

type Transaction = {
    description: string
    value: number
    date: string
}

class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 0
    private transactions: Transaction[] = []
  
    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf
        this.name = name
        this.age = age
    }
}

const newUser = new UserAccount("000.111.222-33", "Jon Snow", 25)

console.log(newUser)
*/

/*
Exercício 2
*/

class Transaction {
    private date: string
    private value: number
    private description: string
  
    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }

    getDate(): string {
        return this.date
    }

    getValue(): number {
        return this.value
    }

    getDescription(): string {
        return this.description
    }
}

class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 0
    private transactions: Transaction[] = []
  
    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf
        this.name = name
        this.age = age
    }

    getCPF(): string {
        return this.cpf
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }

    getBalance(): number {
        return this.balance
    }

    getTransactions(): Transaction[] {
        return this.transactions
    }

    setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const newTransaction = new Transaction("07/01/2022", 100, "Boleto Net")

const newUser = new UserAccount("000.111.222-33", "Jon Snow", 25)

newUser.setTransactions(newTransaction)
console.log(newUser)

/*
Exercício 3
*/

class Bank {
    private accounts: UserAccount[]
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts
    }

    getAccounts(): UserAccount[] {
        return this.accounts
    }

    setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
}