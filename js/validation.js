/** 
@param {HTMLInputElement[]} fields - Fields to check
*/
function validationFields(fields) {
  fields.forEach((field) => {
    if (!field || field.value) {
      return;
    }

    const fieldError = field.parentElement.querySelector(`.error`);

    toggleElementVisible(fieldError, "block");

    field.addEventListener("input", () =>
      toggleElementVisible(fieldError, "none")
    );
  });
}
