import React, { useEffect, useState } from "react";
import { faArrowLeft, faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import "./Profile.css";
import routes from "../routes.json";
import LoadingScreen from "../loadingscreen/LoadingScreen";
import QRCode from "react-qr-code";

const gosuslugiSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193 212.1">
    <path
      fill="#EF4058"
      d="M79.2 107.9H59.6c-.2 0-.3.1-.4.3-.5 8.9-2.2 18.4-4.6 26.2 0 .1 0 .2.1.3.1.1.2.1.3.1h6.7c.2 0 .3-.1.3-.2 1.9-6 3.4-13.8 4-20.4h6.4v20.3c0 .2.2.4.4.4h6.4c.2 0 .4-.2.4-.4v-26.3c0-.2-.2-.3-.4-.3M162.1 107.9h-6.4c-.2 0-.4.2-.4.4v20.3c-1.4.4-2.8.6-4.4.6-4.2 0-5.2-1.3-5.2-6.9v-14c0-.2-.2-.4-.4-.4H139c-.2 0-.4.2-.4.4V123c0 9.2 3.1 12.7 11 12.7 4.5 0 9.6-1.2 12.6-2.3.1-.1.2-.2.2-.3v-24.8c.1-.3-.1-.4-.3-.4M26.5 107.9H20c-.2 0-.3.1-.3.3-1 4-3.1 10.8-5.9 17.9l-6.5-17.9c-.1-.1-.2-.2-.3-.2H.4c-.1 0-.2.1-.3.2-.1.1-.1.2 0 .3l9.8 26.8c-1 2.1-1.9 3.8-2.8 5.4-.7 1.2-1.3 2.4-1.9 3.6-.1.1-.1.2 0 .3.1.1.2.2.3.2h7.1c.1 0 .3-.1.3-.2 1.2-2.3 2.7-5.5 4.1-8.8 4.2-9.8 7.5-19 10-27.4 0-.1 0-.2-.1-.3-.2-.2-.3-.2-.4-.2M49.8 128.6c0-.1-.1-.2-.2-.2h-.3c-1.6.6-4.5 1-6.5 1-4.5 0-6.6-1.2-6.6-8 0-5.5.7-8 6.6-8 1.7 0 3.2.2 5.2.8.2 0 .3 0 .4-.2.7-1.4 1.6-3.1 2.6-5.2v-.3c0-.1-.1-.2-.2-.2-2.6-.8-5.7-1.3-8.5-1.3-9.3 0-13.5 4.4-13.5 14.3 0 10 4.2 14.5 13.5 14.5 2.3 0 7-.5 9.2-1.4.2-.1.3-.3.2-.5l-1.9-5.3M110.7 107.9h-6.5c-.2 0-.3.1-.3.3-1 4.1-3.1 10.8-5.9 17.9l-6.5-17.9c-.1-.1-.2-.2-.3-.2h-6.6c-.1 0-.2.1-.3.2-.1.1-.1.2 0 .3l9.8 26.8c-1 2.1-1.9 3.8-2.8 5.4-.7 1.2-1.3 2.4-1.9 3.7-.1.1-.1.2 0 .3.1.1.2.2.3.2h7.1c.1 0 .3-.1.3-.2 1.2-2.3 2.7-5.5 4.1-8.8 4.1-9.8 7.5-19 10-27.4 0-.1 0-.2-.1-.3-.2-.3-.3-.3-.4-.3M134.7 107.9h-18.9c-.2 0-.4.2-.4.4v26.3c0 .2.2.4.4.4h6.4c.2 0 .4-.2.4-.4v-20.3h9.9c.1 0 .3-.1.3-.2.8-1.8 1.5-3.7 2.3-5.6v-.3c-.2-.3-.3-.3-.4-.3"
    />
    <path
      fill="#1466AC"
      d="M34.1 67.5c-9.2 0-12.8 4-12.8 14.1 0 10.3 3.6 14.3 12.8 14.3 9.3 0 12.9-4 12.9-14.3 0-10.2-3.6-14.1-12.9-14.1m0 22.5c-4.2 0-5.5-1.1-5.5-8.3 0-7.6 1.4-8.3 5.5-8.3 4.2 0 5.6.7 5.6 8.3 0 7.2-1.3 8.3-5.6 8.3M72.6 88.9c0-.1-.1-.2-.2-.2h-.3c-1.6.6-4.5 1-6.5 1-4.5 0-6.6-1.2-6.6-8 0-5.5.7-8 6.6-8 1.7 0 3.2.2 5.2.8.2 0 .3 0 .4-.2.7-1.4 1.6-3.1 2.6-5.2v-.3c0-.1-.1-.2-.2-.2-2.6-.8-5.7-1.3-8.5-1.3-9.3 0-13.5 4.4-13.5 14.3 0 10 4.2 14.5 13.5 14.5 2.3 0 7-.5 9.2-1.4.2-.1.3-.3.2-.5l-1.9-5.3M19.3 68.2H.4c-.2 0-.4.2-.4.4v26.3c0 .2.2.4.4.4h6.4c.2 0 .4-.2.4-.4V74.5H17c.1 0 .3-.1.3-.2.8-1.8 1.5-3.7 2.3-5.6v-.3c-.1-.1-.2-.2-.3-.2"
    />
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1="99.806"
      y1="211.708"
      x2="99.806"
      y2="-.375"
      gradientTransform="matrix(1 0 0 -1 0 211.708)"
    >
      <stop offset=".398" stop-color="#1466AC" />
      <stop offset=".659" stop-color="#EF4058" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M192 132.1v-.4c0-.2 0-.5.1-.7.3-3.7.5-8.2.7-13.4v-.4c.1-3.5.2-7.3.2-11.2 0-3.9-.1-7.7-.2-11.2v-.4c-.2-5.1-.4-9.7-.7-13.4 0-.2 0-.5-.1-.7v-.4c0-.4-.1-.7-.1-1.1v-.4c-.3-3.9-.5-6.3-.6-6.5 0-.4-.1-.8-.1-1.1v-.3c-.1-.7-.2-1.3-.4-2 0-.1 0-.2-.1-.3-1.7-8.1-6.2-17-11.8-23.7-2.2-2.6-4.5-4.9-6.9-6.7-.2-.2-3-2.2-7.4-5.3-5.1-3.5-12.4-8.4-20.7-13.2-14.8-8.7-27.9-14.8-29.7-15.5-.1 0-.1-.1-.1-.1C110.2 2 105.5.8 100.4.3c-1-.1-2-.2-3-.2-1-.1-1.9-.1-2.8-.1h-1.4c-6.8.2-13.1 1.4-18.1 3.7-.7.3-14 6.4-29.1 15.3l-.6.3c-15.5 9.1-27.6 18.1-28.1 18.5-3.8 2.8-7.2 6.4-10.3 11-.7 1-.7 3.6 2.3 3.6H17c3.3 0 4.1-2 7.8-4.7 4.1-3 12.2-9 27-17.8 10.7-6.3 20.7-11.3 25.6-13.6.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1 0 0 .1 0 .1-.1.1 0 .2-.1.2-.1.1 0 .2-.1.3-.1 1.2-.6 2-.9 2-.9 3.4-1.5 8.2-2.5 13.3-2.6h2c1.5 0 3 .1 4.4.3 3.1.4 5.9 1 8.2 2 .2.1.5.2.7.3 0 0 .1.1.4.2 2.3 1 14.7 6.9 28.2 14.8 8 4.7 15.1 9.4 20 12.8 4.3 3 6.9 4.9 7 5 1.9 1.4 3.8 3.4 5.6 5.6 4.5 5.8 8.2 13.7 8.8 19.8 0 .1.3 2.5.6 6.6 0 .3 0 .5.1.8v.6c0 .4.1.7.1 1.1v.4c0 .2 0 .5.1.7 0 .5.1 1 .1 1.5 0 .3 0 .6.1.9v.2c0 .4 0 .7.1 1.1v.8c.3 5.2.5 11.4.5 17.9s-.2 12.7-.5 17.9v.8c0 .4 0 .7-.1 1.1v.2c0 .3 0 .6-.1.9 0 .5-.1 1-.1 1.5 0 .3 0 .5-.1.7v.4c0 .4-.1.7-.1 1.1v.6c0 .3 0 .6-.1.8-.3 4.1-.6 6.6-.6 6.6-.6 6.1-4.3 14-8.8 19.8-1.8 2.3-3.7 4.2-5.6 5.6-.1 0-2.7 2-7 5-4.9 3.4-12.1 8.1-20 12.8-13.5 8-26 13.8-28.2 14.8l-.4.2c-.2.1-.5.2-.7.3-2.3.9-5.1 1.6-8.2 2-1.4.2-2.9.3-4.4.3h-2c-5.1-.1-9.9-1-13.3-2.6 0 0-.7-.3-2-.9-.1-.1-.3-.1-.4-.2-.1-.1-.2-.1-.3-.2-.1 0-.1-.1-.2-.1s-.2-.1-.3-.1c-.1-.1-.2-.1-.4-.2h-.1c-5.1-2-14.7-6.8-24.9-12.8-14.9-8.7-22.9-14.8-27-17.8-3.7-2.7-4.5-4.7-7.8-4.7H9.3c-3 0-3 2.6-2.3 3.6 3.1 4.6 6.5 8.2 10.3 11 .5.4 12.7 9.4 28.1 18.5.8.5 1.6 1 2.5 1.4 14.3 8.2 26.6 13.8 27.3 14.2 4.9 2.2 11.3 3.5 18.1 3.7h1.4c.9 0 1.8 0 2.7-.1 1 0 2-.1 3-.2 5.1-.5 9.9-1.7 13.7-3.4 0 0 .1 0 .1-.1 1.7-.8 14.9-6.9 29.6-15.5 8.3-4.9 15.6-9.7 20.7-13.2 4.4-3.1 7.2-5.1 7.4-5.3 2.4-1.8 4.7-4.1 6.9-6.7 5.6-6.7 10.1-15.6 11.8-23.7 0-.1 0-.2.1-.3.1-.7.3-1.4.4-2v-.3c.1-.4.1-.8.1-1.1 0-.2.3-2.6.6-6.5v-.4c.2-.3.2-.6.2-1"
    />
  </svg>
);

