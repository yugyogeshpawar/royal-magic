import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { getRefBonus } from '../../redux/user';

export default function RefBonusPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch referral bonus data from the API
      const res = await getRefBonus(); // Replace with your API call

      if (Array.isArray(res?.data)) {
        // Map the data to the desired structure
        const mappedData = res.data.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          registration_date: format(new Date(item.calculate_date), 'dd-MM-yyyy'),
          topup_amount: item.income_amt
        }));
        setRows(mappedData);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'member_user_id', headerName: 'Member ID', width: 100 },
    { field: 'member_name', headerName: 'Name', hide: true, width: 180 },
    { field: 'registration_date', headerName: 'Date of Registration', hide: true, width: 150 },
    { field: 'topup_amount', headerName: 'Topup Amount', width: 160 }
  ];

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
