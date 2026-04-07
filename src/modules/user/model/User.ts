export interface User {
    id: number;
    email: string;
    password: string; // Stop screaming, it's a local storage app!
    username: string;
    dateOfBirth: Date;
    gender: string;
}