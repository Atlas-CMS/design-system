export const focusFocusable = (node: any) => {
  const nextNode = node.querySelector('[tabindex="0"]');

  if (nextNode) {
    nextNode.focus();
  }
};
