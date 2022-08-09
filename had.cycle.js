class Node {
  constructor(d) {
    this.data = d
    this.next = null
  }
}

let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(40)
head.next.next.next.next = new Node(50)
head.next.next.next.next.next = head.next

console.log(head)
function hasCycle(head) {
  let slow = head
  let fast = head
  while (slow.next && fast.next && fast.next.next) {
    console.log(slow.data, fast.data)
    if (fast.next.next == slow.next) {
      console.log('meet:', slow.next.data)
      return 1
    }
    slow = slow.next
    fast = fast.next.next
  }
  return 0
}

console.log(hasCycle(head))
