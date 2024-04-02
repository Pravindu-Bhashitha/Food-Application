import React from 'react';
import './index.css';

interface PaymentStatusBoxProps {
  title: string;
  value: string;
  percentage: string;
}

const PaymentStatusBox: React.FC<PaymentStatusBoxProps> = ({ title, value, percentage }) => {
  return (
    <div className='wholePaymentBox'>
      <div>
        {title}
      </div>
      <div className='paymentBoxDetails'>
        <div className='paymentBoxDetailsAmount'>
          {value}
        </div>
        <div className='paymentBoxDetailsPercentage'>
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusBox;
