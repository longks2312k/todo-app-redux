import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [filtersStatus, setFiltersStatus] = useState('All');
  const [filtersPriority, setFiltersPriority] = useState([]);

  const handleSearchChangeText = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  const handleStatusChange = (e) => {
    setFiltersStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFiltersPriority(value)
    dispatch(priorityFilterChange(value))
  }
  
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchChangeText} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filtersStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          value={filtersPriority}
          onChange={handlePriorityChange}
          style={{ width: '100%' }}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
