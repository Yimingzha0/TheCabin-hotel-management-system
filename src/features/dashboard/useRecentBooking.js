import {useSearchParams} from "react-router-dom";
import {subDays} from "date-fns";
import {useQuery} from "@tanstack/react-query";
import {getBookingsAfterDate} from "../../services/apiBookings.js";

export function useRecentBooking() {
    const [searchParams] = useSearchParams();

    const numDays = !searchParams.get("last")? 7 : Number(searchParams.get("last"));

    const queryDate = subDays(new Date(), numDays).toISOString().split('T');

    const {isLoading, data: bookings} = useQuery({
        queryFn: ()=>getBookingsAfterDate(queryDate),
        queryKey: ["bookings", `last-${numDays}days`],
    },[])
    return {isLoading, bookings};
}