import React from "react";

import { Box, Typography } from "@material-ui/core";

import * as H from "./styles";
import { Home } from "../../const";
import ProfileCard from "../../components/ProfileCard";
import RecButton from "../../components/RecButton";

const HomeSection = ({ userData }) => {
  if (!userData) {
    return null;
  }
  return (
    <Box component="div" style={H.section}>
      <Box component="div" style={H.cardContainer}>
        <ProfileCard name={userData.name} url={userData.avatar_url} />
      </Box>
      <Box component="div" style={H.infoContainer}>
        <Box style={H.textBox}>
          <Typography variant="h4" style={{ marginBottom: 7 }}>
            {Home.introHeader}
          </Typography>
          <Typography style={{ width: 320 }}>{Home.introDesc}</Typography>
        </Box>
        <Box style={H.buttonBox}>
          <RecButton
            title={Home.button.git.title}
            image={Home.button.git.image}
            link={Home.button.git.link}
            color={Home.button.git.color}
          />
          <RecButton
            title={Home.button.linkedin.title}
            image={Home.button.linkedin.image}
            link={Home.button.linkedin.link}
            color={Home.button.linkedin.color}
          />
          <RecButton
            title={Home.button.fb.title}
            image={Home.button.fb.image}
            link={Home.button.fb.link}
            color={Home.button.fb.color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSection;
