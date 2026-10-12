export const business = {name:'Riveredge Restaurant',address:'233 The Queensway S, Keswick, ON L4P 2A8',phone:'905-476-2222',email:'riveredge.keswick@gmail.com',hours:'Tuesday–Sunday · 9 am–8:30 pm',closed:'Monday · Closed',hoursNotice:'Hours require owner confirmation. Published pages differ; please call before visiting.',directions:'https://www.google.com/maps/dir/?api=1&destination=233+The+Queensway+S+Keswick+ON+L4P+2A8'};
export const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'America/Toronto',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export const money = (n:number) => new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(n);
export const assets = {
 breakfast:{src:'/assets/breakfast.jpg',alt:'Concept breakfast photograph: eggs, toast and vegetables'},
 table:{src:'/assets/table.jpg',alt:'Concept dining atmosphere photograph, not Riveredge Restaurant'},
 food:{src:'/assets/food.jpg',alt:'Concept photograph of a fresh salad'},
 river:{src:'/assets/ontario-river-concept.jpg',alt:'Illustrative Ontario riverside scene, not a photograph of the Maskinonge River'}
};
export type Dish={id:string;name:string;category:string;description:string;price:number;image?:string;availability:'concept';modifiers:string[];featured:boolean};
export const menu:Dish[] = [
 {id:'breakfast',name:'Homestyle breakfast',category:'Breakfast',description:'An illustrative breakfast selection for exploring this ordering concept.',price:14,image:assets.breakfast.src,availability:'concept',modifiers:[],featured:true},
 {id:'toast',name:'French toast',category:'Breakfast',description:'An illustrative sweet breakfast option. Actual dishes require owner verification.',price:13,availability:'concept',modifiers:[],featured:false},
 {id:'salad',name:'Greek-inspired salad',category:'Lunch',description:'A concept inspired by the Greek influence described on the official website.',price:16,image:assets.food.src,availability:'concept',modifiers:[],featured:true},
 {id:'sandwich',name:'Homestyle sandwich',category:'Lunch',description:'A sample lunch selection to demonstrate the pickup journey.',price:15,availability:'concept',modifiers:[],featured:false},
 {id:'dinner',name:'Homestyle dinner plate',category:'Dinner',description:'An illustrative dinner selection. Ingredients and availability are unconfirmed.',price:24,availability:'concept',modifiers:[],featured:true},
 {id:'soup',name:'Soup & bread',category:'Homestyle favourites',description:'A sample comfort-food selection for demonstration only.',price:11,availability:'concept',modifiers:[],featured:false}
];
export const eventTypes=['Catering','Birthday celebration','Graduation','Family gathering','Business event','Small-group gathering','Other'];
export const slots=['9:30 am','11:00 am','12:30 pm','5:00 pm','6:30 pm','7:30 pm'];
