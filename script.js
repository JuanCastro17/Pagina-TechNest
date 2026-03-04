function mostrarCampos() {
  const figura = document.getElementById("figura").value;
  const campos = document.getElementById("campos");
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  let html = "";

  if (figura === "rectangulo") {
    html += `
      <label>Base:</label><input type="number" id="base">
      <label>Altura:</label><input type="number" id="altura">
      <button onclick="calcularRectangulo()">Calcular</button>
    `;
  } else if (figura === "triangulo") {
    html += `
      <label>Base:</label><input type="number" id="base">
      <label>Altura:</label><input type="number" id="altura">
      <label>Lado 1:</label><input type="number" id="lado1">
      <label>Lado 2:</label><input type="number" id="lado2">
      <label>Lado 3:</label><input type="number" id="lado3">
      <button onclick="calcularTriangulo()">Calcular</button>
    `;
  } else if (figura === "circulo") {
    html += `
      <label>Radio:</label><input type="number" id="radio">
      <button onclick="calcularCirculo()">Calcular</button>
    `;
  } else if (figura === "cubo") {
    html += `
      <label>Lado:</label><input type="number" id="lado">
      <button onclick="calcularCubo()">Calcular</button>
    `;
  } else if (figura === "cilindro") {
    html += `
      <label>Radio:</label><input type="number" id="radio">
      <label>Altura:</label><input type="number" id="altura">
      <button onclick="calcularCilindro()">Calcular</button>
    `;
  }

  campos.innerHTML = html;
}

function calcularRectangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const area = base * altura;
  const perimetro = 2 * (base + altura);
  document.getElementById("resultados").innerHTML =
    `Área: ${area} unidades cuadradas <br> Perímetro: ${perimetro} unidades`;
}

function calcularTriangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);
  const area = 0.5 * base * altura;
  const perimetro = lado1 + lado2 + lado3;
  document.getElementById("resultados").innerHTML =
    `Área: ${area} unidades cuadradas <br> Perímetro: ${perimetro} unidades`;
}

function calcularCirculo() {
  const radio = parseFloat(document.getElementById("radio").value);
  const diametro = 2 * radio;
  const area = Math.PI * radio * radio;
  const perimetro = 2 * Math.PI * radio;
  document.getElementById("resultados").innerHTML =
    `Diámetro: ${diametro.toFixed(2)} unidades <br>Área: ${area.toFixed(2)} unidades cuadradas <br> Perímetro: ${perimetro.toFixed(2)} unidades`;
}

function calcularCubo() {
  const lado = parseFloat(document.getElementById("lado").value);
  const area = 6 * lado * lado;
  const volumen = lado ** 3;
  document.getElementById("resultados").innerHTML =
    `Área: ${area} unidades cuadradas <br> Volumen: ${volumen} unidades cúbicas`;
}

function calcularCilindro() {
  const radio = parseFloat(document.getElementById("radio").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const diametro = 2 * radio;
  const area = 2 * Math.PI * radio * (radio + altura);
  const volumen = Math.PI * radio * radio * altura;
  document.getElementById("resultados").innerHTML =
    `Diámetro: ${diametro.toFixed(2)} unidades <br>Área: ${area.toFixed(2)} unidades cuadradas <br> Volumen: ${volumen.toFixed(2)} unidades cúbicas`;
}
