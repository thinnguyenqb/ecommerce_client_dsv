import React from "react";
import { Comment, Tooltip, Rate } from "antd";
import moment from "moment";
import "./ReviewList.scss";

export function CommentList({item}) {
  return (
    <div className="comment">
      <Comment
        author={<>
          <h3>
            {item?.title}
          </h3>
        </>}
        avatar={
          <div className="user-info">
            <span className="user-info-name">{item?.userName}</span>
            <Tooltip title={moment(item?.createdAt).format("MMM Do YY")}>
              <span className="user-info-createdAt">{moment(item?.createdAt).format("MMM Do YY")}</span>
            </Tooltip>
          </div>
        }
        content={
          <>
            <Rate value={item?.star} disabled style={{ fontSize: "1rem" }} />
            <p>
              {item?.comment}
            </p>
          </>
        }
        datetime={
          <></>
        }
      />
    </div>
  );
}

export default CommentList;
