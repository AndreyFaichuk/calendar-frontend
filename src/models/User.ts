export interface UserLogin {
    username: string;
    password: string;
    data?: UserData
}

export interface UserRegistraion {
    username: string;
    email: string;
    password?: string;
    data?: UserData
}

export interface UserData {
    email: string;
    message?: string;
    userId: string;
    username: string
    data?: any;
}