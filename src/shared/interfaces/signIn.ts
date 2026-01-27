//TODO delete unused interface
export interface SignInData {
   username: string;
   password: string;
}

export interface RefreshTokenInterface {
   accessToken: string;
   refreshToken: string;
}

export interface SignInDataResponse extends RefreshTokenInterface {
   id: number;
   username: string;
   email: string;
   firstName: string;
   lastName: string;
   gender: string;
   image: string;
}

export interface InitialStateData {
   isLoggedIn: boolean;
   user: SignInDataResponse | null;
   signOut: () => Promise<void>;
   setUser: (userData: SignInDataResponse) => void;
}
