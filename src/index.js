import { node } from "./scripts/node.js";
import { linkedList } from "./scripts/linkedList.js";
window.linkedList = linkedList;
window.node = node;

const list = new linkedList();
list.append(2);
list.append(43);
list.append(54);
list.append(`string`);
list.append(43);
list.prepend([123, 12, 33]);
list.prepend(111);
list.show();
console.log(list.length());
