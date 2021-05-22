import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "w3-css";
import LoadingScreen from "../loadingscreen/LoadingScreen";
import routes from "../routes.json";
import "./Pay.css";

export default function Pay() {
  const history = useHistory();
  const [showLoad, setShowLoad] = useState(false);

  const [payData, setPayData] = useState({
    card_number: "",
    cvc: "",
    date: "",
    holder: "",
    transaction_sum: 0,
  });

  const pay = async () => {
    setShowLoad(true);
    const response = await fetch(
      "http://10.17.0.214:8000/api/v1/billing/recharge/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          transaction_sum: payData.transaction_sum,
        }),
      }
    );
    if (response.ok) {
      const result = await response.json();
      setShowLoad(false);
      history.goBack()
    } else {
      setShowLoad(false);
      alert("error");
    }
  };
  return (
    <div className="pay-screen">
      <LoadingScreen visible={showLoad} />
      <h1 className="mb-5 mt-5 text-center">Пополнение счета</h1>
      <div className="mb-3 grade-zindex">
        <label className="form-label ms-3">Номер карты</label>
        <input
          type="text"
          className={`form-control w3-round-xxlarge`}
          placeholder="1234-5678-9876-54332"
          value={payData.card_number}
          defaultValue={payData.card_number}
          onChange={(event) => {
            setPayData({
              ...payData,
              card_number: event.target.value.toString(),
            });
          }}
        />
      </div>
      <div className="mb-3 grade-zindex">
        <label className="form-label ms-3">Владелец карты</label>
        <input
          type="text"
          className={`form-control w3-round-xxlarge`}
          placeholder="Ivanov Ivan"
          value={payData.holder}
          defaultValue={payData.holder}
          onChange={(event) => {
            setPayData({
              ...payData,
              holder: event.target.value.toString(),
            });
          }}
        />
      </div>
      <div className="d-flex">
        <div>
          <label className="form-label ms-3">Срок действия</label>
          <div className="mb-3 grade-zindex">
            <input
              type="month"
              className={`form-control w3-round-xxlarge`}
              placeholder="1234-5678-9876-54332"
              value={payData.date}
              defaultValue={payData.date}
              onChange={(event) => {
                setPayData({
                  ...payData,
                  date: event.target.value.toString(),
                });
              }}
            />
          </div>
        </div>
        <div>
          <label className="form-label ms-3">CVC/CVV</label>
          <div className="mb-3 grade-zindex">
            <input
              type="number"
              className={`form-control w3-round-xxlarge`}
              placeholder="123"
              value={payData.cvc}
              defaultValue={payData.cvc}
              onChange={(event) => {
                setPayData({
                  ...payData,
                  cvc: event.target.value.toString(),
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-3 grade-zindex">
        <label className="form-label ms-3">Сумма</label>
        <input
          type="number"
          className={`form-control w3-round-xxlarge`}
          placeholder="200"
          value={payData.transaction_sum}
          defaultValue={payData.transaction_sum}
          onChange={(event) => {
            setPayData({
              ...payData,
              transaction_sum: event.target.value as unknown as number,
            });
          }}
        />
      </div>
      <div className="d-flex flex-column w-100 align-items-center">
        <button
          className="btn-green w3-round-xxlarge grade-zindex btn-profile-width"
          onClick={pay}
        >
          Пополнить
        </button>
        <button
          className="btn-green w3-round-xxlarge mt-0 grade-zindex btn-profile-width mt-2"
          onClick={() => {
            history.goBack();
          }}
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
