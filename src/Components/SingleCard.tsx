import React from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useGetUserQuery } from '../features/api/apiSlice';
import { addToTeam } from '../features/makeTeam/teamSlice';
import { useDispatch } from 'react-redux';


interface IDataType {
  key: string;
  name: string;
  username: number;
  website: string;
  email: string;
}

const SingleCard: React.FC = () => {
  const dispatch = useDispatch()
  const handleGetValue = (values: any) => {
    dispatch(addToTeam(values))
  }
  const columns: ColumnsType<IDataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',


    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'email',
      key: 'email',
      dataIndex: 'email',

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (<div>
        <Button onClick={() => handleGetValue(record)}>Add</Button>
      
      </div>),

    },
  ];
  const { data, isError, isLoading } = useGetUserQuery()
  return (
    <Table style={{ margin: "20px 0", }} loading={isLoading} columns={columns} dataSource={data} bordered scroll={{ x: 500 }} />
  )
}

export default SingleCard;
