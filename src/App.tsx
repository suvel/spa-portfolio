import React from "react";
import {
  RepeatingPatternBackgroundContainer,
  PageHeader,
  Quote,
  Emoji,
  Content,
  MenuBar,
} from "./components";
import "./App.css";
const portfolioSubject = require("./assets/images/guywithmic2.png");
const author1 = require("./assets/images/mark-img.png");
const author2 = require("./assets/images/billgates-img.png");
const backgroundPattern = require("./assets/images/bgdull-img.svg");

function App() {
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
        <div className="intro-paragraph">
          <p>
            <span>Hi!, i'm</span>
            <br />
            <span className={"weight-regular"}>Suvel Rathneswar</span>
            <br />
            <span className={"weight-regular"}>Web Developer</span>
            <br />
            <span>
              <Emoji label="office bag" symbol={"💼"} />@ Soft Suave,Banglore
            </span>
          </p>
        </div>
      </div>
      <Quote
        customWrapperStyle="quotes-wrapper"
        quote="Programming is like any other sport.You might know the rules but
              you have to play to learn."
        by="Zuckerberg"
        image={author1}
        extra={
          <img
            src={portfolioSubject}
            alt={"personalphoto"}
            className="personal-image"
          />
        }
      />
      <div className="container">
        <Content
          id={"content1"}
          header="Libraries"
          emoji={<Emoji label={"libraries"} symbol={"📦"} />}
          body={"react,typescript,lodash,moment,classnames"}
        />
        <Content
          id={"content2"}
          header="Current Project"
          emoji={<Emoji label={"printer"} symbol={"🖨️"} />}
          body={
            <p className="justified-paragraph">
              The Current project that i am working on is "Admin portal" site
              where there are three level of user and each having their own set
              of authorization and data set . The "Tenant admin/Super admin"
              highest level of authority , they can create and manipulate tenant
              and tenant data."Tenant / admin " is the user who invite or create
              user and manage them. I have used Core UI bootstrap frame
              ,google-map-react (There is Tab for "Tenant/user" where we mark
              the user data on their respective co-ordinates, the client wanted
              a heat-map like functionality on this tab so we used
              google-map-react to achieve that),points-cluster (I used
              clustering techniques to group the users because we had a problem
              in "google-map-react" as its markers where overlapping each other
              while zooming out.) , react-idle-timer (I also maintain session in
              this project,with the help of "react-idle-timer" we notify the
              user about their ideal state,when the individual do not make any
              "mouse movement" or "key press" the ideal listener is triggered),
              firebase and redux.
            </p>
          }
        />
        <Content
          id={"content3"}
          header={"My works"}
          body={
            <React.Fragment>
              <p className="bold-link">Git Repository</p>
              <p className="bold-link">Behance</p>
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
          <div className="portfolio-details-container">
            <h2 className="header">
              Send Feedback <Emoji label="office bag" symbol={"💌"} />
            </h2>
          </div>
        }
      />
      <div className="container">
        <Content
          id={"content5"}
          header={"Hire me!"}
          body={<p className="bold-link">suvel@softsuave.com</p>}
          emoji={<Emoji label={"repo"} symbol={"🤝"} />}
        />
      </div>
    </RepeatingPatternBackgroundContainer>
  );
}

export default App;
