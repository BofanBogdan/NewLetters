import styled from "@mui/material/styles/styled";
import {
  Box,
  FormLabel,
  Stack,
  Button,
  FormHelperText,
  Dialog as MUIDialog,
  DialogTitle as MUIDialogTitle,
  DialogContent as MUIDialogContent,
  Select as MUISelect,
} from "@mui/material";

export const Dialog = styled(MUIDialog)({
  "& .MuiDialog-paper": { borderRadius: "2rem" },
});

export const Container = styled(Box)({
  display: "flex",
  padding: "1.5rem",
  alignItems: "center",
  gap: "2rem",
});

export const FeaturesContainer = styled(Stack)({
  display: "flex",
  gap: "0.5rem",
  margin: "2rem 0",
});

export const DialogTitle = styled(MUIDialogTitle)({
  fontSize: "3.5rem",
  padding: 0,
});

export const DialogContent = styled(MUIDialogContent)({
  padding: 0,
});

export const Select = styled(MUISelect)({
  marginTop: "0.5rem",
});

export const Label = styled(FormLabel)({
  color: "#000",
  fontSize: "0.875rem",
  fontWeight: 700,
});

export const ErrorLabel = styled(FormHelperText)({
  color: "#f00",
  fontSize: "0.75rem",
});

export const Img = styled(Box)({
  width: "1.2rem",
  height: "1.2rem",
});

export const SubmitButton = styled(Button)({
  height: "3.5rem",
  backgroundColor: "#003",
  marginTop: "2rem",
  textTransform: "none",
  "&: hover": {
    backgroundColor: "orange",
  },
});
