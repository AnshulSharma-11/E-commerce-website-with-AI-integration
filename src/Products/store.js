// ─── Products ────────────────────────────────────────────────────────────────
export let PRODUCTS = [
  { id:1,  name:"Air Max Pulse",        category:"Sneakers",    price:129, rating:4.8, reviews:312, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",  badge:"Hot"  },
  { id:2,  name:"Leather Tote Bag",     category:"Bags",        price:189, rating:4.6, reviews:189, img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",  badge:null   },
  { id:3,  name:"Slim Fit Oxford",      category:"Shirts",      price:79,  rating:4.7, reviews:423, img:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80",  badge:"New"  },
  { id:4,  name:"Wool Blend Coat",      category:"Outerwear",   price:299, rating:4.9, reviews:156, img:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80",  badge:"Sale" },
  { id:5,  name:"Tortoise Sunglasses",  category:"Accessories", price:95,  rating:4.5, reviews:278, img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",  badge:null   },
  { id:6,  name:"Cargo Pants",          category:"Bottoms",     price:110, rating:4.4, reviews:341, img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",  badge:null   },
  { id:7,  name:"Chunky Knit Sweater",  category:"Knitwear",    price:145, rating:4.8, reviews:207, img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",  badge:"Hot"  },
  { id:8,  name:"Minimalist Watch",     category:"Accessories", price:249, rating:4.9, reviews:512, img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80",  badge:null   },
  { id:9,  name:"Linen Wide-Leg Pants", category:"Bottoms",     price:98,  rating:4.6, reviews:189, img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80",  badge:"New"  },
  { id:10, name:"Canvas Backpack",      category:"Bags",        price:135, rating:4.7, reviews:398, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",  badge:null   },
  { id:11, name:"Suede Chelsea Boots",  category:"Shoes",       price:215, rating:4.8, reviews:267, img:"https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80",  badge:"Hot"  },
  { id:12, name:"Sports Cap",           category:"Accessories", price:42,  rating:4.3, reviews:534, img:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",  badge:null   },
];

// ─── Mock Orders ─────────────────────────────────────────────────────────────
export let MOCK_ORDERS = [
  { id:"ORD-7841", date:"Mar 1, 2026",  total:408, status:"Delivered", items:[PRODUCTS[0], PRODUCTS[3]] },
  { id:"ORD-7756", date:"Feb 12, 2026", total:189, status:"Delivered", items:[PRODUCTS[1]]              },
  { id:"ORD-7690", date:"Jan 8, 2026",  total:344, status:"Delivered", items:[PRODUCTS[7], PRODUCTS[4]] },
];


// ─── Cart Reducer ─────────────────────────────────────────────────────────────
export function cartReducer(state, { type, product, id, qty }) {
  switch (type) {
    case "ADD": {
      let ex = state.find(i => i.id === product.id);
      return ex
        ? state.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...state, { ...product, qty: 1 }];
    }
    case "REMOVE":     return state.filter(i => i.id !== id);
    case "UPDATE_QTY": return state.map(i => i.id === id ? { ...i, qty } : i).filter(i => i.qty > 0);
    case "CLEAR":      return [];
    default:           return state;
  }
}
