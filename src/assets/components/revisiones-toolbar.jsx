import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { Download as DownloadIcon } from "@mui/icons-material";

import Cookies from "universal-cookie";
import * as XLSX from "xlsx/xlsx.mjs";

const cookies = new Cookies();
var jsondata = cookies.get("reportes");

function ExportData(data, archivo, tipo) {
  if (data == 0) {
    window.alert("No existen registros de " + tipo);
  }
  var filename = archivo + ".xlsx";
  var ws = XLSX.utils.json_to_sheet(data);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "People");
  XLSX.writeFile(wb, filename);
}

export const RevisionListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Revision
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          startIcon={<DownloadIcon fontSize="small" />}
          sx={{ mr: 1 }}
          onClick={() => ExportData(jsondata[3], "reporteRevisión", "REVISIÓN")}
        >
          Export
        </Button>
        <Button color="primary" variant="contained" onClick={()=>window.location.href = "/revisiones/crear"}>
          Añadir Revision
        </Button>
      </Box>
    </Box>
  </Box>
);