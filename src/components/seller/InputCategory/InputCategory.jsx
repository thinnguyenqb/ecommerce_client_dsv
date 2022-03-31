import React, { useState, useEffect } from "react";
import { Row, Col, Cascader } from "antd";

function InputCategory({category, setOptionCategory}) {

  const [option, setOption] = useState([])

  useEffect(() => {
    const options = [];
    category.items.forEach(c => {
      const children = []
      c.categoryKind.forEach(k => {
        // const children1 = []
        // for (var i = 0; i < k.subCategory.length; i++){
        //   children1.push({
        //     value: k.subCategory[i],
        //     label: k.subCategory[i]
        //   })
        // }
        children.push({
          value: k.nameKindCategory,
          label: k.nameKindCategory,
          // children: children1
        })
      })
      options.push({
        value: c.categoryName,
        label: c.categoryName,
        children: children
      })
    })

    setOption(options)
  }, [category.items]);

  const handleOnSelectCategory = (key) => {
    setOptionCategory({
      category: key[0],
      kind: key[1]
    })
  };
  return (
    <Row>
      <Col className="name-props" span={3}>
        <p>CATEGORIES</p>
      </Col>
      <Col span={20} offset={1}>
        <Cascader
          options={option}
          onChange={handleOnSelectCategory}
          placeholder="Please select"
        />
      </Col>
    </Row>
  );
}

export default InputCategory;
