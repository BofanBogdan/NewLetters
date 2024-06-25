import PropTypes from "prop-types";
import {
  DialogContentText,
  TextField,
  Stack,
  Typography,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as FormComps from "./formComponents";
import { useForm } from "react-hook-form";

const FeaturesList = () => {
  const features = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <FormComps.FeaturesContainer>
      {features.map((feature, index) => (
        <Stack
          key={index}
          direction="row"
          gap="1rem"
          useFlexGap
          alignItems="center"
        >
          <FormComps.Img
            component="img"
            src="/public/icon-list.svg"
            alt="feature icon"
          />
          <Typography variant="subtitle2">{feature}</Typography>
        </Stack>
      ))}
    </FormComps.FeaturesContainer>
  );
};

const ModalSubscribe = ({ open, handleClose, handleFormSubmitted }) => {
  const textsection = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more!" },
  ];
  const frequency = ["Daily", "Weekly", "Monthly"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" }, mode: "all" });

  const onClose = () => {
    handleClose();
  };
  const onSubmit = (data) => {
    console.log(data);
    onClose();
    handleFormSubmitted();
  };

  return (
    <FormComps.Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <FormComps.Container>
        <Stack padding="0 1.5rem">
          <FormComps.DialogTitle>Stay updated!</FormComps.DialogTitle>
          <FormComps.DialogContent>
            <DialogContentText>
              Join 60,000+ product managers receiving monthly updates on:
            </DialogContentText>

            {textsection.map((item, index) => (
              <ListItem key={index} sx={{ p: "0", my: "-5px" }}>
                <ListItemIcon sx={{ minWidth: "36px", minHeight: "10px" }}>
                  <img src="/public/icon-list.svg" alt="Ticks" />
                </ListItemIcon>
                <ListItemText sx={{ color: "hsl(234, 29%, 20%)" }}>
                  {item.text}
                </ListItemText>
              </ListItem>
            ))}

            <Stack gap="1rem" useFlexGap>
              <Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormComps.Label htmlFor="email">
                    Email address
                  </FormComps.Label>
                  {!!errors.email && (
                    <FormComps.ErrorLabel>
                      {errors.email.message}
                    </FormComps.ErrorLabel>
                  )}
                </Stack>
                <TextField
                  id="email"
                  placeholder="your_address@email.com"
                  fullWidth
                  variant="outlined"
                  error={!!errors.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </Stack>

              <Stack>
                <FormComps.Label htmlFor="frequency">
                  Newsletter recurrency
                </FormComps.Label>
                <FormComps.Select
                  id="frequency"
                  defaultValue={frequency[0]}
                  {...register("frequency")}
                >
                  {frequency.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </FormComps.Select>
              </Stack>
            </Stack>
          </FormComps.DialogContent>

          <FormComps.SubmitButton
            variant="contained"
            type="submit"
            size="large"
          >
            Subscribe to monthly newsletter
          </FormComps.SubmitButton>
        </Stack>
        <img
          src="illustration-sign-up-desktop.svg"
          alt="Sign up illustration"
        />
      </FormComps.Container>
    </FormComps.Dialog>
  );
};

ModalSubscribe.displayName = "ModalSubscribe";
ModalSubscribe.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleFormSubmitted: PropTypes.func.isRequired,
};

export default ModalSubscribe;
