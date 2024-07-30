import * as readlineSync from 'readline-sync';

interface Medicine {
    addMedicine() : string;
    // updateMedicine() : string;
    // deleteMedicine() : string;
    // listMedicine() : string;
}

    class Inventory implements Medicine{
    public id: number;
    private name:string;
    public quantity: number;
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
        while(inputOption != "5"){
            console.log("1.Agregar medicina 2.Actualizar 3.Eliminar 4.Listar Medicamentos  5.Salir");
            inputOption = readlineSync.question("De acuerdo al menu anterior ingresa la opcion que necesites:")
            if(inputOption == "1"){
                console.log("Elige la medicina que deseas agregar: 1.Ibuprofeno 2.Acetaminofen 3.Dolex 4.Advil");

                let inputMedicine : number | null = parseInt(readlineSync.question("De acuerdo al menu ingresa la medicina que deseas agregar:") || "");
                switch(inputMedicine){
                    case 1: 
                    let findIbuprofeno = findMedicineById(inputMedicine);
                    if(findIbuprofeno)
                    {
                        let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
                        findIbuprofeno.quantity = findIbuprofeno.quantity + inputQuantity;
                        console.log(medicines)
                    }
                    else{
                        let inputId : number | null = inputMedicine;
                        let inputName : string | null = "Ibuprofeno";
                        let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
                        let inputExpirationDate : string = readlineSync.question("Ingresa la fecha de caducidad:") || "";
                        let inputPrice : number | null = parseInt(readlineSync.question("Ingresa el precio:") || "");
                        let medicineInventory = new Inventory(inputId, inputName, inputQuantity,inputExpirationDate,inputPrice);
                        medicineInventory.addMedicine();
                    }
                    break;

                    case 2:
                        let findAcetaminofen = findMedicineById(inputMedicine);
                        if(findAcetaminofen)
                        {
                            let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
                            findAcetaminofen.quantity = findAcetaminofen.quantity + inputQuantity;
                            console.log(medicines)
                        }
                        else{
                            let inputId : number | null = inputMedicine;
                            let inputName : string | null = "Acetaminofen";
                            let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
                            let inputExpirationDate : string = readlineSync.question("Ingresa la fecha de caducidad:") || "";
                            let inputPrice : number | null = parseInt(readlineSync.question("Ingresa el precio:") || "");
                            let medicineInventory = new Inventory(inputId, inputName, inputQuantity,inputExpirationDate,inputPrice);
                            medicineInventory.addMedicine();
                        }
                    break;

                    case 3:
                        let findDolex = findMedicineById(inputMedicine);
                        if(findDolex)
                        {
                            let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
                            findDolex.quantity = findDolex.quantity + inputQuantity;
                            console.log(medicines)
                        }
                        else{
                            let inputId : number | null = inputMedicine;
                            let inputName : string | null = "Dolex";
                            let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
                            let inputExpirationDate : string = readlineSync.question("Ingresa la fecha de caducidad:") || "";
                            let inputPrice : number | null = parseInt(readlineSync.question("Ingresa el precio:") || "");
                            let medicineInventory = new Inventory(inputId, inputName, inputQuantity,inputExpirationDate,inputPrice);
                            medicineInventory.addMedicine();
                        }
                    break;

                    case 4:
                        let findAdvil = findMedicineById(inputMedicine);
                        if(findAdvil)
                        {
                            let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
                            findAdvil.quantity = findAdvil.quantity + inputQuantity;
                            console.log(medicines)
                        }
                        else{
                            let inputId : number | null = inputMedicine;
                            let inputName : string | null = "Dolex";
                            let inputQuantity : number | null = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
                            let inputExpirationDate : string = readlineSync.question("Ingresa la fecha de caducidad:") || "";
                            let inputPrice : number | null = parseInt(readlineSync.question("Ingresa el precio:") || "");
                            let medicineInventory = new Inventory(inputId, inputName, inputQuantity,inputExpirationDate,inputPrice);
                            medicineInventory.addMedicine();
                        }
                    break;
                }
            }                                                  
        }

        function findMedicineById(id: number): Inventory | undefined {
            for (let i = 0; i < medicines.length; i++) {
                if (medicines[i].id === id) {
                    return medicines[i];
                }
            }
            return undefined;
        }
        




        // function findMedicineById(id: number): Inventory | undefined {
        //     return medicines.find(medicine => medicine.id === id);
        // }



