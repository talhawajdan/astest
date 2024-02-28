import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import { Box, Grid, Typography, Button } from "@mui/material";
import FormProvider from "@/components/hook-form/FormProvider";
import * as Yup from "yup";
import RHFTextField from "@/components/hook-form/RHFTextField";

function ContactFrom() {
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required("required"),
        nameOnCard: Yup.string().required("required"),
      })
    ),
    defaultValues: {
      email: "",
      nameOnCard: "",
    },
  });
  const { handleSubmit } = methods;
  const SubmitData = () => {};
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(SubmitData)}>
      <Paper variant="elevation" elevation={2} sx={{ p: 1.5 }}>
        <Grid container spacing={5.8}>
          <Grid xs={12} item px={2}>
            <Typography sx={Style.TypographyHeadingMainStyle}>
              Card Type
            </Typography>
            <Box mt={1}>
              <RHFTextField name={"email"} />
            </Box>
          </Grid>
          <Grid xs={12} item px={2}>
            <Typography sx={Style.TypographyHeadingMainStyle}>
              Name On Card
            </Typography>
            <Box mt={1}>
              <RHFTextField name={"nameOnCard"} />
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Box display="flex">
              <Box ml={"auto"}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={Style.buttonStyle}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </FormProvider>
  );
}

export default ContactFrom;
// style for contactFrom
const Style = {
  TypographyHeadingMainStyle: {
    color: "#232323",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.52px",
  },
  buttonStyle: {
    bgcolor: "#1814F3",
    px: 2,
    borderRadius: "9px",
    "&:hover": {
      bgcolor: "#1814F3",
    },
  },
};
