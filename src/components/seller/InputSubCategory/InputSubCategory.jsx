import React, { useState, useEffect } from "react";
import { Row, Col, Select } from "antd";

function InputSubCategory({category, optionCategory, setOptionSubCategory}) {

  const [option, setOption] = useState([]);
  const [value, setValue] = useState([]);

  const options = [];

  for (let i = 0; i < option.length; i++) {
    options.push({
      label: `${option[i]}`,
      value: `${option[i]}`
    });
  }

  const selectProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };

  useEffect(() => {
    for (let i = 0; i < category.items.length; i++){
      if (category.items[i].categoryName === optionCategory.category) {
        for (let j = 0; j < category.items[i].categoryKind.length; j++) { 
          if (category.items[i].categoryKind[j].nameKindCategory === optionCategory.kind) {
            setOption(category.items[i].categoryKind[j].subCategory)
            break;
          }
        }
      }
    }
    setValue([])
    
  }, [setOption, setValue, category, optionCategory])
  

  return (
    <Row>
      <Col className="name-props" span={3}>
        <p>SUB CATEGORIES</p>
      </Col>
      <Col span={20} offset={1}>
        <Select
          className="select"
          placeholder="Please select brand"
          name="brandValue"
          {...selectProps}
        >
        </Select>
      </Col>
    </Row>
  );
}

export default InputSubCategory;
