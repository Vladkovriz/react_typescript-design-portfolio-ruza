import React, { useState } from "react";

import { GridContainer } from "../../../components/GridContainer";
import { ContentBox } from "../../../components/contentBox";
import { ProfileBlock } from "../../../components/Home/ProfileBlock";
// type ContentBoxType = {
//   rootBlock: {
//     background?: string | void;
//   };
//   infoBlock: {
//     text: string;
//     iconText?: string | void;
//   };
//   markup: {
//     column: string;
//     row: string;
//   };
// };
const firstContainer = [
  {
    rootBlock: {
      background: "https://jlk78.csb.app/img/portfolio/p6.jpg"
    },
    infoBlock: {
      text: "Lorem, ipsum dolor.",
      iconText: "Широкоформатная печать"
    },
    markup: {
      column: "1/3",
      row: "1/3"
    }
  },
  {
    rootBlock: {
      background: "https://jlk78.csb.app/img/portfolio/p6.jpg"
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor.",
      iconText: "Широкоформатная печать"
    },
    markup: {
      column: "3/5",
      row: "1/2"
    }
  },
  {
    rootBlock: {
      background: "https://jlk78.csb.app/img/portfolio/p6.jpg"
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor."
    },
    markup: {
      column: "3/4",
      row: "2/3"
    }
  },
  {
    rootBlock: {
      background: `https://jlk78.csb.app/img/portfolio/p6.jpg`
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor."
    },
    markup: {
      column: "4/5",
      row: "2/3"
    }
  }
];
const secondContainer = [
  {
    rootBlock: {
      background: "https://jlk78.csb.app/img/portfolio/p6.jpg"
    },
    infoBlock: {
      text: "Lorem, ipsum dolor.",
      iconText: "Широкоформатная печать"
    },
    markup: {
      column: "1/3",
      row: "1/2"
    }
  },
  {
    rootBlock: {
      background: "https://jlk78.csb.app/img/portfolio/p6.jpg"
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor.",
      iconText: "Широкоформатная печать"
    },
    markup: {
      column: "3/4",
      row: "1/2"
    }
  },
  {
    rootBlock: {
      background: "https://jlk78.csb.app/img/portfolio/p6.jpg"
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor."
    },
    markup: {
      column: "4/5",
      row: "1/2"
    }
  },
  {
    rootBlock: {
      background: `https://jlk78.csb.app/img/portfolio/p6.jpg`
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor."
    },
    markup: {
      column: "1/2",
      row: "2/3"
    }
  },
  {
    rootBlock: {
      background: `https://jlk78.csb.app/img/portfolio/p6.jpg`
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor."
    },
    markup: {
      column: "2/3",
      row: "2/3"
    }
  },
  {
    rootBlock: {
      background: `https://jlk78.csb.app/img/portfolio/p6.jpg`
    },
    infoBlock: {
      text: "Lorem, 123ipsum dolor."
    },
    markup: {
      column: "3/5",
      row: "2/3"
    }
  }
];
const Home = (props) => {
  return (
    <div className="content">
      <ProfileBlock />
      <GridContainer>
        {firstContainer.map((item, id) => (
          <ContentBox
            rootBlock={item.rootBlock}
            infoBlock={item.infoBlock}
            columns={item.markup.column}
            rows={item.markup.row}
            key={id}
          />
        ))}
      </GridContainer>
      <GridContainer>
        {secondContainer.map((item, id) => (
          <ContentBox
            rootBlock={item.rootBlock}
            infoBlock={item.infoBlock}
            columns={item.markup.column}
            rows={item.markup.row}
            key={id}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Home;
