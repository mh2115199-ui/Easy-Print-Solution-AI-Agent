import {seedFAQs,uid} from './engine.js';
const KEY='eps-ai-agent-v1';
export const initial=()=>({settings:{name:'Easy Print Solution',greeting:'',aiEnabled:false,autoReply:true},faqs:seedFAQs,contacts:[{id:'c1',name:'Sample Customer',phone:'Demo contact',channel:'Demo',status:'Open'}],messages:[{id:'m1',contact:'c1',from:'customer',text:'Assalamualaikum, visiting cards print karwane hain',time:new Date().toISOString()},{id:'m2',contact:'c1',from:'agent',text:'Wa Alaikum Assalam! Product size, quantity aur finishing bata dein.',time:new Date().toISOString()}],orders:[{id:'EPS-DEMO-001',name:'Sample Customer',service:'Visiting Cards',quantity:500,status:'New',city:'Karachi',date:new Date().toISOString(),notes:'Sample record — editable / removable'}],paused:[],activity:[]});
export function load(){try{const s=JSON.parse(localStorage.getItem(KEY));return s?.settings&&Array.isArray(s.orders)?s:initial()}catch{return initial()}}
export function save(s){localStorage.setItem(KEY,JSON.stringify(s))}
export function csv(rows){const cols=['id','date','name','service','quantity','city','status','notes'];return [cols.join(','),...rows.map(r=>cols.map(k=>'"'+String(r[k]??'').replaceAll('"','""')+'"').join(','))].join('\r\n')}
export function download(content,name,type='text/plain'){const b=new Blob([content],{type});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
export {uid};
