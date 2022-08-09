class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const root = new Node(5)
root.left = new Node(3)
root.left.left = new Node(2)
root.left.right = new Node(6)
root.right = new Node(7)
const checkBst = (root) => {
  let arr = []
  storeInOrder(root, arr)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false
  }
  return true
}

const storeInOrder = (node, arr) => {
  if (!node) return
  storeInOrder(node.left, arr)
  arr.push(node.data)
  storeInOrder(node.right, arr)
}

console.log(checkBst(root))
