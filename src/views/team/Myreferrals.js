import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getMyRefferal } from '../../redux/user';
import { format } from 'date-fns';

export default function NewPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const res = await getMyRefferal(); // Replace with your API call
      console.log(res);
      if (Array.isArray(res?.data)) {
        // Map the data to the desired structure
        const mappedData = res.data.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          email: item.email,
          registration_date: format(new Date(item.registration_date), 'dd-MM-yyyy'),
          topup_amount: item.topup_amount
        }));
        setRows(mappedData);
      }
    };

    fetchData();
  }, []);

  const newcolumn = [
    { field: 'id', headerName: 'ID' },
    { field: 'member_user_id', headerName: 'Member ID' },
    { field: 'member_name', headerName: 'Name', hide: true },
    { field: 'email', headerName: 'Email', width: 120 },
    { field: 'registration_date', headerName: 'Date of Registration', hide: true, width: 150 },
    { field: 'topup_amount', headerName: 'Topup Amount' }
  ];

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={newcolumn}
        components={{ Toolbar: GridToolbar }}
        autoPageSize
        showToolbar
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        sx={{ background: '#fff', padding: 2, borderRadius: 4 }}
      />
    </div>
  );
}
