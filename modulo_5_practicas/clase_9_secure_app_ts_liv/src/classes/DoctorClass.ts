interface IDoctorClass {
    showDoctorName(): string;
    showDoctorInfo(): string;
};

export class DoctorClass implements IDoctorClass {

    constructor(
        public name: string, 
        public specialty_name: string,
        public biography: string
    ){};

    showDoctorName(): string {
        return this.name;
    };

    showDoctorInfo(): string {
        return `Nombre: ${this.name} | Especialidad: ${this.specialty_name} | Biografía : ${this.biography}`;
    };

};