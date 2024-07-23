export function slugToLink(slug:string, endpoint:string = '') : string
{
  return endpoint+'/'+slug;
}