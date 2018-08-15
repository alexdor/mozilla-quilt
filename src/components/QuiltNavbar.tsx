import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem
} from "reactstrap";
import Logo from "../assets/log-mia-b-big.svg";

export interface IQuiltNavbarState {
  readonly isOpen: boolean;
}

export default class QuiltNavbar extends React.Component<
  {},
  IQuiltNavbarState
> {
  public readonly state = {
    isOpen: false
  };

  public render() {
    return (
      <React.Fragment>
        <Navbar className="quilt-navbar mb-5 pb-4" expand="lg" light={true}>
          <NavLink className="mr-auto navbar-brand" to="/">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Internet Health Quilt Logo"
            />
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto justify-content-around" navbar={true}>
              <NavItem>
                <NavLink className="nav-link" to="/stories">
                  mozilla
                  <br />
                  <span>Open Innovation</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/projects">
                  Internet Health
                  <br />
                  <span>Report 2018</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/faq">
                  Frequently
                  <br />
                  <span>Asked Questions</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  onClick={this.postYourStory}
                  color="primary"
                  className="quilt-navbar-button"
                >
                  Post your story
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <section>
          <h1 className="mb-5 d-flex flex-column quilt-action-call">
            <p className="text-center mb-0">
              Make your voice <span className="highlight">heard</span>.
            </p>
            <p className="text-center">
              Make a <span className="highlight">better</span> Internet.
            </p>
            <p className="quilt-action-call-small">
              Submit and read stories of people around the world who are working
              <br />
              towards building a healthier internet in their local community.
            </p>
          </h1>
        </section>
      </React.Fragment>
    );
  }

  private toggleNavbar = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  private postYourStory = () => {
    window.alert("This functionality is temporary disabled");
  };
}
