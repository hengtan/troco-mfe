import * as React from 'react';
import { Table, TableBody, TableContainer, Paper, TablePagination, Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TableHeader from './TableHeader';
import TableRowComponent from './TableRowComponent';

interface Data {
    date: string;
    cnpj: string;
    terminal: string;
    type: string;
    value: string;
    endToEnd: string;
}

const headerToKeyMap: { [key: string]: keyof Data } = {
    'Data': 'date',
    'CNPJ': 'cnpj',
    'Terminal': 'terminal',
    'Tipo de lançamento': 'type',
    'Valor': 'value'
};

const rows: Data[] = Array.from({ length: 20 }, (_, i) => ({
    date: `2023-01-${String(i + 1).padStart(2, '0')}T12:29:00`,
    cnpj: `12.345.678/0001-${String(i).padStart(2, '0')}`,
    terminal: `Terminal ${i + 1}`,
    type: i % 2 === 0 ? 'Troco Digital' : 'Reembolso',
    value: `R$ ${100 * (i + 1)},00`,
    endToEnd: `550e8400-e29b-41d4-a716-4466554400${String(i).padStart(2, '0')}`
}));

const compareDate = (a: string, b: string, order: 'asc' | 'desc') => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
};

const compareValue = (a: string, b: string, order: 'asc' | 'desc') => {
    const valueA = parseFloat(a.replace(/[^\d,]/g, '').replace(',', '.'));
    const valueB = parseFloat(b.replace(/[^\d,]/g, '').replace(',', '.'));
    return order === 'asc' ? valueA - valueB : valueB - valueA;
};

const compareString = (a: string, b: string, order: 'asc' | 'desc') => {
    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
};

const TableExtratoLancamentos: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data | ''>('');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [expandedRow, setExpandedRow] = React.useState<number | null>(null);

    const handleRequestSort = (property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (value?: number) => {
        if (value) {
            setRowsPerPage(value);
            setPage(0);
        }
        setAnchorEl(null);
    };

    const handleRowClick = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const sortedRows = React.useMemo(() => {
        return rows.sort((a, b) => {
            if (orderBy) {
                switch (orderBy) {
                    case 'date':
                        return compareDate(a.date, b.date, order);
                    case 'value':
                        return compareValue(a.value, b.value, order);
                    default:
                        return compareString(a[orderBy], b[orderBy], order);
                }
            }
            return 0;
        });
    }, [order, orderBy]);

    const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <Table>
                    <TableHeader
                        headers={['Data', 'CNPJ', 'Terminal', 'Tipo de lançamento', 'Valor']}
                        orderBy={orderBy}
                        order={order}
                        onSort={(header) => handleRequestSort(headerToKeyMap[header])}
                        headerToKeyMap={headerToKeyMap}
                    />
                    <TableBody>
                        {paginatedRows.map((row, index) => (
                            <TableRowComponent
                                key={index}
                                row={row}
                                index={index}
                                expandedRow={expandedRow}
                                onRowClick={handleRowClick}
                                onCopy={handleCopy}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                <Button
                    variant="text"
                    endIcon={<ArrowDropDownIcon />}
                    onClick={handleMenuOpen}
                    sx={{ border: 'none', color: 'black', fontSize: '12px' }}
                >
                    Exibindo {rowsPerPage} itens
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleMenuClose()}
                >
                    {[10, 20, 30].map((value) => (
                        <MenuItem key={value} onClick={() => handleMenuClose(value)}>
                            {value} itens
                        </MenuItem>
                    ))}
                </Menu>
                <Typography variant="body2">
                    {rows.length} resultados
                </Typography>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Paper>
    );
};

export default TableExtratoLancamentos;