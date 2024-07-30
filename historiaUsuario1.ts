import * as readlineSync from 'readline-sync';

interface Medicine {
    addMedicine() : string;
    // updateMedicine() : string;
    // deleteMedicine() : string;
    // listMedicine() : string;
}

class Inventory implements Medicine{
    private id: number;
    private name:string;
    private quantity: number;
    private expirationDate: string;
    private price:number;

    constructor(id: number, name:string,  quantity: number, expirationDate: string, price:number){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.expirationDate = expirationDate;
        this.price = price;
    }

    addMedicine(): string {
        medicines.push(new Inventory(this.id,this.name,this.quantity,this.expirationDate,this.price));
        console.log(medicines);
        return "The medicine has been added successfully"

    }
}

let medicines: Inventory[] = [];

let inputOption : string | null = "0";
        while(inputOption != "2"){
            console.log("1.Agregar medicina     2.Salir");
            inputOption = readlineSync.question("De acuerdo al menú anterior ingresa la opción que necesites:")
            if(inputOption == "1"){

                console.log("Elige la medicina que deseas agregar: 1.Ibuprofeno 2.Acetaminofen 3.Dolex 4.Advil");
                let inputMedicine : number | null = parseInt(readlineSync.question("De acuerdo al menú ingresa la medicina que deseas agregar:") || "");
                switch(inputMedicine){
                    case 1: 
                    let inputId : number | null = inputMedicine;
                    let inputName : string | null = "Ibuprofeno";
                    let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
                    let inputExpirationDate : string = readlineSync.question("Ingresa la fecha de caducidad:") || "";
                    let inputPrice : number | null = parseInt(readlineSync.question("Ingresa el precio:") || "");
                    let prueba = new Inventory(inputId, inputName, inputQuantity,inputExpirationDate,inputPrice);
                    prueba.addMedicine();
                }
            }
        }



