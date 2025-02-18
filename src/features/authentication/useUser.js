import {useQuery} from "@tanstack/react-query";
import {getCurrentUser} from "../../services/apiAuth.js";

export function useUser() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['user'],
        queryFn: ()=> getCurrentUser()
    })
    if (error) throw new Error(error.message);

    return {isLoading, data, isAuthenticated: data?.role === 'authenticated'};
}