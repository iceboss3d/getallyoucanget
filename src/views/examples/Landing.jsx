import React from "react";
// nodejs library that concatenates classes
// import classnames from "classnames";

// reactstrap components
import {
  // Badge,
  Button,
  // Card,
  // CardBody,
  // CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";

// Image Imports
import gaycg from "../../assets/img/theme/gaycg1.png"
import sking from "../../assets/img/theme/solomon-king1.png"
import Helmet from 'react-helmet';

class Landing extends React.Component {
  state = {
    deviceWidth: 0,
  };
  componentDidMount() {
    this.setState({ deviceWidth: window.innerWidth });
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  updateWidth = () => {
    this.setState({ deviceWidth: window.innerWidth })
  }
  render() {
    const customStyle = {
      mobileShow: {
        display: "block",
        objectFit: "cover",
        objectPosition: "center",
        width: "100%"
      },
      mobileHide: {
        display: "none"
      },
      profileImg: {
        heigth: "408px",
        width: "408px",
      }
    }
    return (
      <>
        <Helmet>
          <title>Get All You Can Get</title>
          <meta name="description" content="In this great, easy-to-grab money manual, Africa’s Premier financial Adviser, Solomon King has laid out the financial facts of the faith. God wants you to be successful, and in this book, The Money King will show you how." />
          <link rel='canonical' href="https://books.solomonking.info/get-all-you-can-get" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Get All You Can Get" />
          <meta property="og:url" content="https://books.solomonking.info/get-all-you-can-get" />
          <meta property="og:image" content={gaycg} />
          <meta property="og:description" content="In this great, easy-to-grab money manual, Africa’s Premier financial Adviser, Solomon King has laid out the financial facts of the faith. God wants you to be successful, and in this book, The Money King will show you how." />
          <meta property="twitter:site" content="@solomonpking" />
          <meta property="twitter:title" content="Get All You Can Get" />
          <meta property="twitter:image" content={gaycg} />
          <meta property="twitter:description" content="In this great, easy-to-grab money manual, Africa’s Premier financial Adviser, Solomon King has laid out the financial facts of the faith. God wants you to be successful, and in this book, The Money King will show you how." />
        </Helmet>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Get All You{" "}
                        <span>Can Get</span>
                      </h1>
                      <img style={this.state.deviceWidth <= 991 ? customStyle.mobileShow : customStyle.mobileHide} src={gaycg} alt="Get All You Can Get" />
                      <p className="lead text-white">
                        In this great, easy-to-grab money manual, Africa’s Premier financial Adviser, Solomon King has laid out the financial facts of the faith. God wants you to be successful, and in this book, The Money King will show you how.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-shopping-cart" />
                          </span>
                          <span className="btn-inner--text">Buy Now</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-info" />
                          </span>
                          <span className="btn-inner--text">
                            About The Book
                          </span>
                        </Button>
                      </div>
                    </Col>
                    <Col lg="6" style={this.state.deviceWidth <= 991 ? customStyle.mobileHide : customStyle.mobileShow}>
                      <img src={gaycg} alt="Get All You Can Get" />
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          {/*<section className="section section-lg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Download Argon
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>*/}
          <section className="section section-lg">
            <Container>
              <h2 className="display-3 text-center">About The Book</h2>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="Get All You Can Get Cover"
                    className="img-fluid floating"
                    src={gaycg}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/*<div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-info" />
                    </div>*/}
                    <p>
                      Too many Christians are broke.
                    </p>
                    <p>
                      It appears as though many Christians have accepted debts and overwhelming bills as a reality of their lives, and this should not be so. The mathematics of wealth is simple; God owns the world and everything in it, and he does not withhold them from us. Therefore, we have access to money and luxury. Christians simply need to learn how to take it.
                    </p>
                    <p>
                      God has given us so many principles for wealth generation, preservation and acceleration, and Solomon King exposes and explains all of them in this revolutionary book.
                    </p>
                    {/* <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Creating & Exchanging Solutions for Money
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Powerful Strategies to get out of Debt</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Improve your Business and grow your Job skills
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              A crash course in Investment Management
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">The Practical Dynamics of Spiritual Economics</h6>
                          </div>
                        </div>
                      </li>
                    </ul>*/}
                    <Button className="btn-icon btn-3" color="primary" type="button">
                      <span className="btn-inner--icon">
                        <i className="fa fa-shopping-cart" />
                      </span>
                      <span className="btn-inner--text">Buy Now</span>
                    </Button>
                    {/*<p>
                      With clear language and inspiring personal anecdotes, this book renders even the most complex financial concepts simple and actionable. It walks readers at every income level through the steps to becoming financially free by dispelling wrong perspectives about money and creating new powerful financial aptitudes.
                    </p>*/}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid justify-content-center">
                <Col className="text-center" lg="8">
                  <blockquote className="blockquote text-center">
                    <p className="mb-0">
                      There is a gift that should be a skill that can pay you. Increase its capacity to earn. The better you become at it, the more money you can make.
  </p>
                    <footer className="blockquote-footer">
                      Solomon King in <cite title="Source Title">Get All You Can Get</cite>
                    </footer>
                  </blockquote>
                  <div className="btn-wrapper">
                    <Button className="btn-icon btn-3" color="info" href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page">
                      <span className="btn-inner--icon">
                        <i className="fa fa-twitter" />
                      </span>
                      <span className="btn-inner--text">Tweet</span>
                    </Button>
                    <Button className="btn-icon btn-3" color="primary" href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page">
                      <span className="btn-inner--icon">
                        <i className="fa fa-facebook" />
                      </span>
                      <span className="btn-inner--text">Share</span>
                    </Button>
                  </div>
                  {/*<Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>*/}
                </Col>
                {/*<Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>*/}
              </Row>
            </Container>
          </section>
          {/*<section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              </Container>*/}
          {/* SVG separator */}
          {/*<div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>*/}
          <section className="section section-lg">
            <Container>
              <h2 className="display-3 text-center">About The Author</h2>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="Solomon King"
                    className="img-fluid"
                    src={sking}
                    style={customStyle.profileImg}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <p>
                      Solomon King is a wealth enthusiast, who believes that we all can leave a fun, financially-free life with the word of God as our Guide. He has completed 6 executive education certifications in Accounting Analytics, Personal Finance, Advanced Strategy, Negotiations, Leadership and Entrepreneurship from top institutions including Lagos Business School, University of California, Irvine, University of Pennsylvania-The Wharton School and Ludwig-Maximilians Universität München.
                    </p>
                    <p>
                      Over the years, he has toured churches and secular institutions, setting the facts straight on finances, and guiding men and women to a life of wealth and success.
                    </p>
                    <p>
                      Solomon King is also the CEO of Brass and Books, a firm that focuses on investments, and gives individuals of every class and race the opportunity to live a life of financial freedom.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*<section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
        </section>*/}
          <section className="section section-lg bg-gradient-default">
            <Container>
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Who Is Get All You Can Get For?</h2>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Entrepreneurs</h5>
                  <p className="text-white mt-3">
                    This is for you if you have been giving an idea that can change thingsin your niche. This book will teach you how to make your idea earn for you, everyday, starting today.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Executives and Managers</h5>
                  <p className="text-white mt-3">
                    You do not have to work like a mule to be successful at a top position. As you read Get All You Can Get, you will learn how to maximize your team, live beyond your job, and experience heightened success.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">College Students</h5>
                  <p className="text-white mt-3">
                    The world is huge and overwhelming when you have just started to really experience it. This book is a guide that will take you successfully through the tunnels and over all the hurdles.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
