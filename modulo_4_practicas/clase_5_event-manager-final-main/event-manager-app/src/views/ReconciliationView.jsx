import ReconciliationList from "../components/ReconciliationList";
import BadReconciliationList from "../components/BadReconciliationList";

function ReconciliationView() {
  return (
    <div>
      <h1>Reconciliación en React</h1>
      <p>Ejemplo de una lista bien implementada y una lista con claves incorrectas.</p>
      <ReconciliationList />
      <BadReconciliationList />
    </div>
  );
}

export default ReconciliationView;
