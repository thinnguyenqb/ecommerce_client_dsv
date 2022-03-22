import * as React from "react";
import "./AccountInfo.scss";

export function InfoAccount({nameUser, userInfo}) {
  return (
    <div className="info-account">
      <div className="container-content">
        <p className="title">Name</p>
        <p className="content">{nameUser}</p>
      </div>
      <div className="container-content">
        <p className="title">E-mail</p>
        <p className="content">{userInfo?.email}</p>
      </div>
    </div>
  );
}

export default InfoAccount;
