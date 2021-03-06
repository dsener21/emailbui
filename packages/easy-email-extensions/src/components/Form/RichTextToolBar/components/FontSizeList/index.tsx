import { Menu } from '@arco-design/web-react';
import React from 'react';

export function FontSizeList(props: { onChange: (val: string) => void; }) {
  const list = [
    {
      value: '1',
      label: '12px',
    },
    {
      value: '2',
      label: '13px',
    },
    {
      value: '3',
      label: '16px',
    },
    {
      value: '4',
      label: '18px',
    },
    {
      value: '5',
      label: '24px',
    },
    {
      value: '6',
      label: '32px',
    },
    {
      value: '7',
      label: '48px',
    },
  ];
  return (
    <div
      style={{
        maxWidth: 150,
        maxHeight: 350,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Menu
        onClickMenuItem={(item) => {
          props.onChange(item);
        }}
        selectedKeys={[]}
        style={{ width: 100, border: 'none' }}
      >
        {list.map((item) => (
          <Menu.Item style={{ lineHeight: '30px', height: 30 }} key={item.value}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>

  );
}
