export type CheckoutFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
  phone: string;
};

export type CheckoutResponse = {
  success: boolean;
  orderId?: string;
  message: string;
};
