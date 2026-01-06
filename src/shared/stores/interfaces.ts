export interface SignInData {
   username: string;
   password: string;
}

export interface SignInDataResponse {
   id: number;
   username: string;
   email: string;
   firstName: string;
   lastName: string;
   gender: string;
   image: string;
   accessToken: string;
   refreshToken: string;
}

export interface InitialStateData {
   isLoggedIn: boolean;
   user: SignInDataResponse | null;
   me: () => Promise<boolean>;
   signIn: (email: string, password: string) => Promise<unknown>;
   initialize: () => Promise<void>;
   refreshToken: () => Promise<void>;
}
