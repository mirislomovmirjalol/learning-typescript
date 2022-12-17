// no error on optional property, remove it and see what happens
const car: { type: string, mileage: number } = {
    type: "Toyota",
    mileage: 3000
};

console.log(car.type);