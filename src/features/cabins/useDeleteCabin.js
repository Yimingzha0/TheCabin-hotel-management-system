import {useMutation, useQueryClient} from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPi} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
    const queryClient = useQueryClient();
    const {isLoading: isDeleting, mutate: deleteCabin} = useMutation({
        mutationFn: deleteCabinAPi,
        onSuccess: () => {
            toast('Cabin deleted successfully!✅')
            queryClient.invalidateQueries(['cabins'])
        },
        onError: (error) => toast(error.message )
    })
    return {isDeleting, deleteCabin};
}