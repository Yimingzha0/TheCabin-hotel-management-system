import {useMutation} from "@tanstack/react-query";
import {signUp as signUpApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export default function useSignup() {
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: signUpApi,
        onSuccess: () => {
            toast('Account created successfully! Please verify your account');
        },
    })
    return {signup, isLoading};
}