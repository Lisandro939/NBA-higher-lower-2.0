export function formatNumberToMillions(number) {
    // Verificar si el número es válido
    if (isNaN(number)) {
      return "Número inválido";
    }
  
    // Convertir el número a una cadena y eliminar espacios en blanco
    const numberString = String(number).trim();
  
    // Utilizar regex para agregar puntos de separación de miles
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
    return formattedNumber;
}