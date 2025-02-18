// import styled from 'styled-components';

import { useSearchParams } from 'react-router-dom';
import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import useCabins from "./useCabins.js";
import Menus from "../../ui/Menus.jsx";
import Table from "../../ui/Table.jsx";


function CabinTable() {
    const {isLoading, cabins} =useCabins();
    const [searchParams] = useSearchParams();
    if(isLoading) return <Spinner/>

    // Filter cabins based on discount status (all, metKorting, geenKorting)
    const filterValue = searchParams.get('discount') || 'alles';
    let filteredCabins;
    if (filterValue === 'alles') filteredCabins = cabins;
    if (filterValue === 'metKorting') filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
    if (filterValue === 'geenKorting') filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

    // Sort cabins based on sorting option (name_asc, name_desc, regularPrice_asc, regularPrice_desc, maxCapacity_asc, maxCapacity_desc)
    const sortValue = searchParams.get('sortBy') || 'name_asc';
    const [field, direction] = sortValue.split('_');
    let sortedCabins;
    if (field === 'name') sortedCabins = filteredCabins.sort((a, b) => a.name.localeCompare(b.name) * (direction === 'asc'? 1 : -1));
    else sortedCabins = filteredCabins.sort((a, b) =>
        (a[field] - b[field]) * (direction === 'asc'? 1 : -1)
    )

    return(
      <Menus>
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
              <div>Image</div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>discount</div>
            <div></div>
          </Table.Header>

            <Table.Body data={sortedCabins} render={(cabin) => (<CabinRow cabin={cabin}></CabinRow>)}>
            </Table.Body>
        </Table>
      </Menus>
  );
}

export default CabinTable;
