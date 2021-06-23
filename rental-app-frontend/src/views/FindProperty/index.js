import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Price', minWidth: 170 },
  { id: 'address', label: 'Address', minWidth: 100 },
  {
    id: 'bedrooms',
    label: 'bedrooms',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(ft\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'bathroom',
    label: 'bathroom',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, address, bedrooms, size, bathroom) {
  return { name, address, bedrooms, size, bathroom };
}

// const rows = [
//   createData('2 Bedroom house ', '123', 1, 1000, 1),
//   createData('Basement Apt ', 'Burlington', 1, 1000, 1),
//   createData('One Bedroom Condo ', 'Burlington', 1, 1000, 1),
//   createData('3 Story house ', 'Burlington', 1, 1000, 1),
//   createData('Broken Crack House ', 'Burlington', 1, 1000, 1),
//   createData('Beautiful house', 'Burlington', 1, 1000, 1),
//   createData('CHEAP! MUST GO ', 'Burlington', 1, 1000, 1),
//   createData('Beautiful house ', 'Burlington', 1, 1000, 1),
//   createData('Punjabi Girls Only ', 'Burlington', 1, 1000, 1),
//   createData('Most Beautiful house ', 'Burlington', 1, 1000, 1),
//   createData('Looking for Roommate', 'Burlington', 1, 1000, 1),
//   createData('2 Bedroom Townhouse ', 'Burlington', 1, 1000, 1),
//   createData('CHEAP CHEAP CHEAP house ', 'Burlington', 1, 1000, 1),
//   createData('Working House', 'Burlington', 1, 1000, 1),
//   createData('2 Rooms Available ', 'Burlington', 1, 1000, 1),
// ];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    myContainer: {
        width: '80%',
        height: '80%',
        margin: 'auto',
        display: 'flex',
        marginTop: '5vh',
        display: "flex",
        flexDirection: "column",
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/rentals/all')
            .then((res) => {
                if (res.status === 200) {
                    const theSize = "1000";
                    const theArray = [];
                    for( let i=0; i< res.data.length-1; i++){
                        const {price, address, room, bathroom} = res.data[i];
                        theArray.push(createData(price, address, room, theSize, bathroom))
                    }
                    setRows(theArray);
                } else {
                    console.log('Error while creating Rental Status: ', res.status);
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Error Getting Data from Backend');
            });
    }, []);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [state, setState] = useState('');
    const handleChange = (e) => {
    const { id, value } = e.target;
    setState((ps) => ({
        ...ps,
        [id]: value,
    }));
    };

  return (
    <div className={classes.myContainer}>
        <div className="input-group mt-5 mb-5">
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                value="search"
                id="search"
                name="search"
                placeholder="Search by Rental Name, or Country"
            />
            <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                    Search
                </button>
            </div>
        </div>
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.address}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  );
}
