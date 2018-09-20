import * as React from 'react';
import * as ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { Button, Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

import Logo from '../assets/log-mia-b-big.svg';
import PostYourStory from './PostYourStory';

export interface IQuiltNavbarState {
  readonly isOpen?: boolean;
  readonly isModalOpen?: boolean;
}

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    minHeight: "300px",
    minWidth: "250px",
    width: "60%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    maxHeight: "98vh",
    maxWidth: "98vw"
  }
};

export default class QuiltNavbar extends React.Component<
  {},
  IQuiltNavbarState
> {
  public readonly state = { isOpen: false, isModalOpen: true };

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
        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button
            className="d-block ml-auto btn btn-no-outline"
            onClick={this.closeModal}
          >
            X
          </button>
          <PostYourStory closeModal={this.closeModal} />
        </ReactModal>
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
  private closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  private postYourStory = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen
    }));
  };
}
