import React, { useEffect } from "react";
import { Result, Button } from 'antd';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { activationEmail } from "../../../redux/actions/authAction";
import { Link } from 'react-router-dom';

function ActiveEmailPage() {
  const { activation_token } = useParams();
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activation_token) {
      dispatch(activationEmail(activation_token));
    }
  }, [activation_token, dispatch]);

  return (
    <div className="layout-active">
      {alert.success ? (
        <Result
          status="success"
          title="Activation was successful!"
          subTitle="You will be redirectted in 5 seconds."
          extra={[
            <Link to="/">
              <Button type="primary" key="console">
                Homepage
              </Button>,
            </Link>
          ]}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default ActiveEmailPage