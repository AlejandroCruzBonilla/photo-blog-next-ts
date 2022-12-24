import { useRef } from "react";
import { Button, Grid, Slide, TextField } from "@mui/material";
import { useOnScreen } from "../../../hooks";

export const ContactForm = () => {
  const inputName = useRef<HTMLDivElement>(null);
  return (
    <Grid component={"form"} mx={"auto"}
      sx={{
        xs: { width: "100vw" },
        md: { width: "60vw" },
      }}
    >
      <Slide direction="right" timeout={500} in={useOnScreen(inputName)}>
        <TextField ref={inputName} sx={{ my: 1 }} fullWidth name="name" label="name" id="name" />
      </Slide>
      <Slide direction="left" timeout={500} in={useOnScreen(inputName)}>
        <TextField sx={{ my: 1 }} fullWidth name="email" label="email" id="email" />
      </Slide>
      <Slide direction="right" timeout={500} in={useOnScreen(inputName)}>
        <TextField sx={{ my: 1 }} fullWidth name="message" label="message" id="message" multiline rows={4} />
      </Slide>
      <Slide direction="up" timeout={500} in={useOnScreen(inputName)}>
        <Button sx={{ my: 1 }} type="submit" fullWidth variant="outlined">Enviar</Button>
      </Slide>
    </Grid>
  )
}
