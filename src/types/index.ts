
export enum LOGIN_VIEW {
    SIGN_IN = "sign-in",
    REGISTER = "register",
  }


// Define TypeScript interfaces for the product data
interface Rating {
    rate: number;
    count: number;
  }
  
export  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  