import { Stack, Box } from "@mui/material";
import { useState } from "react";
import React from "react";
import Terms from "./Terms.styled";
import PageTitle from "./PageTitle.styled";
import HomeStyle from "./Home.styled";
import ButtonSub from "./ButtonSub.styled";
import ModalSubcribe from "./modal/ModalSubscribe";
import SubscribeNotification from "./SubscribeNotification";
import SignUpDesk from "../../public/illustration-sign-up-desktop.svg";
import SignUpMob from "../../public/illustration-sign-up-mobile.svg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const toggleFormSubmit = () => setFormSubmitted((prev) => !prev);

  return (
    <HomeStyle>
      <PageTitle variant="h1">Newsletters subscribe</PageTitle>
      <Terms>
        This will test your skills with basic form structure, validation, and
        submission. The success state will also be an excellent opportunity to
        work with DOM manipulation.
      </Terms>
      <Box
        component="img"
        sx={{
          content: {
            lg: `url(${SignUpDesk})`,
            md: `url(${SignUpDesk})`,
            xs: `url(${SignUpMob})`,
          },
          ":hover": {
            bgcolor: "hsl(4, 100%, 67%)",
          },
          width: { lg: "initial", md: "initial", xs: "100%" },
        }}
        alt="signupIcon"
      />
      <Stack direction="column" spacing="1rem">
        <ButtonSub onClick={toggleModal}>Subscribe</ButtonSub>
      </Stack>
      <ModalSubcribe
        open={showModal}
        handleClose={toggleModal}
        handleFormSubmitted={toggleFormSubmit}
      />
      <SubscribeNotification open={formSubmitted} onClose={toggleFormSubmit} />
    </HomeStyle>
  );
}

export default Home;
