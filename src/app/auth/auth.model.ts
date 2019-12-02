enum AuthState {
    LogIn = 1,
    LogOut = 2,
    Pending = 3,
}
export interface AppState {
    auth: AuthState
}