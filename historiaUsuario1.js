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
    // Agregar Medicina
    Inventory.prototype.addMedicine = function () {
        medicines.push(new Inventory(this.id, this.name, this.quantity, this.expirationDate, this.price));
        console.log(medicines);
        return "The medicine has been added successfully";
    };
    Inventory.prototype.updateMedicine = function () {
        var medicine = findMedicineById(this.id);
        if (medicine) {
            medicine.name = this.name;
            medicine.quantity = this.quantity;
            medicine.expirationDate = this.expirationDate;
            medicine.price = this.price;
        }
        return "The medicine has been updated successfully";
    };
    Inventory.prototype.deleteMedicine = function () {
        var _this = this;
        medicines = medicines.filter(function (medicine) { return medicine.id != _this.id; });
        return "The medicine has been deleted successfully";
    };
    return Inventory;
}());
var medicines = [];
var inputOption = "0";
while (inputOption != "5") {
    console.log("1. Agregar medicina 2. Actualizar 3. Eliminar 4. Listar Medicamentos  5. Salir");
    inputOption = readlineSync.question("De acuerdo al menu anterior ingresa la opcion que necesites:");
    if (inputOption == "1") {
        console.log("Elige la medicina que deseas agregar: 1. Ibuprofeno 2. Acetaminofen 3. Dolex 4. Advil");
        var inputMedicine = parseInt(readlineSync.question("De acuerdo al menu ingresa la medicina que deseas agregar:") || "");
        switch (inputMedicine) {
            case 1:
                var findIbuprofeno = findMedicineById(inputMedicine);
                if (findIbuprofeno) {
                    addExistantMedicine(findIbuprofeno);
                }
                else {
                    addNotExistantMedicine("Ibuprofeno", inputMedicine);
                }
                break;
            case 2:
                var findAcetaminofen = findMedicineById(inputMedicine);
                if (findAcetaminofen) {
                    addExistantMedicine(findAcetaminofen);
                }
                else {
                    addNotExistantMedicine("Acetaminofen", inputMedicine);
                }
                break;
            case 3:
                var findDolex = findMedicineById(inputMedicine);
                if (findDolex) {
                    addExistantMedicine(findDolex);
                }
                else {
                    addNotExistantMedicine("Dolex", inputMedicine);
                }
                break;
            case 4:
                var findAdvil = findMedicineById(inputMedicine);
                if (findAdvil) {
                    addExistantMedicine(findAdvil);
                }
                else {
                    addNotExistantMedicine("Advil", inputMedicine);
                }
                break;
        }
    }
    else if (inputOption == "2") {
        console.log("1. Ibuprofeno 2. Acetaminofen 3. Dolex 4. Advil");
        var inputMedicine = parseInt(readlineSync.question("De acuerdo al menu anterior ingresa la opcion que deseas actualizar:"));
        var medicine = findMedicineById(inputMedicine);
        updateExistantMedcine(medicine);
    }
    else if (inputOption == "3") {
        console.log("1. Ibuprofeno 2. Acetaminofen 3. Dolex 4. Advil");
        var inputMedicine = parseInt(readlineSync.question("De acuerdo al menu anterior ingresa la opcion que deseas eliminar:"));
        var medicine = findMedicineById(inputMedicine);
        medicine === null || medicine === void 0 ? void 0 : medicine.deleteMedicine();
    }
    else if (inputOption == "4") {
        console.log(medicines);
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
function addExistantMedicine(medicine) {
    var inputQuantity = parseInt(readlineSync.question("Ingresa la cantidad que desea agregar:") || "");
    medicine.quantity = medicine.quantity + inputQuantity;
    console.log(medicines);
}
function addNotExistantMedicine(inputName, inputMedicine) {
    var inputId = inputMedicine;
    var inputQuantity = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
    var inputExpirationDate = readlineSync.question("Ingresa la fecha de caducidad:") || "";
    var inputPrice = parseInt(readlineSync.question("Ingresa el precio:") || "");
    var medicineInventory = new Inventory(inputId, inputName, inputQuantity, inputExpirationDate, inputPrice);
    medicineInventory.addMedicine();
}
function updateExistantMedcine(medicine) {
    var inputQuantity = 0;
    var inputExpirationDate = "";
    var inputPrice = 0;
    if (medicine) {
        var updateQuantity = parseInt(readlineSync.question("Desea actualizar la cantidad? 1.Si 2.No"));
        if (updateQuantity == 1) {
            inputQuantity = parseInt(readlineSync.question("Ingresa la cantidad:") || "");
        }
        else {
            inputQuantity = medicine.quantity;
        }
        var updateExpirationDate = parseInt(readlineSync.question("Desea actualizar la fecha de expiracion? 1.Si 2.No"));
        if (updateExpirationDate == 1) {
            inputExpirationDate = readlineSync.question("Ingresa la fecha de caducidad:") || "";
        }
        else {
            inputExpirationDate = medicine.expirationDate;
        }
        var updatePrice = parseInt(readlineSync.question("Desea actualizar el precio? 1.Si 2.No"));
        if (updatePrice == 1) {
            inputPrice = parseInt(readlineSync.question("Ingresa el precio:") || "");
        }
        else {
            inputPrice = medicine.price;
        }
        var medicineInventory = new Inventory(medicine.id, medicine.name, inputQuantity, inputExpirationDate, inputPrice);
        medicineInventory.updateMedicine();
    }
}
