import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function QtySelectMui(props) {
  const { qty, handleChange } = props;
  const objects = [...Array(10).keys()];

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={qty}
            onChange={handleChange}
          >
            {objects.map(function (i) {
              return <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}