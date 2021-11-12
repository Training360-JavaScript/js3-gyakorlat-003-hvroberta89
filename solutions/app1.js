
const setCookie= (value) => {
  const now= new Date();
  now.setTime(now.getTime() + (15*60*1000));
  const expires = now.toUTCString();  //a kapott időt átalakítjuk UTC stringé
  document.cookie = `token=${value};expires=${expires};path=/`;
}





// export default setCookie;
export default setCookie;