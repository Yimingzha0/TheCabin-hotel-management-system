import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export default function useCreateCabin() {
    const queryClient = useQueryClient();
    const  {mutate: createCabin, isLoading: isCreating} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast('Cabin created successfully!');
            queryClient.invalidateQueries(['cabins']);
        },
        onError: (error) => toast(error.message ),
    })
    return {isCreating, createCabin};
}