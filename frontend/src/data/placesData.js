import { Footprints } from "lucide-react";
import { 
  Croissant, 
  Coffee, 
  Utensils, 
  Beer, 
  Truck, 
  Pizza, 

  Clapperboard,
  Volleyball,
  RollerCoaster,
  Clover,
  Play, 
  ShoppingCart, 
  Shirt, 
  Store, 
  BookOpen, 
  MonitorSmartphone,
  Warehouse,
  Flower,
  Sofa,
  Gem,
  Dog,

  PiggyBank, 
  CreditCard, 
  FireExtinguisher, 
  Landmark, 
  Siren, 
  Mail, 

  School,
  GraduationCap,
  Amphora, 
  Palette, 
  Pyramid, 

  Shrub, 
  PawPrint, 
  Fish, 
  TentTree, 
  Caravan,

  Plane,
  Bus,
  SquareM,
  CarTaxiFront,
  TrainFront,
  SquareParking,

  Dumbbell,
  Hospital,
  Cross,
  Bandage,
  Activity,
  Laugh,
  HeartHandshake,

} from "lucide-react";

export const PLACES_DATA = {
  food: {
    label: "comida",
    placeTypes: [
      { value: "cafe", label: "Cafeterías", icon: Coffee },
      { value: "bakery", label: "Panaderías", icon: Croissant },
      { value: "restaurant", label: "Restaurantes", icon: Utensils },
      { value: "bar", label: "Bares", icon: Beer },
      { value: "meal_delivery", label: "Entrega a domicilio", icon: Truck },
      { value: "meal_takeaway", label: "Para llevar", icon: Pizza },
    ],
  },
  entertainment: {
    label: "entretenimiento",
    placeTypes: [
      { value: "stadium", label: "Estadios", icon: Volleyball },
      { value: "movie_theater", label: "Cines", icon: Clapperboard },
      { value: "amusement_park", label: "Parque de atracciones", icon: RollerCoaster },
      { value: "casino", label: "Casinos", icon: Clover },
      { value: "night_club", label: "Discotecas", icon: Play },
    ],
  },
  shopping: {
    label: "compras",
    placeTypes: [
      { value: "supermarket", label: "Supermercados", icon: Store },
      { value: "shopping_mall", label: "Centros comerciales", icon: ShoppingCart },
      { value: "department_store", label: "Grandes almacenes", icon: Warehouse },
      { value: "clothing_store", label: "Tiendas de ropa", icon: Shirt },
      { value: "book_store", label: "Librerías", icon: BookOpen },
      { value: "electronics_store", label: "Electrónica", icon: MonitorSmartphone },
      { value: "florist", label: "Floristerías", icon: Flower },
      { value: "furniture_store", label: "Tiendas de muebles", icon: Sofa },
      { value: "jewelry_store", label: "Joyerías", icon: Gem},
      { value: "shoe_store", label: "Zapaterías", icon: Footprints },
      { value: "pet_store", label: "Tiendas de animales", icon: Dog },
    ],
  },
  public_services: {
    label: "servicios públicos",
    placeTypes: [
      { value: "bank", label: "Banco", icon: PiggyBank },
      { value: "atm", label: "Cajero automático", icon: CreditCard },
      { value: "fire_station", label: "Estacion de bomberos", icon: FireExtinguisher },
      { value: "library", label: "Biblioteca", icon: BookOpen },
      { value: "local_government_office", label: "Oficinas de gobierno", icon: Landmark },
      { value: "police", label: "Estación de policía", icon: Siren },
      { value: "post_office", label: "Oficina de correos", icon: Mail },
    ],
  },
  culture: {
    label: "educación & cultura",
    placeTypes: [
      { value: "school", label: "Escuelas", icon: School },
      { value: "university", label: "Universidades", icon: GraduationCap },
      { value: "museum", label: "Museos", icon: Palette },
      { value: "art_galery", label: "Galería de arte", icon: Amphora },
      { value: "tourist_attraction", label: "Atracción turística", icon: Pyramid },
    ],
  },
  nature: {
    label: "naturaleza",
    placeTypes: [
      { value: "park", label: "Parques", icon: Shrub },
      { value: "rv_park", label: "Parques para caravanas", icon: Caravan },
      { value: "zoo", label: "Zoológicos", icon: PawPrint },
      { value: "aquarium", label: "Acuarios", icon: Fish },
      { value: "campground", label: "Camping", icon: TentTree },
    ],
  },
  transport: {
    label: "transporte",
    placeTypes: [
      { value: "airport", label: "Aeropuerto", icon: Plane },
      { value: "bus_station", label: "Estaciones de autobuses", icon: Bus },
      { value: "subway_station", label: "Estaciones de metro", icon: SquareM },
      { value: "taxy_stand", label: "Paradas de taxi", icon: CarTaxiFront },
      { value: "train_station", label: "Estaciones de tren", icon: TrainFront },
      { value: "parking", label: "Parkings", icon: SquareParking },
    ],
  },
  health: {
    label: "salud",
    placeTypes: [
      { value: "dentist", label: "Dentistas", icon: Laugh },
      { value: "doctor", label: "Medicos", icon: Bandage},
      { value: "hospital", label: "Hospitales", icon: Hospital },
      { value: "pharmacy", label: "Farmacias", icon: Cross },
      { value: "physiotherapist", label: "Fisioterapeutas", icon: Activity },
      { value: "beauty_salon", label: "Salones de belleza", icon: HeartHandshake },
      { value: "gym", label: "Gimnasios", icon: Dumbbell },
    ],
  },
};
