import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import { Search as SearchIcon } from '@mui/icons-material';
  import { Upload as UploadIcon } from '@mui/icons-material';
  import { Download as DownloadIcon } from '@mui/icons-material';
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

  export const CustomerListToolbar = (props) => (
    <Box {...props} 
    >
      <Box
        sx={{
            
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1,
         
         
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Productos
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
            onClick={() => ExportData(jsondata[2], "reporteProductos", "PRODUCTOS")}
          >
            Export
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Añadir Productos
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar Producto"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );