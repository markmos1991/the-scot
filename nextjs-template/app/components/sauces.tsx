import React from 'react';

const SaucePage = () => {
  // Define the array of sauces
  const sauces = ['GARLIC RANCH', 'SIRIRACHA RANCH', 'HOUSE HOT HONEY'];
  
  // Define the Sauces component
  const Sauces = ({ sauceList }) => {
    return (
      <div className="text-center text-red-600 pt-4">
        <h2 className="text-2xl font-bold">Sauces <span className="font-normal text-lg">£1.50</span></h2>
        <ul className="sauce-list">
          {sauceList.map((sauce, index) => (
            <li key={index} className="sauce-item">
              {sauce}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  // Render the Sauces component with the array of sauces
  return <Sauces sauceList={sauces} />;
};

export default SaucePage;
