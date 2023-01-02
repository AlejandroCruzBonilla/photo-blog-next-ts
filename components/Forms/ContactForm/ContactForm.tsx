
import { ChangeEvent, createRef, FormEvent, FormEventHandler, useEffect, useRef, useState } from 'react';
import { Box, Grid, Modal, TextField, Typography } from "@mui/material";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import ReCAPTCHA from "react-google-recaptcha";
// import ReCAPTCHA from "react-recaptcha";
import { LoadingButton } from '@mui/lab';

export const ContactForm = () => {

  // const nameRef = useRef();
  // const emailRef = useRef();
  // const messageRef = useRef();
  const recaptchaRef = createRef<ReCAPTCHA & HTMLDivElement>();

  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tokenReCaptcha, setTokenReCaptcha] = useState<string | null>(null);

  const [emailError, setEmailError] = useState(false);
  // const [errorReCaptcha, setErrorReCaptcha] = useState(false);

  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    setLoading(false)
  }, [recaptchaRef?.current])

  useEffect(() => {
    if ((formErrors.length) || !tokenReCaptcha) setSubmit(true)
    else setSubmit(false);
  }, [formErrors, tokenReCaptcha])

  const handleChangeReCaptcha = (token: string | null) => {
    setTokenReCaptcha(token)
  }
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const validateEmail = String(event.target.value).toLowerCase().match(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );

    if (validateEmail) {
      setFormErrors((errors) => {
        let errs = [...errors]
        if (errs.includes('email')) errs = errs.filter(error => error !== 'email')
        return errs
      })
      setEmailError(false)
    }
    else {
      setFormErrors((errors) => {
        const errs = [...errors]
        if (!errs.includes('email')) errs.push('email')
        return errs
      })
      setEmailError(true)
    }
    setEmail(event.target.value);
  }
  const handleChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await summitFetch()
      setLoading(false)
      setOpenModal(true)
      // recaptchaRef?.current?.reset()
    } catch (e) {
      setLoading(false)
      setOpenModal(true)
      // recaptchaRef?.current?.reset()
    }
  }

  const summitFetch = () => {
    return new Promise((resolve, reject) => {
      setLoading(true)
      fetch('https://8lfo3dwdc0.execute-api.us-east-1.amazonaws.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'recaptcha': tokenReCaptcha ? tokenReCaptcha : ''
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "message": message,
        })
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }

  return (
    <Grid
      component={"form"}
      action=''
      onSubmit={onSubmit}
    >
      <TextField
        fullWidth
        name="name"
        label="name"
        id="name"
        value={name}
        onChange={handleChangeName}
        required
        color="secondary"
        sx={{ my: 1 }}
      />
      <TextField
        fullWidth
        name="email"
        label="email"
        id="email"
        value={email}
        onChange={handleChangeEmail}
        required
        color="secondary"
        error={emailError}
        sx={{ my: 1 }}
      />

      <TextField
        fullWidth
        name="message"
        label="message"
        id="message"
        multiline
        rows={4}
        value={message}
        onChange={handleChangeMessage}
        required
        color="secondary"
        sx={{ my: 1 }}
      />

      <ReCAPTCHA
        sitekey="6Ld4acAjAAAAAMfdrw3m5bLyM8KvpD2KKfFp706X"
        ref={recaptchaRef}
        onChange={handleChangeReCaptcha}
      // asyncScriptOnLoad={reCaptchaLoaded}
      />
      <LoadingButton
        sx={{ my: 1 }}
        type="submit"
        fullWidth
        variant="outlined"
        color="secondary"
        disabled={submit}
        loading={loading}
      >
        Send
      </LoadingButton>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Gracias por el mensaje
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Me pondre en contacto lo mas pronto posible
          </Typography>
        </Box>
      </Modal>
    </Grid>
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};