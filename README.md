> ## ***Objects, Destructuring Assignment***

**During this homework:**

**I have read the given materials, which are the following:**

- [*Getters/Setters*](https://javascript.info/property-accessors)
- [*Getter*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [*Setter*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

**And done the required tasks, which are the following:**

1. Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]] 
```
[**Solution**](./getBestStudent.js)

2. The input is object, which keys are student's names and values are array of their scores. Find the student with the best average score.

```getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```
[**Solution**](./getter-setter.js)
