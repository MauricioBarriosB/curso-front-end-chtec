interface IPerson {
    name: string
    age: number
    occupation: string
}

const SampleComponent = ({ name, age, occupation }: IPerson) => {
    return (
        <div>
            <h5>Person Details:</h5>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    )
}

export default SampleComponent;

/*
import SampleComponent from './commons/SampleComponent';
const personData = {
    name: 'John Doe',
    age: 30,
    occupation: 'Médico Cirujano.'
}
<SampleComponent {personData} />
*/