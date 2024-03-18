// TypeScript offers a couple of key ways to define the structure of objects - classes and interfaces.
// You may be wondering when it's best to use each.
// This interface could be used in a shared module for both your client and server code,
// ensuring the data structure is the same on both sides. On the client,
// you might have code to retrieve the dog from the server API you define, which looks like the following:
async;
loadDog(id, number);
Dog;
{
    return await(await fetch('demoUrl')).json();
}
var DogRecord = /** @class */ (function () {
    function DogRecord(_a) {
        var name = _a.name, age = _a.age, description = _a.description, _b = _a.id, id = _b === void 0 ? 0 : _b;
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    DogRecord.load = function (_id) {
        // code to load dog from database
        return dog;
    };
    DogRecord.prototype.save = function () {
        // code to save dog to database
    };
    return DogRecord;
}());
function loadDog(id, number) {
    throw new Error("Function not implemented.");
}
