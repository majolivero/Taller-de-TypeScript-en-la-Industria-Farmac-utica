"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Inventory = /** @class */ (function () {
    function Inventory(id, name, quantity, expirationDate, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.expirationDate = expirationDate;
        this.price = price;
    }
    Inventory.prototype.addMedicine = function () {
        medicines.push(new Inventory(this.id, this.name, this.quantity, this.expirationDate, this.price));
        console.log(medicines);
        return "The medicine has been added successfully";
    };
    return Inventory;
}());
var medicines = [];
var inputOption = "0";
while (inputOption != "5") {
    console.log("1.Agregar medicina 2.Actualizar 3.Eliminar 4.Listar Medicamentos  5.Salir");
    inputOption = readlineSync.question("De acuerdo al menu anterior ingresa la opcion que necesites:");
    if (inputOption == "1") {
        console.log("Elige la medicina que deseas agregar: 1.Ibuprofeno 2.Acetaminofen 3.Dolex 4.Advil");
        var inputMedicine = parseInt(readlineSync.question("De acuerdo al menu ingresa la medicina que deseas agregar:") || "");
        switch (inputMedicine) {
            case 1:
                var findMedicine = findMedicineById(inputMedicine);
                if (findMedicine) {
                    var inputQuantity = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
                    findMedicine.quantity = findMedicine.quantity + inputQuantity;
                    console.log(medicines);
                }
                else {
                    var inputId = inputMedicine;
                    var inputName = "Ibuprofeno";
                    var inputQuantity = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
                    var inputExpirationDate = readlineSync.question("Ingresa la fecha de caducidad:") || "";
                    var inputPrice = parseInt(readlineSync.question("Ingresa el precio:") || "");
                    var medicineInventory = new Inventory(inputId, inputName, inputQuantity, inputExpirationDate, inputPrice);
                    medicineInventory.addMedicine();
                }
                break;
        }
    }
}
function findMedicineById(id) {
    for (var i = 0; i < medicines.length; i++) {
        if (medicines[i].id === id) {
            return medicines[i];
        }
    }
    return undefined;
}
// function findMedicineById(id: number): Inventory | undefined {
//     return medicines.find(medicine => medicine.id === id);
// }
