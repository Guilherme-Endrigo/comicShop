export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<any>;
  resourceURI: string;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collections: Array<any>;
  collectedIssues: Array<any>;
  dates: [
    {
      type: string;
      date: string;
    }
  ];
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: Array<any>;
  creators: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: Array<any>;
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        type: string;
      }
    ];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Array<any>;
    returned: number;
  };
  preco: number;
  quantidade: number,
}
