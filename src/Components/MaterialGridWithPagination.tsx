import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import { TextField, InputBase } from '@material-ui/core';

interface Column {
    id: 'title' | 'url' | 'created_at' | 'author';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'url', label: 'URL', minWidth: 100 },
    { id: 'created_at', label: 'Created At', minWidth: 100 },
    { id: 'author', label: 'Author', minWidth: 100 },
];

// const rows: any[] = []

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const useStylesModal = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function getModalStyle() {
    const top = 50; //  + rand();
    const left = 50; //  + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

export default function MaterialGridWithPagination() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const classesModal = useStylesModal();
    const [modalStyle] = React.useState(getModalStyle);
    const [modalContent, setModalContent] = React.useState('');

    const [searchText, setSearchText] = React.useState('');
    const [filteredRows, setFilteredRows] = React.useState([]);

    const [titleFilter, setTitleFilter] = React.useState('');
    const [createAtFilter, setCreateAtFilter] = React.useState('');

    useEffect(() => {
        fetch(
            `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
            {
                method: "GET",
            }
        )
            .then(res => res.json())
            .then(response => {
                let row: any = rows;
                //  console.log(response);
                row = row.concat(response.hits);
                // = [...rows, ...response.hits];
                setRows(row);
                if (row.length != 0 && searchText != '') {
                    setFilteredRows(row.filter((h: any) =>
                        h.author.indexOf(searchText) !== -1 ||
                        (h.title.indexOf(searchText) !== -1) ||
                        (h.url.indexOf(searchText) !== -1)
                    ));
                } else {
                    setFilteredRows(row);
                }
                console.log(filteredRows);
            })
            .catch(error => console.log(error));
    }, [page]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage(page => page + 1)
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const handleClick = (event: React.MouseEvent<unknown>, row: any) => {
         if (row) {
              const a = {
                    Title: row.title,
                    url: row.url,
                    createdAt: row.created_at,
                    Author: row.author
                };
             setModalContent(JSON.stringify(a));
             setOpen(true);
         }       
    };

    const body = (
        <div style={modalStyle} className={classesModal.paper}>
            {modalContent}
        </div>
    );

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onFilterValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        //     alert(event.target.value);
    }

    const handleFilterTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value);
    }

    const handleFilterCreateAt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateAtFilter(event.target.value);
    }

    return (
        <div>
            <h1>Assigment 1</h1>
            <Paper className={classes.root}>
                <TextField id="outlined-basic" label="Search" variant="outlined"
                    value={searchText} onChange={onFilterValueChanged} />
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>
                                    Title
                                   <input type="text" className="xs m-2 col-md-4"
                                        placeholder="Title" value={titleFilter} onChange={handleFilterTitle}></input>
                                </StyledTableCell>
                                <StyledTableCell align="left" >URL</StyledTableCell>
                                <StyledTableCell align="left">Created At
                                <input type="text" className="xs m-2 col-md-4"
                                        placeholder="Created At" value={createAtFilter} onChange={handleFilterCreateAt} ></input>
                                </StyledTableCell>
                                <StyledTableCell align="left">Author</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                filteredRows.map((row) => {  // rows
                                    return (
                                        // key={row.code}
                                        <TableRow hover tabIndex={-1}
                                            onClick={(event) => handleClick(event, row)}>
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
                                })
                            }
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
