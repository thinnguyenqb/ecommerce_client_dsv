import React from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";

import "./styles.scss";

export function CommentCustomer() {
  return (
    <div className="comment">
      <Comment
        author={<a href="/">Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("MMM Do YY")}>
            <span>{moment().format("MMM Do YY")}</span>
          </Tooltip>
        }
      />
    </div>
  );
}

export default CommentCustomer;
