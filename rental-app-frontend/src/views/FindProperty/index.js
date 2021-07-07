import React, { useState, useEffect } from 'react';
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
    { id: 'name', label: '$ Price', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 100 },
    {
        id: 'bedrooms',
        label: 'bedrooms',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Landlord',
        label: 'Landlord',
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
    {
        id: 'postalCode',
        label: 'postalCode',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(name, address, bedrooms, Landlord, bathroom, postalCode) {
    return { name, address, bedrooms, Landlord, bathroom, postalCode };
}

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
        display: 'flex',
        flexDirection: 'column',
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/rentals/all')
            .then((res) => {
                if (res.status === 200) {
                    const theLandlord = '1000';
                    const theArray = [];

                    for (let i = 0; i < res.data.length - 1; i++) {
                        const {
                            price,
                            streetNumber,
                            streetName,
                            room,
                            Landlord,
                            bathroom,
                            postalCode,
                        } = res.data[i];
                        const fullAddress = streetNumber + ' ' + streetName;
                        theArray.push(
                            createData(price, fullAddress, room, Landlord, bathroom, postalCode)
                        );
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
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.address}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
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