const profiles = {
  citizen: "citizen",
  guest: "guest",
};

const profileStatuses = {
  beneficiary: "????????????????",
  learner: "????????????",
  novorossiec: "??????????????????????",
};

export default function Profile() {
  const transportStatus = profileStatuses.novorossiec;
  const history = useHistory();
  const [showLoad, setShowLoad] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    user_type: "",
    balance: 0,
    is_esia_confirm: false,
    account_number: "",
  });
  const [showChangePass, setShowChangePass] = useState("none");
  const [showQR, setShowQR] = useState("none");
  const [changePass, setChangePass] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const user_type = sessionStorage.getItem("user_type");
    const name = sessionStorage.getItem("name");
    const is_esia_confirm = sessionStorage.getItem("is_esia_confirm");
    const account_number = sessionStorage.getItem("account_number");
    fetch("http://10.17.0.214:8000/api/v1/billing/balance/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          setUserData({
            email: email || "",
            user_type: user_type || "",
            name: name || "",
            balance: result.balance,
            is_esia_confirm: is_esia_confirm === "true",
            account_number: account_number || "",
          });
          setShowLoad(false);
        });
      } else if (response.status === 401) {
        setShowLoad(false);
        history.push(routes.login);
      } else {
        setShowLoad(false);
        alert("error");
      }
    });
  }, [userData.name, userData.email, userData.user_type, userData.balance]);
  let profileStatusText = "";
  if (userData.user_type === profiles.citizen) {
    if (!userData.is_esia_confirm) {
      profileStatusText = "?????????????????????? ?????????????? ???????????? ????????????";
    } else {
      profileStatusText = "???? ???????????? ????????????. ?????? ????????????: " + transportStatus;
    }
  } else {
    profileStatusText = "???? ?????????? ????????????";
  }

  const exit = () => {
    localStorage.removeItem("token");
    history.push(routes.login);
  };
  const changePassword = async () => {
    const response = await fetch(
      "http://10.17.0.214:8000/api/v1/auth/change_password/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(changePass),
      }
    );
    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      sessionStorage.setItem("email", result.user.email);
      sessionStorage.setItem("user_type", result.user.user_type);
      setShowLoad(false);
      setShowChangePass("none");
    } else {
      setShowLoad(false);
      alert("error");
    }
  };

  const acceptGosuslugi = async () => {
    const response = await fetch(
      "http://10.17.0.214:8000/api/v1/auth/esia_confirm/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          user_type: userData.user_type,
          email: userData.email,
        }),
      }
    );
    if (response.ok) {
      sessionStorage.setItem("is_esia_confirm", "true");
      setUserData({ ...userData, is_esia_confirm: true });
      setShowLoad(false);
    } else {
      setShowLoad(false);
      alert("error");
    }
  };
  return (
    <div className="profile-screen">
      <LoadingScreen visible={showLoad} />
      <div className="d-flex">
        <button className="btn" onClick={()=>{history.push(routes.main)}}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="w-100 mt-2">
          <h3 className="text-center">??????????????</h3>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="w-100 text-center">{profileStatusText}</div>
        {userData.user_type === profiles.citizen &&
        !userData.is_esia_confirm ? (
          <button className="btn btn-gosuslugi" onClick={acceptGosuslugi}>
            {gosuslugiSVG}
          </button>
        ) : (
          <></>
        )}
      </div>
      <hr />
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="w3-round-xxlarge title-circle-yellow">
          ???????????????????? ????????????
        </div>
        <div className="fs-3 text-yellow">{userData.name}</div>
        <div className="text-yellow fs-3">{userData.email}</div>
        <button className="w3-round-xxlarge btn-profile mt-2">????????????????</button>
        <div className="w3-round-xxlarge title-circle-yellow mt-5">
          ???????????????????????????? ????????
        </div>
        <div className="text-yellow fs-3">{userData.account_number}</div>
        <button
          className="w3-round-xxlarge btn-profile"
          onClick={() => {
            setShowQR("block");
          }}
        >
          QRCode
        </button>
        <div className="w3-modal" style={{ display: showQR }}>
          <div className="w3-modal-content w3-animate-opacity w3-card-4 win-change-pass">
            <header className="text-center">
              <h3>QR-?????? ???????????? ??????????</h3>
            </header>
            <div className="w3-container d-flex align-items-center justify-content-center">
              <div style={{ width: "fit-content", height: "fit-content" }}>
                <QRCode value={userData.account_number} />
              </div>
            </div>
            <footer className="d-flex flex-column align-items-center">
              <button
                className="btn-green w3-round-xxlarge btn-green-width mt-3 mb-3"
                onClick={() => {
                  setShowQR("none");
                }}
              >
                ??????????????
              </button>
            </footer>
          </div>
        </div>
        <div className="w3-round-xxlarge title-circle-yellow mt-5">??????????????</div>
        <div className="text-yellow justify-content-left email-data mt-2 fs-1 text-center">
          {userData.balance} <FontAwesomeIcon icon={faRubleSign} />
        </div>
        <button
          className="w3-round-xxlarge btn-profile mt-1"
          onClick={() => {
            history.push(routes.pay);
          }}
        >
          ??????????????????
        </button>
        <button
          className="w3-round-xxlarge btn-profile mt-5 btn-profile-width"
          onClick={() => {
            setShowChangePass("block");
          }}
        >
          ?????????????? ????????????
        </button>
        <button
          className="w3-round-xxlarge btn-profile mt-2 btn-profile-width btn-danger"
          onClick={exit}
        >
          ??????????
        </button>
        <div className="w3-modal" style={{ display: showChangePass }}>
          <div className="w3-modal-content w3-animate-opacity w3-card-4 win-change-pass">
            <header className="text-center">
              <h3>?????????????????? ????????????</h3>
            </header>
            <div className="w3-container">
              <div className="mb-3 mt-3">
                <label className="form-label ms-3">
                  ?????????????? ?????????????? ????????????
                </label>
                <input
                  type="password"
                  className="form-control w3-round-xxlarge"
                  placeholder="?????????????? ????????????"
                  value={changePass.old_password}
                  onChange={(event) => {
                    setChangePass({
                      ...changePass,
                      old_password: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label ms-3">?????????????? ?????????? ????????????</label>
                <input
                  type="password"
                  className="form-control w3-round-xxlarge"
                  placeholder="?????????? ????????????"
                  value={changePass.new_password}
                  onChange={(event) => {
                    setChangePass({
                      ...changePass,
                      new_password: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label ms-3">?????????????????? ????????????</label>
                <input
                  type="password"
                  className="form-control w3-round-xxlarge"
                  placeholder="???????????? ????????????"
                  value={changePass.confirm_password}
                  onChange={(event) => {
                    setChangePass({
                      ...changePass,
                      confirm_password: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <footer className="d-flex flex-column align-items-center">
              <button
                className="btn-green w3-round-xxlarge btn-green-width"
                onClick={changePassword}
              >
                ????????????????
              </button>
              <button
                className="btn-green w3-round-xxlarge btn-green-width mt-3 mb-3"
                onClick={() => {
                  setShowChangePass("none");
                }}
              >
                ????????????
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
