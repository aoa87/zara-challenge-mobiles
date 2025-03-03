import { MobileListItem } from "../../domain/mobile-list-item";

export const mobileListItemMock: MobileListItem[] = [
  {
    id: "SMG-S24U",
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    basePrice: 1329,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png",
  },
  {
    id: "SMG-A25",
    brand: "Samsung",
    name: "Galaxy A25 5G",
    basePrice: 239,
    imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png",
  },
  {
    id: "GPX-8A",
    brand: "Google",
    name: "Pixel 8a",
    basePrice: 459,
    imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.png",
  },
  {
    id: "APL-I15PM",
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    basePrice: 1319,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png",
  },
  {
    id: "OPP-A18",
    brand: "OPPO",
    name: "A18",
    basePrice: 99,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A18-azul-brillante.png",
  },
];

export const mobilesMock = [
  {
    id: "APL-I15PM",
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    description:
      "El Apple iPhone 15 Pro Max es un smartphone de gama alta con una pantalla Super Retina XDR de 6.7 pulgadas, chip A17 Bionic, y un avanzado sistema de cámara con capacidades de IA.",
    basePrice: 1319,
    rating: 4.5,
    specs: {
      screen: '6.7" Super Retina XDR',
      resolution: "2796 x 1290 pixels",
      processor: "A17 Bionic",
      mainCamera: "Sistema de cámaras Pro de 48 MP",
      selfieCamera: "12 MP TrueDepth",
      battery: "No especificada",
      os: "iOS",
      screenRefreshRate: "120 Hz",
    },
    colorOptions: [
      {
        name: "Titanio Negro",
        hexCode: "#2C2C2C",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png",
      },
      {
        name: "Titanio Blanco",
        hexCode: "#F0F0F0",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-blanco.png",
      },
      {
        name: "Titanio Natural",
        hexCode: "#DBCEC3",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-natural.png",
      },
      {
        name: "Titanio Azul",
        hexCode: "#3A4A5A",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-azul.png",
      },
    ],
    storageOptions: [
      {
        capacity: "256 GB",
        price: 1319,
      },
      {
        capacity: "512 GB",
        price: 1449,
      },
      {
        capacity: "1 TB",
        price: 1699,
      },
    ],
    similarProducts: [
      {
        id: "RLM-NOTE50",
        brand: "realme",
        name: "Note 50",
        basePrice: 99,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/RLM-NOTE50-midnight-black.png",
      },
      {
        id: "SMG-A35",
        brand: "Samsung",
        name: "Galaxy A35 5G",
        basePrice: 333,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A35-light-blue.png",
      },
      {
        id: "GPX-8A",
        brand: "Google",
        name: "Pixel 8a",
        basePrice: 459,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.png",
      },
      {
        id: "XIA-RN13",
        brand: "Xiaomi",
        name: "Redmi Note 13",
        basePrice: 169,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-RN13-mint-green.png",
      },
      {
        id: "SNY-XPERIA1V",
        brand: "SONY",
        name: "Xperia 1 V",
        basePrice: 959.42,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SNY-XPERIA1V-negro.png",
      },
      {
        id: "MTO-G24",
        brand: "Motorola",
        name: "g24",
        basePrice: 119,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/MTO-G24-gris.png",
      },
    ],
  },
  {
    id: "SMG-S24U",
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    description:
      "El Samsung Galaxy S24 Ultra es un smartphone de gama alta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Qualcomm Snapdragon 8 Gen 3 for Galaxy, y un avanzado sistema de cámara con inteligencia artificial.",
    basePrice: 1329,
    rating: 4.6,
    specs: {
      screen: '6.8" Dynamic AMOLED 2X',
      resolution: "3120 x 1440 pixels",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy Octa-Core",
      mainCamera:
        "200 MP (F1.7) Principal, OIS + 10 MP (F2.4) Zoom x3, OIS + 12 MP (F2.2) Ultra gran angular + 50 MP (F3.4) Zoom x5, OIS",
      selfieCamera: "12 MP",
      battery: "5000 mAh",
      os: "Android 14",
      screenRefreshRate: "120 Hz",
    },
    colorOptions: [
      {
        name: "Titanium Violet",
        hexCode: "#8E6F96",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png",
      },
      {
        name: "Titanium Black",
        hexCode: "#000000",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-black.png",
      },
      {
        name: "Titanium Gray",
        hexCode: "#808080",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-gray.png",
      },
      {
        name: "Titanium Yellow",
        hexCode: "#FFFF00",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png",
      },
    ],
    storageOptions: [
      {
        capacity: "256 GB",
        price: 1229,
      },
      {
        capacity: "512 GB",
        price: 1329,
      },
      {
        capacity: "1 TB",
        price: 1529,
      },
    ],
    similarProducts: [
      {
        id: "SMG-A25",
        brand: "Samsung",
        name: "Galaxy A25 5G",
        basePrice: 239,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png",
      },
      {
        id: "XMI-RN13P5G",
        brand: "Xiaomi",
        name: "Redmi Note 13 Pro 5G",
        basePrice: 399,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png",
      },
      {
        id: "OPP-R12FS",
        brand: "OPPO",
        name: "Reno 12 FS 4G",
        basePrice: 299,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R12FS-amber-orange.png",
      },
      {
        id: "APL-IP13-128",
        brand: "Apple",
        name: "iPhone 13",
        basePrice: 619,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.png",
      },
      {
        id: "XMI-R13C",
        brand: "Xiaomi",
        name: "Redmi 13C",
        basePrice: 149,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-R13C-navy-blue.png",
      },
      {
        id: "OPP-R11F",
        brand: "OPPO",
        name: "Reno 11 F",
        basePrice: 269,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R11F-verde.png",
      },
    ],
  },
];
