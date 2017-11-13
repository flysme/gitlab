// 获取所有信息
// export const https = 'http://api.budejie.com/api/api_open.php?a=list&c=data&type=1'
import axios from 'axios';
/**
 * method  get
 * @params url 
 * @params params
*/

export function get(url,params={}){
    return new Promise((resolve,reject)=>{
       let urls = '/api/'.concat(url);
        axios.get(urls,{
          params:params,
        }).then(res=>{
          resolve(res);
        }).catch(error=>{
          reject(error)
        })
    })
}

/**
 * method post
 * @params url
 * @params data
*/
export function post(url,data={}){
  return new Promise((resolve,reject) => {
      axios.post(url,data).then(res=>{
          resolve(res);
      }).catch(error=>{
        reject(error);
      })
  })
}

