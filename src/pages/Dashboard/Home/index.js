import React from "react";

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
const container = [
  [
    {
      variant: 1,
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
      variant: 1,
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
      variant: 1,
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
      variant: 2,
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
  ],
  [
    {
      variant: 1,
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
      variant: 1,
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
      variant: 1,
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
      variant: 1,
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
      variant: 3,
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
      variant: 0,
      rootBlock: {
        background: `https://uploads.codesandbox.io/uploads/user/181a3a32-9208-4242-8f7f-410dc2dc386e/vKMM-FAQ.png`
      },
      infoBlock: {
        text: "Lorem, 123ipsum dolor."
      },
      markup: {
        column: "3/5",
        row: "2/3"
      }
    }
  ]
];
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
