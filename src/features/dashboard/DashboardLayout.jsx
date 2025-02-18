import styled from 'styled-components';

import DurationChart from '../../features/dashboard/DurationChart';
import Stats from '../../features/dashboard/Stats';
import TodayActivity from '../../features/check-in-out/TodayActivity';
import { useRecentBooking } from '../../features/dashboard/useRecentBooking';
import Spinner from '../../ui/Spinner';
import  useRecentStay  from './useRecentStay';
import  useCabins  from '../../features/cabins/useCabins';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto ;
  gap: 1.4rem;
`;
const StyledStatsLayout = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem;
`


function DashboardLayout() {
  const { isLoading: isLoading1, bookings, numDays } = useRecentBooking();
  const { isLoading: isLoading2, confirmedStays } = useRecentStay();
  const { isLoading: isLoading3, cabins } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <>
        <StyledStatsLayout>
          <Stats
            bookings={bookings}
            confirmedStays={confirmedStays}
            numDays={numDays}
            cabinCount={cabins.length}
          />
        </StyledStatsLayout>
        <StyledDashboardLayout>
          <TodayActivity />
          <DurationChart confirmedStays={confirmedStays} />
        </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;
