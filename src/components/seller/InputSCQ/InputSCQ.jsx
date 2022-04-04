import React from 'react'
import { Drawer, Form, Button, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const { Option } = Select;

function InputSCQ({showDrawer, setShowDrawer}) {
  return (
    <>
        <Drawer
          title="Create Product Stock"
          width={720}
          onClose={() => setShowDrawer(false)}
          visible={showDrawer}
          bodyStyle={{ paddingBottom: 80 }}
        >
          {/* <Form layout="vertical" hideRequiredMark> */}
          <Form name="dynamic_form_nest_item" autoComplete="off" layout="vertical" hideRequiredMark>
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'size']}
                        rules={[{ required: true, message: 'Missing size' }]}
                      >
                        <Select
                          placeholder="Size"
                          name="brandValue"
                          style={{width: '100px'}}
                          //onChange={handleOnChangeSelectBrand}
                        >
                          <Option value="S">S</Option>
                          <Option value="M">M</Option>
                          <Option value="L">L</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'color']}
                        rules={[{ required: true, message: 'Missing color' }]}
                      >
                        <Select
                          placeholder="Color"
                          name="brandValue"
                          style={{width: '100px'}}
                          //onChange={handleOnChangeSelectBrand}
                        >
                          <Option value="#ff5f6d">#ff5f6d</Option>
                          <Option value="#5f6dff">#5f6dff</Option>
                          <Option value="#4d4d4d">#4d4d4d</Option>
                          <Option value="#ff7413">#ff7413</Option>
                          <Option value="#ecafd8">#ecafd8</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'quantity']}
                        rules={[{ required: true, message: 'Missing quantity' }]}
                      >
                        <Input placeholder="Quantity" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </>
  )
}

export default InputSCQ