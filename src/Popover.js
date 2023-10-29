import React from 'react';
import { Popover } from 'antd';

const Popovers = (props) => {
  const { content, children, title, placement, trigger, width } = props;
  return (
        <>
            <Popover
              title={title}
              trigger={trigger}
              placement={placement}
              content={content}
            >
                {children}
            </Popover>
            <style>
                {`
                    .ant-popover-inner{
                      border-radius: 8px;
                      width: ${width};
                    }
                    .ant-popover-inner-content{
                      padding: 0px!important;
                    } 
                `}
            </style>
        </>
  );
};
export default Popovers;
