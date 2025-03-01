import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const final = (values) => {
  console.log('success:', values);
};

var index = document.getElementById('index').value

const myarr =[
    {
      name: 'harivansh',
      class: 'Bhardwaj',
    },
    {
      name: 'Harsh',
      class: 'Bansal',
    }
  
  ]


const arr =()=>{ console.log (myarr[value])}

let doms = document.createElement("h1")
//the 

const Props = () => {
  return (
    <>
<input className='bg-amber-100 text-zinc-950' type="text" id='index'/>

<button class="bg-red-400 p-1 m-3" onClick={arr} >
 Button
</button>




<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

      <Form onFinish={final}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="Age">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Props;