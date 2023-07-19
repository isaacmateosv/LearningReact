// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import { datos } from '../../data/datosTabla';

function createData(id, nombre, apellido, edad, mail, telefono) {
  return { id, nombre, apellido, edad, mail, telefono };
}
    //Traer datos de API    (Placeholders y Users)
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json();

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

    


    const rows = data.map((dato)=>(
        createData(dato.id, dato.name, dato.username, dato.email, dato.phone, dato.website)
        )
    )
        // datos.map((dato)=>(
        //     // createData(dato.id,dato.nombre,dato.apellido,dato.edad,dato.email,dato.telefono)
        //     createData(...Object.values(dato))
        // ))


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Mail</TableCell>
            <TableCell align="right">Telf</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.edad}</TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}