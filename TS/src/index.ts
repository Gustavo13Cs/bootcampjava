// tipos primitivos: boolean, number,string
let ligado: boolean = false;
let nome: string = "Gustavo";
let idade: number = 30;

//tipos especiais 
//null
//undefined 

//tipos abrangentes any e void 


//objeto - sem previsilibidade

let produto:object = {
    name: "falipe",
    cidade: "sp",
    idade: 30,
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

// arrays

let dados: string[] = ["Gustavo", "Ana", "Felipe"] // ou 
let dados2: Array<string> = ["Gustavo", "Ana", "Felipe"] 

// VARIOS TIPOS NE UM ARRAY
let infos: (string | number)[] = ["fELIPE","2"]

// Tuplas tem que seguir a exata ordem

let boleto:[string,number,number] = ["agua conta", 199.9, 19.90]

// array metodos

dados.map, dados.filter,dados.slice //etc isso tem no JS 

//Datas

let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());