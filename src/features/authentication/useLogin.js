import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from "../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const navigate = useNavigate();
    const quertClient = useQueryClient();
    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email, password}) => (
            loginApi({email, password})
        ),
        onSuccess: (data) => {
            quertClient.setQueryData(['user'], data.user);
            navigate("/dashboard");
        },
        onError:(e) => {
            toast.error(e.message);
        }
    });
    return {login, isLoading};
}