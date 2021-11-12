
const setCookie= (name,value) => {
  const now= new Date();
  now.setTime(now.getTime() + (15*60*1000));
  const expires = now.toUTCString();  //a kapott időt átalakítjuk UTC stringé
  document.cookie = `${name}=${value};expires=${expires};path=/`;
}

//setCookie('viewed', 5);
//setCookie('uid', 354774631237);
//setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');



const cookieHandler={
  getAll(){
    const keysValues=document.cookie.split("; ").map((item) => item.split("="));
    return Object.fromEntries(keysValues);
  },
  toSessionStorage(){
    const cookies = cookieHandler.getAll();
    for (let i in cookies) {
			sessionStorage.setItem(i, cookies[i])
		}
  },
  flush(){
    const cookies = cookieHandler.getAll();
    for (let k in cookies){
      document.cookie = `${k}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
    }
  }
};




// export { cookieHandler };
export {cookieHandler};


