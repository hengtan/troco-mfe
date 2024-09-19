import * as React from 'react';
import { TableHead, TableRow, TableCell, Box, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TableHeaderProps {
    headers: string[];
    orderBy: string;
    order: 'asc' | 'desc';
    onSort: (header: string) => void;
    headerToKeyMap: { [key: string]: string };
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers, orderBy, order, onSort, headerToKeyMap }) => (
    <TableHead>
        <TableRow>
            {headers.map((header) => (
                <TableCell key={header} sx={{ fontWeight: 'bold', fontSize: '12px', color: 'black' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '12px', color: 'black' }}>
                            {header}
                        </Typography>
                        <IconButton onClick={() => onSort(header)}>
                            {orderBy === headerToKeyMap[header] ? (
                                order === 'asc' ? <ArrowUpwardIcon sx={{ fontSize: '12px' }} /> : <ArrowDownwardIcon sx={{ fontSize: '12px' }} />
                            ) : (
                                <ExpandMoreIcon sx={{ fontSize: '12px' }} />
                            )}
                        </IconButton>
                    </Box>
                </TableCell>
            ))}
            <TableCell />
        </TableRow>
    </TableHead>
);

export default TableHeader;