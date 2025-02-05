import React from 'react'

interface PersonProps {
    name: string
    age: number
    occupation: string
}

const PersonComponent: React.FC<PersonProps> = (props) => {
    const { name, age, occupation } = props

    return (
        <div>
            <h5>Person Details:</h5>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    )
}

export default PersonComponent;


/*
import PersonComponent from './commons/PersonComponent';

const personData = {
    name: 'John Doe',
    age: 30,
    occupation: 'Médico Cirujano.'
}
<PersonComponent {...personData} />
*/