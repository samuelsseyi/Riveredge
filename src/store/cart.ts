import {create} from 'zustand';
import {persist} from 'zustand/middleware';
type State={cart:Record<string,number>;add:(id:string,n?:number)=>void;set:(id:string,n:number)=>void;clear:()=>void};
export const useCart=create<State>()(persist((set)=>({cart:{},add:(id,n=1)=>set(s=>({cart:{...s.cart,[id]:Math.min(99,(s.cart[id]||0)+n)}})),set:(id,n)=>set(s=>{const cart={...s.cart};if(n<=0)delete cart[id];else cart[id]=Math.min(99,n);return {cart}}),clear:()=>set({cart:{}})}),{name:'riveredge-demo-cart'}));
