import React from 'react';
import { paymentBoxData } from '.././../../dummyData/FoodItemData';
import PaymentStatusBox from '../index';

const ParentComponent = () => {
  return (
    <div>
      {paymentBoxData.map(item => (
        <PaymentStatusBox
          key={item.id}
          title={item.title}
          value={item.Value} // Using Value instead of Value
          percentage={item.Percentage} // Using Percentage instead of Percentage
        />
      ))}
    </div>
  );
};

export default ParentComponent;
