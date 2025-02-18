import TableOperations from "../../ui/TableOperations.jsx";
import {Filter} from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

export const CabinTableOperations = () => {
    return (
        <>
            <TableOperations>
                <Filter filterField="discount" options={[
                    {value: "alles", label: "Alles"},
                    {value: "metKorting", label: "Met korting"},
                    {value: "geenKorting", label: "Geen korting"},
                ]}/>
                <SortBy options={[
                    {value: "name_asc", label: "Naam (A-Z)"},
                    {value: "name_desc", label: "Naam (Z-A)"},
                    {value: "regularPrice_asc", label: "Prijs (kort)"},
                    {value: "regularPrice_desc", label: "Prijs (lang)"},
                    {value: "maxCapacity_asc", label: "Kapaciteit (laag)"},
                    {value: "maxCapacity_desc", label: "Kapaciteit (hoog)"},
                ]}/>
            </TableOperations>
        </>
    )
}