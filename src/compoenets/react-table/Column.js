import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id"
  },
  {
    Header: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "DOB",
    accessor: "dob",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    }
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "IP",
    accessor: "ip_address"
  },
  {
    Header: "Country",
    accessor: "contry"
  }
];
