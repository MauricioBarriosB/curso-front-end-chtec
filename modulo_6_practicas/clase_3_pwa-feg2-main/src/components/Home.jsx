import { useEffect } from "react";
import { useRef } from "react";

export default function Home() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitud:", position.coords.latitude);
    console.log("Longitud:", position.coords.longitude);
  });

  // navigator.mediaDevices
  //   .getUserMedia({ video: true })
  //   .then((stream) => {
  //     document.getElementById("video").srcObject = stream;
  //   })
  //   .catch((error) => console.log("Error al acceder a la cámara:", error));

  const videoRef = useRef(null);
  useEffect(() => {
    // Acceder a la cámara
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => console.log("Error al acceder a la cámara:", error));
    return () => {
      // Detener la cámara al desmontar el componente
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <video ref={videoRef} autoPlay width="500"></video>
    </div>
  );
}
