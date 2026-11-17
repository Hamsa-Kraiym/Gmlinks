import { services, workCities } from './content';
const DIRECTUS_URL=process.env.DIRECTUS_URL;
const EMAIL=process.env.DIRECTUS_EMAIL;
const PASSWORD=process.env.DIRECTUS_PASSWORD;
let cachedToken:string|undefined;
async function token(){if(cachedToken)return cachedToken;if(!DIRECTUS_URL||!EMAIL||!PASSWORD)return;try{const r=await fetch(`${DIRECTUS_URL}/auth/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:EMAIL,password:PASSWORD}),cache:'no-store'});if(!r.ok)return;cachedToken=(await r.json()).data.access_token;return cachedToken;}catch{return}}
async function df<T>(path:string):Promise<T|null>{if(!DIRECTUS_URL)return null;try{const t=await token();const r=await fetch(`${DIRECTUS_URL}${path}`,{headers:t?{Authorization:`Bearer ${t}`}:{},cache:'no-store'});if(!r.ok)return null;return await r.json() as T}catch{return null}}
export async function getServices(){return services}
export async function getWorkCities(){const r=await df<{data:Array<{id:number,city:string,image:string,visible:boolean,sort:number}>}>('/items/work_cities?filter[visible][_eq]=true&sort=sort&limit=100');if(!r?.data?.length)return workCities.filter(x=>x.visible).sort((a,b)=>a.order-b.order);return r.data.map(x=>({city:x.city,image:`/api/cms-assets/${x.image}`,visible:x.visible,order:x.sort}))}
export async function getCmsAsset(id:string){if(!DIRECTUS_URL)return null;const t=await token();if(!t)return null;const r=await fetch(`${DIRECTUS_URL}/assets/${id}`,{headers:{Authorization:`Bearer ${t}`},cache:'no-store'});return r.ok?r:null}
