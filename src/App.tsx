import React, { useContext, useCallback, FunctionComponent } from "react";
import {
  RepeatingPatternBackgroundContainer,
  PageHeader,
  Quote,
  Emoji,
  Content,
  MenuBar,
  PortfolioIntro,
  ContentHeader,
  ContentContainer,
} from "./components";
import { ThemeContext } from "./context";
import "./App.css";
const author1 = require("./assets/images/mark-img.png");
const author2 = require("./assets/images/billgates-img.png");
const backgroundPattern = require("./assets/images/bgdull-img.svg");

const App: FunctionComponent = () => {
  const theme = useContext(ThemeContext);

  const getPortfolioSubjectByTheme = useCallback(() => {
    if (theme && theme.themeName === "lightTheme") {
      return require("./assets/images/guywithmic2.png");
    }
    if (theme && theme.themeName === "darkTheme") {
      return require("./assets/images/guywithmic2-darktheme.png");
    }
  }, [theme]);

  return (
    <RepeatingPatternBackgroundContainer
      backGroundPatter={backgroundPattern}
      repeatVertical={false}
      backgroundColor="#0060f3"
      customStyle="portfolio-style"
    >
      <MenuBar />
      <div className="container">
        <div className="welcome-header">
          <PageHeader>WELCOME</PageHeader>
        </div>
        <PortfolioIntro
          introText={"Hi!, i'm"}
          name={"Suvel Rathneswar"}
          profession={"Software Engineer"}
          extra={
            <span>
              <Emoji label="office bag" symbol={"💼"} />@ Soft Suave,Banglore
            </span>
          }
        />
      </div>
      <Quote
        customWrapperStyle="quotes-wrapper"
        quote="Programming is like any other sport.You might know the rules but
              you have to play to learn."
        by="Zuckerberg"
        image={author1}
      />
      <div className="container">
        <Content
          id={"content1"}
          header={`Skills`}
          emoji={<Emoji label={"libraries"} symbol={"🛠"} />}
          body={`React.js,Typescript,Lodash,Moment.js,Three.js,Storybook,React-testing-library,Node.js,Express.js, REST API,SQL and PLSQL, Firebase,JsFroce,AWS( Ec2, Lamda,S3),Bash scripting,github pages,git,Notion, Figma,Jira.`}
        />
        <Content
          id={"content2"}
          header="Projects"
          emoji={<Emoji label={"printer"} symbol={"📃"} />}
          body={
            <>
              <>
                <h4>Kannaku Sollu (Currently building 👷‍♂️)</h4>
                <p className="justified-paragraph">
                  Kannaku Sollu is a fun project that I have designed and
                  developed to showcase my approach towards the application
                  Splitwise.
                </p>
                <p className="justified-paragraph">
                  I am building the application so that I could have emoji
                  expressions which should be self-explanatory of the expenses,
                  like snacks or grocery things, which are more user friendly in
                  my opinion. This is the first project that I have tried to
                  implement micro animation and transition when moving from one
                  to another section.
                </p>
                <a
                  className="bold-link bule-bg"
                  href="https://suvel.github.io/kannaku_sollu/"
                  target="_blank"
                >
                  Link to the web application
                </a>
              </>
              <>
                <h4>Tenant and Users</h4>
                <p className="justified-paragraph">
                  Tenant and Users is an admin dashboard that supports multi
                  routes and user-type customized dashboard views, charts, and a
                  heat map to visualize the data and to make data-driven
                  decisions.
                </p>
                <span>I was responsible for:</span>
                <ul>
                  <li>
                    Building a desktop and mobile responsive web application
                    that supports cross-browsers, and optimizing the user
                    experience for the same.
                  </li>
                  <li>
                    Creating a heat map using Marker Clustering and Google map
                  </li>
                  <li>
                    Using Firebase NoSQL database and Firestore to manage data
                    and resources
                  </li>
                </ul>
              </>
              <>
                <h4>Warehouse Stimulation</h4>
                <p className="justified-paragraph">
                  Warehouse Stimulation is a React based proof of work that
                  renders a dynamic warehouse with racks, aisle, floor markers
                  from an input Object. It also renders pallets on those racks
                  and provides functionality to toggle the arrangement of the
                  same. The project was aimed to visualize the different types
                  of possible arrangements and to make the process of data
                  driven decision making simple.
                </p>
                <p className="justified-paragraph">
                  I was responsible for brainstorming with clients to document
                  the requirements, building the application from starch,
                  deploying the application and improving the application’s
                  performance in the course of developing the same.
                </p>
                <a
                  className="bold-link bule-bg"
                  href="https://suvel-the-dev.github.io/warehouse_management/"
                  target="_blank"
                >
                  Link to proof of work demo
                </a>
              </>
              <>
                <h4>ChickIncubator</h4>
                <p className="justified-paragraph">
                  ChickIncubator is an application that helps supervisors and
                  workers of a chicken incubator factory to assign work, create
                  checklists, renew equipment and troubleshoot issues. I was
                  responsible for creating new REST endpoints and services on
                  the Express server, updating MySQL queries and procedures that
                  were used by the server, maintaining the application to be
                  mobile responsive and creating new React components.
                </p>
                <p className="justified-paragraph">
                  I have also redesigned a page to reduce the number of clicks
                  that were made in order to use the application, this very much
                  appreciated by the client.
                </p>
              </>
              <>
                <h4>Truckers</h4>
                <p className="justified-paragraph">
                  Truckers is a logistic application that is created using ionic
                  and backed by an Express REST server.
                </p>
                <p className="justified-paragraph">
                  I was responsible for creating routes, connecting the server
                  with the JsForce, documenting the APIs in Postman and also
                  analyzing the frontend application’s API request through logs,
                  to make sure it was not bottlenecking the server
                  unnecessarily.
                </p>
                <p className="justified-paragraph">
                  While working in this project I have created an Express
                  middleware that logs the Method, query parameters, payload,
                  the body of the request, and the response to the requests that
                  are sent to the server, through I was able to find certain
                  screens of the application were initiating unnecessary API
                  calls and reported the same to the Ionic developer to correct
                  the same, which had a slight improvement in application UX.
                </p>
              </>
              <>
                <h4>Tpro</h4>
                <p className="justified-paragraph">
                  Tpro is an admin dashboard that enables its customers to
                  create, schedule , visualize, and send emails about related
                  reports.
                </p>
                <p className="justified-paragraph">
                  I was responsible for creating AMIs for multiple instances and
                  upgrading the instances with scripts that could startup the
                  services automatically on rebooting, running cron jobs to
                  maintain the volume of the instances, and creating the Lambda
                  function that cleans up the S3 to remove unnecessary
                  resources.
                </p>
                <p className="justified-paragraph">
                  I was able to find and fix a server that was constantly going
                  down, the issue was in the RAM configuration as the configured
                  RAM had less memory compared to the load it was processing. I
                  added Swap memory to mitigate the issue, and this was very
                  much appreciated by the project manager.
                </p>
              </>
            </>
          }
        />
        <Content
          id={"content3"}
          header={"Digital footprint"}
          body={
            <React.Fragment>
              <a
                target="_blank"
                href="https://github.com/suvel"
                className="bold-link bule-bg"
              >
                Git Repository
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/suvel-rathneswar-%E2%A0%80-baab611b7/"
                className="bold-link bule-bg"
              >
                Linkedin
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/findsuvel"
                className="bold-link bule-bg"
              >
                Behance
              </a>
              <a
                target="_blank"
                href="mailto: find.suvel@gmail.com"
                className="bold-link bule-bg"
              >
                Email me
              </a>
            </React.Fragment>
          }
          emoji={<Emoji label={"repo"} symbol={"📁"} />}
        />
        <Content
          id={"content4"}
          header={"Current Working Status"}
          body={
            <p className="justified-paragraph">
              I am software trainee at softsuave,bangalore. Soft Suave is a fast
              growing Information Technology (IT) company headquartered in one
              of the largest technology-hubs in India – Chennai with a sales
              office in Catonsville, MD – United States. Soft Suave is
              specialized in providing end-to-end IT Services and Solutions to
              mid-market and Fortune-500 across the USA, UK, Australia, France,
              Denmark, Iceland, UAE, and India. We have a significant expertise
              and a best-in-class track record in creating and delivering
              high-value IT-enabled business solutions. We provide rapid and
              cost-effective Enterprise Solutions in several key areas including
              Web Application Development, Mobile Application Development, Cloud
              Computing and Legacy Modernization. Soft Suave is an ISO 9001-2015
              certified company
            </p>
          }
          emoji={<Emoji label={"repo"} symbol={"👔"} />}
        />
      </div>
      <Quote
        customWrapperStyle="quotes-wrapper"
        quote="We all need people who will give us feedback.That’s how we
        improve."
        by="Bill Gates"
        image={author2}
        extra={
          <a
            style={{ color: "rgb(0, 96, 243)" }}
            href="mailto: find.suvel@gmail.com"
          >
            Send your feedbacks here
          </a>
        }
      />
    </RepeatingPatternBackgroundContainer>
  );
};

export default App;
