export default interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    age?: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}