import TransformableEventList from "../components/TransformableEventList";

function TransformEventsView() {
  return (
    <div>
      <h1>Transformación de Elementos</h1>
      <p>Haz clic en un evento para cambiar su estado.</p>
      <TransformableEventList />
    </div>
  );
}

export default TransformEventsView;
