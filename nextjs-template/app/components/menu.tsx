import React from 'react';

interface MenuItem {
  itemName: string;
  description: string;
  price: number;
}

interface MenuProps {
  menuItems: MenuItem[];
}

// Menu component
const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <div className="text-center text-red-600 pt-4">
      <h2 className="text-2xl font-bold">13/14&rdquo;</h2>
      <ul className="">
        {menuItems.map((item, index) => (
          <li key={index} className="p-2">
            <h3 className="font-bold text-xl sm:text-2xl">{item.itemName}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">£ {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage
const ExampleMenu: React.FC = () => {
  // Define menu items as an array of objects
  const menuItems: MenuItem[] = [
    {
      itemName: 'GBC (V)',
      description: 'Garlic butter, mozzarella blend, parmigiano reggiano',
      price: 9,
    },
    {
      itemName: 'OG (V)',
      description: 'House sauce, mozzarella blend, basil, parmigiano reggiano',
      price: 10.50,
    },
    {
        itemName: 'XXX (V)',
        description: 'House sauce, mozzarella blend, bomba, roquito peppers, jalapenos, shaved onions, basil, parmigiano reggiano',
        price: 13,
      },
    {
      itemName: 'PEPPERONI',
      description: 'House sauce, mozzarella blend, pepperoni, parmigiano reggiano',
      price: 12,
    },
    {
        itemName: 'HOT PEP',
        description: 'House sauce, mozzarella blend, pepperoni, pineapple, jalepenos, house hot honey, parmigiano reggiano',
        price: 13,
      },
      {
        itemName: 'VODKA SAUSAGE',
        description: 'House sauce, mozzarella blend, sausage crumb, shaved onion, vodka sauce, roquito peppers, basil, parmigiano reggiano',
        price: 13.5,
      },
      {
        itemName: 'THE ROYAL PIE',
        description: 'House sauce, mozzarella blend, pepperoni, nduja, shaved onion, ricotta, basil, parmigiano reggiano',
        price: 14,
      },
    
  ];

  return <Menu menuItems={menuItems} />;
};

export default ExampleMenu;
