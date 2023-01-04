import React/*, { useState }*/ from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
// import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import { Link } from "react-router-dom";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import Results from "../../components/Results/Results";

const SearchPage = () => {
  // const [searchState, setSearchState] = useState("");

  const rows = [
    {
      number: '1',
      title: 'Beb is Stinky',
      composer: 'Josie',
      arranger: 'Brandon'
    },
    {
      number: '2',
      title: 'Beb is DUMB',
      composer: 'Josie',
      arranger: 'Also Josie'
    }
  ]

  return (
    <Box className="flex-column align-center">
      <Stack spacing={2} alignItems='center'>
        <Typography variant="h1" sx={{ fontSize: "3rem" }}>
          NC Revelers Orchestra Book
        </Typography>
        {/* <SearchBar searchState={searchState} setSearchState={setSearchState} /> */}
        <Paper elevation={0} variant="outlined" sx={{ width: "100%", padding: "2px 12px 0 12px" }}>
          <Stack direction="row">
            <Input disableUnderline={true} variant="standard" fullWidth />
            <Divider orientation="vertical" />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Stack>
        </Paper>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Composer</TableCell>
                <TableCell>Arranger</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.composer}</TableCell>
                  <TableCell>{row.arranger}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Results searchState={searchState} /> */}
      </Stack>
    </Box>
  );
};

export default SearchPage;
