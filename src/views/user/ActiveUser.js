import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getActiveUsers } from 'utils/api';
import { useEffect, useState } from 'react';
import { throwIfExists } from 'utils/helper';

export default function QuickFilteringGrid() {
  const [state, setState] = useState([]);

  console.log('state value data:', state.data);

  const getActiveUsersFunction = async () => {
    try {
      const [getActiveData, getActiveError] = await getActiveUsers();
      throwIfExists(getActiveError);
      setState(getActiveData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActiveUsersFunction();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'member_user_id',
      headerName: 'member User Id',
      width: 150,
      editable: true
    },
    {
      field: 'member_name',
      headerName: 'Member Name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },
    {
      field: 'password',
      headerName: 'Password',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },

    {
      field: 'contact',
      headerName: 'Contact',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },

    {
      field: 'wallet_amount',
      headerName: 'Wallet Amount',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    }
  ];

  const stateData = state.data;

  const rows = Array.isArray(stateData)
    ? stateData.map((dataItem, index) => ({
        id: index + 1,
        member_user_id: dataItem.member_user_id,
        member_name: dataItem.member_name,
        password: dataItem.password,
        contact: dataItem.contact,
        email: dataItem.email,

        wallet_amount: dataItem.wallet_amount
      }))
    : [];

  return (
    <Box sx={{ height: '80vh', width: 1, backgroundColor: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { pageSize: 20, page: 0 }
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } }
        }}
      />
    </Box>
  );
}
