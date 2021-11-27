import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Layouts/Header";
import AMSDashboard from "./Layouts/AMSDashboard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Header title="Dashboard Application" />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Filters</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <AMSDashboard />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Footer</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
