import DataTable from "react-data-table-component";
import {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {tableColumns} from "../utils/tableColumns.ts";

export default function OldEmployeeList() {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle] = useState(false);

    const allEmployees = useSelector((state: RootState) => state.employee)

    const [employees, setEmployees] = useState([{
        firstName: "Nebel",
        lastName: "Mass",
        dateOfBirth: "30/03/2000",
        startDate: "30/03/2023",
        city: "Brazzaville",
        state: "Congo",
        street: "40 rue Nkounka Batéké, Bacongo",
        department: "Brazzaville",
        zipCode: "00242"
    }])

    useEffect(() => {
        setEmployees(allEmployees)
        if (filterText) {
            setEmployees(
                allEmployees.filter(
                    item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())
                )
            )
        }
    }, [allEmployees, filterText]);

    const subHeaderComponentMemo = useMemo(() => {
        return <input
            style={{border: "1px solid #ccc", borderRadius: "5px", padding: "5px 10px", marginBottom: "10px"}}
            type={"search"}
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
            placeholder={"Search by name"}
        />
    }, [filterText]);

    return (
        <div className="container mx-auto my-5">
            <DataTable
                title="Employee List"
                columns={tableColumns}
                data={employees}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />

        </div>
    );
}
