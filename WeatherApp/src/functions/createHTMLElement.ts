export const createHTMLElement = <T extends keyof HTMLElementTagNameMap>(
  element: T
): HTMLElementTagNameMap[T] => {
  const newElement = document.createElement(
    element
  ) as HTMLElementTagNameMap[T];
  return newElement;
};
