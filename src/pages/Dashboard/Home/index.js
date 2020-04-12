import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import { GridContainer } from "components/GridContainer";
import { ContentBox } from "components/contentBox";
import { ProfileBlock } from "components/Home/ProfileBlock";

import {container} from './content'

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

const Home = (props) => {
  return (
    <div className="content">
      <ProfileBlock />
      {container.map((containerItem, index) => (
        <GridContainer key={index}>
          {containerItem.map((item, id) => (
            <ContentBox
              variant={item.variant}
              rootBlock={item.rootBlock}
              infoBlock={item.infoBlock}
              columns={item.markup.column}
              rows={item.markup.row}
              key={id}
            />
          ))}
        </GridContainer>
      ))}
    </div>
  );
};

export default Home;
