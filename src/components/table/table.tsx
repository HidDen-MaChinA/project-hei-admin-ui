import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables(props:{eventUrl:string}) {
    const {eventUrl}=props
    const [data,setData]=React.useState<any|undefined>();
   
    React.useEffect(()=>{
        axios.get(eventUrl+"/events").then((list)=>{
          console.log("asetase")
          setData(list.data)
        }).catch((err)=>{
          if(err){
            console.log(err)
          }
        })
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">StartEvent</StyledTableCell>
            <StyledTableCell align="right">EndEvent</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">ResponsibleId</StyledTableCell>
            <StyledTableCell align="right">PlaceId</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data!==undefined && data.map((i:any)=>(
            <StyledTableRow key={i.name}>
            <StyledTableCell component="th" scope="row">
              {i.id}
            </StyledTableCell>
            <StyledTableCell align="right">{i.name}</StyledTableCell>
            <StyledTableCell align="right">{i.type}</StyledTableCell>
            <StyledTableCell align="right">{i.startEvent}</StyledTableCell>
            <StyledTableCell align="right">{i.endEvent}</StyledTableCell>
            <StyledTableCell align="right">{i.status}</StyledTableCell>
            <StyledTableCell align="right">{i.responsibleId}</StyledTableCell>
            <StyledTableCell align="right">{i.placeId}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
