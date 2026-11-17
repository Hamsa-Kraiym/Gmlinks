import {getCmsAsset} from '@/lib/cms';
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const r=await getCmsAsset(id);if(!r)return new Response('Not found',{status:404});return new Response(r.body,{headers:{'Content-Type':r.headers.get('content-type')||'image/jpeg','Cache-Control':'public, max-age=300'}})}
