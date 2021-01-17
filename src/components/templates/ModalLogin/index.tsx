import React from "react";
import ReactModal from "react-modal";

import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";
import Input from "components/atoms/Input";
import Social from "components/atoms/Social";

interface ModalLoginProps {
  opened: boolean;
  handleClose?: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ opened, handleClose }) => (
  <ReactModal
    className="t-modalLogin"
    isOpen={opened}
    contentLabel="LOGIN"
  >
    <div className="t-modalLogin_header">
      <Icon iconName="loginHead" />
      <h2 className="t-modalLogin_title">Login/Register Now</h2>
      <button className="t-modalLogin_close" onClick={handleClose}><Icon iconName="close" /></button>
    </div>
    <div className="t-modalLogin_body">
      <p className="t-modalLogin_text t-modalLogin_text-white">Select the login most convenient for you</p>
      <div className="t-modalLogin_btnConnect">
        <Button theme="gradient">Connect Dapp Wallet</Button>
      </div>
      <p className="t-modalLogin_text mt-14">or</p>
      <form className="t-modalLogin_form">
        <Input type="email" icon="mail" placeholder="EMAIL" />
        <Input type="password" icon="password" placeholder="PASSWORD" />
        <Button>Login</Button>
      </form>
      <p className="t-modalLogin_text mt-24">or social media</p>
      <div className="t-modalLogin_socials">
        <Social type="google" />
        <Social type="facebook" />
        <Social type="twitter" />
        <Social type="telegram" />
        <Social type="phoneSocial" />
      </div>
      <p className="t-modalLogin_text t-modalLogin_text-white mt-32">Don’t have an account?</p>
      <div className="t-modalLogin_btnCreate"><Button>Create new account</Button></div>
      <div className="t-modalLogin_btnSkip"><Button theme="text">skip</Button></div>
    </div>
  </ReactModal>
);

export default ModalLogin;
