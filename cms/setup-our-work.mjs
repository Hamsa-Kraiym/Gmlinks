import fs from 'node:fs';
import path from 'node:path';
const base='http://localhost:8055';
const email='admin@gmlinks.local';
const password='GMLinks2026!';
const projectRoot=path.resolve(process.cwd(),'..');
async function j(url,opt={}){const r=await fetch(url,opt); if(!r.ok) throw new Error(`${r.status} ${await r.text()}`); return r.json();}
async function login(){return (await j(base+'/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})})).data.access_token}
const token=await login();
const H={Authorization:`Bearer ${token}`,'Content-Type':'application/json'};
async function existsCollection(){const r=await fetch(base+'/collections/work_cities',{headers:{Authorization:`Bearer ${token}`}});return r.ok}
if(!(await existsCollection())){
  await j(base+'/collections',{method:'POST',headers:H,body:JSON.stringify({collection:'work_cities',meta:{icon:'photo_library',note:'Our Work cards: image + city only'},schema:{name:'work_cities'}})});
  for(const f of [
    {field:'city',type:'string',meta:{interface:'input',required:true},schema:{is_nullable:false}},
    {field:'image',type:'uuid',meta:{interface:'file-image',special:['file'],required:true},schema:{is_nullable:true}},
    {field:'visible',type:'boolean',meta:{interface:'boolean',width:'half'},schema:{default_value:true}},
    {field:'sort',type:'integer',meta:{interface:'input',width:'half'},schema:{default_value:1}}
  ]) await j(base+'/fields/work_cities',{method:'POST',headers:H,body:JSON.stringify(f)});
}
const current=await j(base+'/items/work_cities?limit=1',{headers:{Authorization:`Bearer ${token}`}}).catch(()=>({data:[]}));
if(!current.data?.length){
 const cities=['Jerusalem','Cairo','Dubai','Istanbul','Doha','Beirut','Baghdad','Nairobi','Riyadh','New York','London','Tokyo'];
 for(let i=0;i<cities.length;i++){
   const slug=cities[i].toLowerCase().replaceAll(' ','-');
   const filePath=path.join(projectRoot,'public','images','our-work',slug+'.png');
   const fd=new FormData(); fd.append('file',new Blob([fs.readFileSync(filePath)]),slug+'.png');
   const up=await j(base+'/files',{method:'POST',headers:{Authorization:`Bearer ${token}`},body:fd});
   await j(base+'/items/work_cities',{method:'POST',headers:H,body:JSON.stringify({city:cities[i],image:up.data.id,visible:true,sort:i+1})});
 }
}
console.log('Our Work CMS ready: http://localhost:8055/admin');
