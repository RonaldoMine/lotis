import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../utils/axios/axios";


interface authState {
  auth: {
    currentUser: any;
    errors: string | null;
    loading: boolean;
  };
}

interface authActions {
    login: (email:string, password: string) => Promise<void>;
    signUp: (userDatas:userDatasType) => Promise<void>;
    resetErrors: () => void;
}

type userDatasType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  commercialRegisterNumber: string;
  cniNumber: string;
  password: string;
};

const initialState = {
  auth: {
    currentUser: null,
    errors: null,
    loading: false,
  },
};

export const useAuthStore = create<authState & authActions>((set) => ({
  ...initialState,

  login: async (email: string, password: string) => {
    set((state) => ({ auth: { ...state.auth, loading: true } }));
    try {
      const user = await axios.post(BASE_URL + "auth/login", {
        email,
        password,
      });
      set((state) => ({
        auth: { ...state.auth, currentUser: user.data.user, loading: false },
      }));
    } catch (error: any) {
      set((state) => ({
        auth: { ...state.auth, errors: 'An error occured', loading: false },
      }));
    }
  },
  signUp: async (userDatas: userDatasType) => {
    set((state) => ({ auth: { ...state.auth, loading: true } }));
    try {
      const user = await axios.post(BASE_URL + "auth/signup", userDatas, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set((state) => ({
        auth: { ...state.auth, currentUser: user?.data, loading: false },
      }));
    } catch (error) {
      set((state) => ({
        auth: { ...state.auth, errors: "An error occured", loading: false },
      }));
    }
  },
  resetErrors: () => {
    set((state) => ({auth:{...state.auth, errors: null}}));
  },
}));
