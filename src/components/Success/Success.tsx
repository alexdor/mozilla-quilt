import * as React from 'react';

import Possum from './assets/icon-possum.svg';

const Success = ({ closeModal, background }: any) => (
  <div style={{ background }} className="post-success">
    <img src={Possum} />
    <h3>Awesome possum!</h3>
    <p>Thanks for sharing your thoughts</p>
    <button onClick={closeModal}>Cool</button>
  </div>
);

export default Success;
