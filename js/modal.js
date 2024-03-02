/**
 * @typedef {Object} ModalReturnType
 * @property {function} open - Open modal
 * @property {function} close - Close modal
 */

/**
 * @param {string} name - Name (id) of the modal
 * @returns {ModalReturnType}
 */
function useModal(name) {
  const modal = window[name];

  if (!modal) {
    console.log(`Modal "${name}" is not defined`);

    return null;
  }

  return modal;
}
