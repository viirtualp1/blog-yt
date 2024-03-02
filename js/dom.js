/** 
@param {HTMLElement} element - DOM element
@param {'block' | 'none'} [type] - Type
*/
function toggleElementVisible(element, type) {
  if (!element) {
    return;
  }

  if (type) {
    element.style.display = type;

    return;
  }

  const elementCurrentDisplay = element.style.display;

  if (elementCurrentDisplay === "block") {
    element.style.display = "none";

    return;
  }

  element.style.display = "block";
}
