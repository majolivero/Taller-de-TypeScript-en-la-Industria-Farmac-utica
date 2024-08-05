import * as readlineSync from 'readline-sync';

interface Medicine {
    addMedicine(): string;
    updateMedicine(): string;
    deleteMedicine(): string;
}

class Inventory implements Medicine {
    public id: number;
    public name: string;
    public quantity: number;
    public expirationDate: string;
    public price: number;

    constructor(id: number, name: string, quantity: number, expirationDate: string, price: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.expirationDate = expirationDate;
        this.price = price;
    }

    // Agregar Medicina
    addMedicine(): string {
        medicines.push(new Inventory(this.id, this.name, this.quantity, this.expirationDate, this.price));
        console.log(medicines);
        return "The medicine has been added successfully";
    }

    updateMedicine(): string {
        let medicine: Inventory | undefined = findMedicineById(this.id);
        if (medicine) {
            medicine.name = this.name;
            medicine.quantity = this.quantity;
            medicine.expirationDate = this.expirationDate;
            medicine.price = this.price;
        }
        return "The medicine has been updated successfully";
    }

    deleteMedicine(): string {
        medicines = medicines.filter(medicine => medicine.id != this.id);
        return "The medicine has been deleted successfully";
    }
}

let medicines: Inventory[] = [];

let inputOption: string | null = "0";
while (inputOption != "5") {
    console.log("1. Agregar medicina 2. Actualizar 3. Eliminar 4. Listar Medicamentos  5. Salir");
    inputOption = readlineSync.question("De acuerdo al menu anterior ingresa la opcion que necesites:");
    if (inputOption == "1") {
        console.log("Elige la medicina que deseas agregar: 1. Ibuprofeno 2. Acetaminofen 3. Dolex 4. Advil");

        let inputMedicine: number | null = parseInt(readlineSync.question("De acuerdo al menu ingresa la medicina que deseas agregar:") || "");
        switch (inputMedicine) {
            case 1:
                let findIbuprofeno = findMedicineById(inputMedicine);
                if (findIbuprofeno) {
                    addExistantMedicine(findIbuprofeno);
                } else {
                    addNotExistantMedicine("Ibuprofeno", inputMedicine);
                }
                break;
            case 2:
                let findAcetaminofen = findMedicineById(inputMedicine);
                if (findAcetaminofen) {
                    addExistantMedicine(findAcetaminofen);
                } else {
                    addNotExistantMedicine("Acetaminofen", inputMedicine);
                }
                break;
            case 3:
                let findDolex = findMedicineById(inputMedicine);
                if (findDolex) {
                    addExistantMedicine(findDolex);
                } else {
                    addNotExistantMedicine("Dolex", inputMedicine);
                }
                break;
            case 4:
                let findAdvil = findMedicineById(inputMedicine);
                if (findAdvil) {
                    addExistantMedicine(findAdvil);
                } else {
                    addNotExistantMedicine("Advil", inputMedicine);
                }
                break;
        }
    } else if (inputOption == "2") {
        console.log("1. Ibuprofeno 2. Acetaminofen 3. Dolex 4. Advil");
        let inputMedicine: number | null = parseInt(readlineSync.question("De acuerdo al menu anterior ingresa la opcion que deseas actualizar:"));
        let medicine = findMedicineById(inputMedicine);
        updateExistantMedcine(medicine);
    } else if (inputOption == "3") {
        console.log("1. Ibuprofeno 2. Acetaminofen 3. Dolex 4. Advil");
        let inputMedicine: number | null = parseInt(readlineSync.question("De acuerdo al menu anterior ingresa la opcion que deseas eliminar:"));
        let medicine = findMedicineById(inputMedicine);
        medicine?.deleteMedicine();
    } else if (inputOption == "4") {
        console.log(medicines);
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

function addExistantMedicine(medicine: Inventory): void {
    let inputQuantity: number | null = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
    medicine.quantity = medicine.quantity + inputQuantity;
    console.log(medicines);
}

function addNotExistantMedicine(inputName: string, inputMedicine: number): void {
    let inputId: number = inputMedicine;
    let inputQuantity: number | null = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
    let inputExpirationDate: string = readlineSync.question("Ingresa la fecha de caducidad:") || "";
    let inputPrice: number | null = parseInt(readlineSync.question("Ingresa el precio:") || "");
    let medicineInventory = new Inventory(inputId, inputName, inputQuantity, inputExpirationDate, inputPrice);
    medicineInventory.addMedicine();
}

function updateExistantMedcine(medicine: Inventory | undefined): void {
    let inputQuantity: number = 0;
    let inputExpirationDate: string = "";
    let inputPrice: number = 0;
    if (medicine) {
        let updateQuantity: number | null = parseInt(readlineSync.question("Desea actualizar la cantidad? 1.Si 2.No"));
        if (updateQuantity == 1) {
            inputQuantity = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
        } else {
            inputQuantity = medicine.quantity;
        }

        let updateExpirationDate: number | null = parseInt(readlineSync.question("Desea actualizar la fecha de expiracion? 1.Si 2.No"));
        if (updateExpirationDate == 1) {
            inputExpirationDate = readlineSync.question("Ingresa la fecha de caducidad:") || "";
        } else {
            inputExpirationDate = medicine.expirationDate;
        }

        let updatePrice: number | null = parseInt(readlineSync.question("Desea actualizar el precio? 1.Si 2.No"));
        if (updatePrice == 1) {
            inputPrice = parseInt(readlineSync.question("Ingresa el precio:") || "");
        } else {
            inputPrice = medicine.price;
        }

        let medicineInventory = new Inventory(medicine.id, medicine.name, inputQuantity, inputExpirationDate, inputPrice);
        medicineInventory.updateMedicine();
    }
}