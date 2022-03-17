import * as React from "react";
import { DatePicker } from 'antd';

import "./DatePicker.scss";

export function Datepicker() {
    const { RangePicker } = DatePicker;

    return (
       <RangePicker className="date-picker"/>
    );

}

export default Datepicker














