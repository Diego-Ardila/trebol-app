import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { TemplateInput } from "../../utils/Types";
import { formatBytes } from "../../utils/FormatBytes";
import { BsFolderSymlink } from "react-icons/bs";

type TableProps = {
  rows: TemplateInput[]
}

function CustomTable({ rows }: TableProps) {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Box sx={{ width: "calc(100% - 10px)", display: "table", tableLayout: "fixed", padding: "5px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre de archivo</TableCell>
                <TableCell align="left">Tipo de archivo</TableCell>
                <TableCell align="left">Tamaño</TableCell>
                <TableCell align="left">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                if(row.file) {
                  return (
                    <TableRow
                      key={row.file.key}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.file.fileName}
                      </TableCell>
                      <TableCell align="left">{row.file.contentType}</TableCell>
                      <TableCell align="left">{formatBytes(row.file.size)}</TableCell>
                      <TableCell align="left">
                        <a href={row.file.location} target="_blank">
                          <BsFolderSymlink />
                        </a>
                      </TableCell>
                    </TableRow>
                  )
                }
                return null
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default CustomTable;