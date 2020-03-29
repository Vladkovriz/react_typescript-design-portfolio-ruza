import React, { useState } from "react";

import { NavigationMenu } from "components/Portfolio/Navigation";
import { ContentPortfolio } from "components/Portfolio/ContentPortfolio";

import { ContentBox } from "components/contentBox";

import { portfolioData } from "components/Portfolio/data";

const Portfolio = (props) => {
  const [categorie, setCategorie] = useState(null);
  return (
    <>
      {console.log(categorie)}
      <NavigationMenu setCategorie={setCategorie} />
      <br />
      <ContentPortfolio
        data={
          categorie !== null
            ? portfolioData.filter((item) => item.categorie === categorie)
            : portfolioData
        }
      ></ContentPortfolio>
    </>
  );
};

export default Portfolio;
