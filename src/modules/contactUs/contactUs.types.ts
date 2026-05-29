export type ContactUsFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactUsResponse = {
  success: boolean;
  message: string;
};
