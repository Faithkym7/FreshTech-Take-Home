import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography, InputAdornment } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import data from 'data/data.json';
import { shades } from 'theme';  // Assuming shades is correctly imported from your theme

const Transaction = () => {
  const [filterText, setFilterText] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const dataTransactions = data.transactions;

  const handleActionClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Initiated':
        return '#ffb300';
      case 'Successful':
        return 'green';
      case 'Failed':
        return '#fa432a';
      default:
        return 'black'; // Default color if status is something unexpected
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Initiated':
        return <IconButton sx ={{backgroundColor:'#ffb300', color:'white', height:'5px', width:'5px'}}><ErrorOutlineOutlinedIcon/></IconButton >;
      case 'Successful':
        return <IconButton sx ={{backgroundColor:'green', color:'white', height:'5px', width:'5px'}}><CheckBoxOutlinedIcon/></IconButton >;
      case 'Failed':
        return <IconButton sx ={{backgroundColor:'#fa432a', color:'white', height:'5px', width:'5px'}}><ErrorOutlineOutlinedIcon/></IconButton >;
      default:
        return <IconButton sx ={{backgroundColor:'black', color:'white', height:'5px', width:'5px'}}><QuestionMarkOutlinedIcon/></IconButton >; // Default color if status is something unexpected
    }
  };

  const columns = [
    {
      field: 'service',
      headerName: 'Service',
      flex: 1,
      renderCell: (params) => (
        <Box display='flex'>
          <Box sx={{mr:2}}>
          {getStatusIcon(params.row.status)}
          </Box>
          <Box display="flex" flexDirection="column">
            <Box style={{ color: shades.blue[700], fontWeight: 'bold' }}>
              {params.row.service.type}
            </Box>
            <Box style={{ fontSize: '0.8em', color: shades.blue[700] }}>
              {params.row.service.Number}
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.5,
      renderCell: (params) => (
        <Typography style={{ color: shades.blue[700], fontWeight: 'bold' }}>
          {`₦${params.row.amount.toFixed(2)}`}
        </Typography>
      ),
    },
    {
      field: 'total_amount',
      headerName: 'Total Amount',
      flex: 0.5,
      renderCell: (params) => (
        <Typography style={{ color: shades.blue[700], fontWeight: 'bold' }}>
          {`₦${params.row.total_amount.toFixed(2)}`}
        </Typography>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.5,
      renderCell: (params) => (
        <Typography
          style={{
            color: getStatusColor(params.row.status),
            fontWeight: 'bold',
          }}
        >
          {params.row.status}
        </Typography>
      ),
    },
    {
      field: 'payment_method',
      headerName: 'Payment Method',
      flex: 0.5,
      renderCell: (params) => (
        <Typography style={{ color: shades.blue[700], fontWeight: 'bold' }}>
          {params.row.payment_method}
        </Typography>
      ),
    },
    {
      field: 'transactionInfo',
      headerName: 'Transaction No',
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Box style={{ color: shades.blue[700], fontWeight: 'bold' }}>
            {params.row.transaction_no}
          </Box>
          <Box style={{ fontSize: '0.8em', color: shades.blue[700] }}>
            {params.row.date}
          </Box>
        </Box>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 0.5,
      renderCell: (params) => (
        <Box height='3rem'>
          <IconButton sx={{backgroundColor: shades.blue[100], borderRadius:'5px', height:'80%'}} onClick={(event) => handleActionClick(event, params.row)}>
            <Typography style={{ color: shades.blue[700], fontWeight: 'bold' }}>Open</Typography>
          </IconButton>
        </Box>
      ),
    },
  ];

  const filteredRows = dataTransactions.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <Box
      sx={{
        m: {
          xs: '5rem 1rem 0rem 10rem',
          sm: '5rem 2rem 0rem 20rem',
          md: '5rem 2rem 0rem 20rem',
          lg: '5rem 12rem 0rem 20rem',
          xl: '5rem 15rem 0rem 20rem',
        },
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        placeholder="Filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: '10px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FilterListOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
     <DataGrid
      rows={filteredRows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      autoHeight
      getRowHeight={() => 'auto'}
      sx={{
        border: 'none',
        '& .MuiDataGrid-columnHeaders': {
          color: shades.blue[600],          
          border: 'none', 
        },        
        '& .MuiDataGrid-row': {
          '&:first-of-type .MuiDataGrid-cell': {
            border: 'none', 
          },
        },
        
        '& .MuiDataGrid-virtualScroller': {
          border: 'none',
        },
        '& .MuiDataGrid-overlay': {
          border: 'none', 
        },
      }}
    />


    </Box>
  );
};

export default Transaction;
