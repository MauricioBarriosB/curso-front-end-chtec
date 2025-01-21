export const sendFormData = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  // Simulación de llamada a la API
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ status: "success", message: "Datos enviados correctamente" });
      } else {
        reject({ status: "error", message: "Error al enviar los datos" });
      }
    }, 1000);
  });
};
