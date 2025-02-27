import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const loadIsDark = (): boolean => {
    try {
        const storedValue = localStorage.getItem("isDark");
        return storedValue ? JSON.parse(storedValue) : false;
    } catch (error) {
        console.error("Error loading isDark state:", error);
        return false;
    }
};

export interface Navbar {
    navState: string;
    isOpen: boolean;
    isDark: boolean;
}

const initialState:Navbar = {
    navState: "Home",
    isOpen: false,
    isDark: loadIsDark(),
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setNavState: (state,action: PayloadAction<string>) => {
            state.navState=action.payload;
        },
        setIsOpen: (state,action: PayloadAction<boolean>) => {
            state.isOpen=action.payload;
        },
        setIsDark: (state,action: PayloadAction<boolean>) => {
            state.isDark=action.payload;
            localStorage.setItem("isDark", JSON.stringify(action.payload));
        },
    },
})

export const { setNavState, setIsOpen, setIsDark } = navbarSlice.actions;
export default navbarSlice.reducer;