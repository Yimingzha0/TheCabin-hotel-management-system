import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Logout as LogoutApi} from "../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";


export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: logout, isLoading} = useMutation({
        mutationFn: LogoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/login',{replace: true });

        },
        onError: (e) => {
            console.error(e);
        }
    });
    return {logout, isLoading};
}