/** 
@param {string[]} fields - Fields attribute "name" to check
*/
function validationFields(fields) {
  fields.forEach((field) => {
    const fieldElement = document.querySelector(
      `.blog__control [name=${field}]`
    );

    if (fieldElement && !fieldElement.value) {
      const { parentElement } = fieldElement;

      const fieldError = parentElement.querySelector(`.error`);

      if (fieldError) {
        fieldError.style.display = "block";
      }
    }
  });
}
