import React from 'react'
import { Table, Tag, Tooltip} from 'antd'
import { EditOutlined, DeleteOutlined, SyncOutlined } from '@ant-design/icons';

const columns=[
    {
        title: "Id",
        dataIndex: "id",
        key: "id",

    },
    {
        title: "Product",
        dataIndex: "product",
        key: "product",
        render: text => <a>{text}</a>,
    },
    {
        title: "Count",
        dataIndex: "count",
        key: "count",
    },
    {
        title: "State",
        dataIndex: "state",
        key: "state",
        render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'Old') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
    }, 
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: () => (
            <>
              <Tooltip title="Editar">
                <EditOutlined style={{ marginRight: '25px' }} />
              </Tooltip>
              <Tooltip title="Borrar">
                <DeleteOutlined style={{ marginRight: '25px' }} />
              </Tooltip>
              <Tooltip title="Actualizar">
                <SyncOutlined />
              </Tooltip>
            </>
          ),
    },
]

const data = [
    {
       key: '1',
       id: "01",
       product: "Computer",
       count: "5",
       state: ["New"],
       action: "Deleter",
    },
    {
        key: '2',
        id: "02",
        product: "Computer",
        count: "5",
        state:[ "New"],
        action: "Deleter",
     },
     {
        key: '3',
        id: "03",
        product: "Computer",
        count: "5",
        state: ["New"],
        action: "Deleter",
     },
     {
        key: '4',
        id: "04",
        product: "Computer",
        count: "5",
        state:[ "Old"],
        action: "Deleter",
     },
     {
        key: '5',
        id: "05",
        product: "Computer",
        count: "5",
        state: ["Old"],
        action: "Deleter",
     },
     {
        key: '6',
        id: "06",
        product: "Computer",
        count: "5",
        state: ["Old"],
        action: "Deleter",
     },
     {
        key: '7',
        id: "07",
        product: "Computer",
        count: "5",
        state: ["New"],
        action: "Deleter",
     },
     {
        key: '8',
        id: "08",
        product: "Computer",
        count: "5",
        state:[ "Old"],
        action: "Deleter",
     },
     {
        key: '9',
        id: "09",
        product: "Computer",
        count: "5",
        state: ["Old"],
        action: "Deleter",
     },
     {
        key: '10',
        id: "10",
        product: "Computer",
        count: "5",
        state: ["Old"],
        action: "Deleter",
     }
]

export const List_services = () => {
  return (
    <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }}></Table>
    )
}
