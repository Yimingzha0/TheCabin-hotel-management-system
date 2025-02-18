import {updateCurrentUser} from "../../services/apiAuth.js";
import toast from "react-hot-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export function useUpdateUser() {
    const queryClient = useQueryClient();
    const {mutate: updateUser, isLoading: isUpdating } = useMutation({
     mutationFn: updateCurrentUser,
        onSuccess: ({user}) => {
            toast.success('Profile updated successfully!');
            queryClient.setQueryData(['user'], user);
        },
        onError: (error) => toast.error(error.message),
    })
    return {isUpdating, updateUser};
}