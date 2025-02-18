import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useCheckout() {
    const queryClient = useQueryClient();

    const {mutate: checkout, isLoading: isCheckingout } = useMutation({
        mutationFn:(bookingId)=> updateBooking(bookingId,{
            status: 'checked-out',
        }),
        onSuccess: (data) => {
            toast(`Booking# ${data.id} Checkout successful!`);
            queryClient.invalidateQueries({active: true});
        },
        onError: () => toast.error('Failed to checkout'),
    })

    return {isCheckingout, checkout};
}