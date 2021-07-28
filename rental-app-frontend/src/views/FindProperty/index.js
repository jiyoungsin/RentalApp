import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { Link } from 'react-router-dom';
import arrayBufferToBase64 from '../../utilities/arrayBufferToBase64';

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
        id: 'landlord',
        label: 'landlord',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'image',
        label: 'image',
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

function createData(_id, name, address, bedrooms, landlord, image, postalCode) {
    return { _id, name, address, bedrooms, landlord, image, postalCode };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: "80vh",
    },
    myContainer: {
        width: '80vw',
        height: '80vh',
        margin: 'auto',
        display: 'flex',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: "20vh",
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
                    const thelandlord = '1000';
                    const theArray = [];
                    for (let i = 0; i < res.data.length - 1; i++) {
                        console.log("res.data[i]")
                        console.log(res.data[i])
                        const {
                            _id,
                            price,
                            streetNumber,
                            streetName,
                            room,
                            landlord,
                            image,
                            postalCode,
                        } = res.data[i];
                        const fullAddress = streetNumber + ' ' + streetName;
                        theArray.push(
                            createData(
                                _id,
                                price,
                                fullAddress,
                                room,
                                landlord,
                                image,
                                postalCode
                            )
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
                                                if(column.id == "image"){
                                                    const value = row[column.id];
                                                    console.log("image")
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <Link
                                                                to={'/rental/' + row._id}
                                                                style={{ color: 'black' }}
                                                            >
                                                                <img thumbnail src={arrayBufferToBase64(row.image.data)} alt="Image of House" style={{"height": "100px"}}/>
                                                            </Link>
                                                        </TableCell>
                                                    );
                                                }
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Link
                                                            to={'/rental/' + row._id}
                                                            style={{ color: 'black' }}
                                                        >
                                                            {column.format &&
                                                            typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </Link>
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
