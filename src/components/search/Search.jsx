import {  IconButton, Paper } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { colors } from '../../constants/colors';

const Search = () => {
  return (
    <>
      <Paper component={"form"} sx={{border: `1px solid ${colors.color}`,pl:2}}>
        <input type="text" placeholder="search" className='search-bar' />
        <IconButton>
          <SearchIcon/>
        </IconButton>
      </Paper>
    </>
  );
}

export default Search
