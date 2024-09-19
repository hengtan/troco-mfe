import * as React from 'react';
import { TableRow, TableCell, IconButton, Box, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { format } from 'date-fns';
import AddIcon from "@mui/icons-material/Add";

interface TableRowComponentProps {
    row: any;
    index: number;
    expandedRow: number | null;
    onRowClick: (index: number) => void;
    onCopy: (text: string) => void;
}

const TableRowComponent: React.FC<TableRowComponentProps> = ({ row, index, expandedRow, onRowClick, onCopy }) => (
    <React.Fragment>
        <TableRow onClick={() => onRowClick(index)} sx={{ cursor: 'pointer', borderLeft: expandedRow === index ? '5px solid orange' : 'none' }}>
            <TableCell>{format(new Date(row.date), 'dd/MM/yyyy HH:mm:ss')}</TableCell>
            <TableCell>{row.cnpj}</TableCell>
            <TableCell>{row.terminal}</TableCell>
            <TableCell sx={{ color: row.type === 'Reembolso' ? 'green' : 'inherit' }}>{row.type}</TableCell>
            <TableCell sx={{ color: row.type === 'Reembolso' ? 'green' : 'inherit' }}>{row.value}</TableCell>
            <TableCell>
                <IconButton onClick={() => onCopy(row.endToEnd)}>
                    <AddIcon />
                </IconButton>
            </TableCell>
        </TableRow>
        {expandedRow === index && (
            <TableRow>
                <TableCell colSpan={6} sx={{ paddingLeft: 4, borderLeft: '5px solid orange' }}>
                    <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            End To End
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2">
                                {row.endToEnd}
                            </Typography>
                            <IconButton onClick={() => onCopy(row.endToEnd)} sx={{ fontSize: 'inherit' }}>
                                <ContentCopyIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </TableCell>
            </TableRow>
        )}
    </React.Fragment>
);

export default TableRowComponent;