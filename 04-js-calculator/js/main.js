const forumulaInput = document.getElementById('formula');
const resultField = document.getElementById('result');

document.getElementById('formulaForm').addEventListener('submit', calculateResult);

function calculateResult(event) {
  event.preventDefault();
  event.stopPropagation();

  resultField.innerText = 0;

  return false;
}
