export interface IUserinfo {
    username : string,
    gym_name : string,
    firstname_th : string,
    lastname_th : string,
    email : string,
    telephone : string,
    user_role : string,
}

export interface IUserState {
    userInfo: IUserinfo;
} 