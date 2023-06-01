import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a>Approve</a>,
    key: '0',
  },
  {
    label: <a>Reject</a>,
    key: '1',
  },
  {
    label: <a>Forward</a>,
    key: '3',
  },
];
const ActionDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        change status
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default ActionDropdown;