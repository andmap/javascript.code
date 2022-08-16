/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function insertNodeAtHead(head, data) {
  let node = new SinglyLinkedListNode(data)
  node.next = head
  return node
}

const arr = [383, 484, 392, 975, 321]
let lastNode = null
for (let i = 0; i < arr.length; i++) {
  lastNode = insertNodeAtHead(lastNode, arr[i])
}
/*
383
484
392
975
321
*/
