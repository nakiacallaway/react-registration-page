type credentials = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type InitialStateType = {
    credentials: Credentials[];
    user: Credentials | undefined;
    addUser: (user:Credentials) => void;

};
