import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
    return (
        <Stack spacing={1}>
            <Pagination
                count={5}
                variant="outlined"
                shape="rounded"
                sx={{
                    color: '#46A358',
                    '& .MuiPaginationItem-root': {
                        color: '#46A358',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#46A358', 
                        color: '#fff', 
                    },
                    '& .MuiPaginationItem-outlined': {
                        borderColor: '#46A358', 
                    },
                }}
            />
        </Stack>
    );
}
