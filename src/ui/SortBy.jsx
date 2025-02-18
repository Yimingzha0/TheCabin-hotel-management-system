import Select from "./Select.jsx";
import {useSearchParams} from "react-router-dom";

function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSortBy = searchParams.get('sortBy') || "";
    function handleChange(event) {
        searchParams.set('sortBy', event.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select options={options} onChange={handleChange} type="white" value={currentSortBy}></Select>
    )
}

export default SortBy;