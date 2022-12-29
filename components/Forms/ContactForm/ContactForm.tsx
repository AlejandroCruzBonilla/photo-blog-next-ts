
import { Button, Grid, Slide, TextField } from "@mui/material";
import { AnimateContainer } from "../../ui";


export const ContactForm = () => {

  return (
    <Grid
      component={"form"}
    >
      {/* <AnimateContainer direction="right" timeout={500}> */}
      <TextField
        sx={{ my: 1 }}
        fullWidth
        name="name"
        label="name"
        id="name"
      />
      {/* </AnimateContainer> */}
      {/* <AnimateContainer direction="left" timeout={500}> */}
      <TextField
        sx={{ my: 1 }}
        fullWidth
        name="email"
        label="email"
        id="email"
      />
      {/* </AnimateContainer> */}
      {/* <AnimateContainer direction="right" timeout={500}> */}
      <TextField
        sx={{ my: 1 }}
        fullWidth
        name="message"
        label="message"
        id="message"
        multiline
        rows={4}
      />
      {/* </AnimateContainer> */}
      {/* <AnimateContainer direction="up" timeout={500}> */}
      <Button
        sx={{ my: 1 }}
        type="submit"
        fullWidth
        variant="outlined"
      >
        Send
      </Button>
      {/* </AnimateContainer> */}
    </Grid>
  )
}
