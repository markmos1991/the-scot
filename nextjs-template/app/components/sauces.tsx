import React from 'react';

// Define the type for the props of the Sauces component
interface SaucesProps {
  sauceList: string[]; // Array of sauce names
}

// Define the Sauces component as a functional component
const Sauces: React.FC<SaucesProps> = ({ sauceList }) => {
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

// Define the SaucePage component
const SaucePage: React.FC = () => {
  // Define the array of sauces
  const sauces: string[] = ['GARLIC RANCH', 'SIRIRACHA RANCH', 'HOUSE HOT HONEY'];
  
  // Render the Sauces component with the array of sauces
  return <Sauces sauceList={sauces} />;
};

export default SaucePage;
