/*- Write an object with field name.

  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]*/

const obj = {
    _name: [],

    get name() {
        return obj._name;
    },

    set name(value) {
        let [hovo, sona] = value.split(", ");
        if (hovo.length > 0 && sona.length > 0) {
            obj._name[0] = [hovo, hovo.length];
            obj._name[1] = [sona, sona.length];
        } else {
            return "Not a valid name";
        }  
    },
}

console.log(obj.name)

obj.name = 'Hovhannes, Sona';

console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]


