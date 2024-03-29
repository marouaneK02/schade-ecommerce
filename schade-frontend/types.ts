export interface Billboard{
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category{
    id: string;
    name: string;
    billboard: Billboard;
};

export interface Product{
    id: string;
    category: Category;
    price: string;
    name: string;
    description: string;
    isFeatured: boolean;
    isTrending: boolean;
    size: Size;
    colour: Colour;
    images: Image[];
};

export interface Image{
    id: string;
    url: string;
};

export interface Size{
    id: string;
    name: string;
    value: string;
};

export interface Colour{
    id: string;
    name: string;
    value: string;
};