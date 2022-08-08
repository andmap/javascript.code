const height = (Node) => {
  let left = 0
  let right = 0
  if (root.left) left += height(root.left) + 1

  if (root.right) right += height(root.right) + 1

  return Math.max(left, right)
}
