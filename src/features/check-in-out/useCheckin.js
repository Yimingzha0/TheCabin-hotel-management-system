import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {updateBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: checkin, isLoading: isCheckingin } = useMutation({
        mutationFn: (bookingId) => (updateBooking(bookingId,{
            status: 'checked-in',
            isPaid: true,
            })),

        onSuccess: (data) => {
            toast(`Booking# ${data.id} Check-in successful!`);
            queryClient.invalidateQueries({active: true});
            navigate(`/`);
        },
        onError: () => toast.error('Failed to check-in'),
    });
    return {isCheckingin, checkin};
}