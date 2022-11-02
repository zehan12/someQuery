// yarn add gist:5ceba1081bbf0162b98860b34a511a92
// npm install gist:5ceba1081bbf0162b98860b34a511a92
export const DeepObject = {
  set: setDeep,
  get: getDeep
};

// https://stackoverflow.com/a/6491621
function getDeep(obj: Object, path: string) {
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, '');           // strip a leading dot
  const a = path.split('.');
  for (let i = 0, l = a.length; i < l; ++i) {
    const n = a[i];
    if (n in obj) {
      obj = obj[n];
    } else {
      return;
    }
  }

  return obj;
}

// https://stackoverflow.com/a/18937118
function setDeep(obj: Object, path: string, value: any) {
  let schema = obj;  // a moving reference to internal objects within obj
  const pList = path.split('.');
  const len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!schema[elem]) {
      schema[elem] = {};
    }
    schema = schema[elem];
  }

  schema[pList[len - 1]] = value;
}

// Usage
// import {DeepObject} from 'somePath'
//
// const obj = {
//   a: 4,
//   b: {
//     c: {
//       d: 2
//     }
//   }
// };
//
// DeepObject.set(obj, 'b.c.d', 10); // sets obj.b.c.d to 10
// console.log(DeepObject.get(obj, 'b.c.d')); // returns 10
