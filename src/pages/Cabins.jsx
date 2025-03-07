import {useEffect, useState} from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Button from "../ui/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import AddCabin from "../features/cabins/AddCabin.jsx";
import {CabinTableOperations} from "../features/cabins/CabinTableOperations.jsx";

function Cabins() {
  return (
      <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
        <CabinTableOperations/>
    </Row>

      <Row>
          <CabinTable/>
          <AddCabin/>
      </Row>
      </>
  );
}

export default Cabins;
