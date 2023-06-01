import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useEffect } from 'react';

const ActionDropdown = ({
    setpunishmentcomplaintid,
  punishmentcomplaintid,
    complaint_id,
    approvecomplaint,
    rejectcomplaint,
    forward_complaint,
    setShowPunishmentModal}) => {
        useEffect(()=>{
            setpunishmentcomplaintid(complaint_id);
         },[]);
        const items = [
            {
              label: <a onClick={()=>approvecomplaint(complaint_id)}>Approve</a>,
              key: '0',
            },
            {
              label: <a onClick={()=>{
                setShowPunishmentModal(true);
              }}>Reject</a>,
              key: '1',
            },
            {
              label: <a onClick={()=>forward_complaint(complaint_id)}>Forward</a>,
              key: '3',
            },
          ];
       
return (
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
)};
export default ActionDropdown;