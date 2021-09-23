interface comment {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface Dish {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: comment[];
}

export interface FormData {
  _id?: string;
  name: string;
  phone: string;
  numberOfPersons: number;
  smoking: boolean;
  dateTime: string;
  specialRequests: string;
}
