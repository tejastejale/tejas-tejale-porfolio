import React from 'react';
import { Link } from 'react-scroll';

const MyComponent1 = () => {
  return (
    <div>
      <button>
        <Link
          to="Homepage"  
          smooth={true}
          duration={500} 
        >
          See Demo
        </Link>
      </button>

  
      
    </div>
  );
};

export default MyComponent;
