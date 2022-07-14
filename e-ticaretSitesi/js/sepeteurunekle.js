
function sepeteurunekle(urunadi, fiyati, foto) {
  let text1 = localStorage.getItem("urunler");
  arr = JSON.parse(text1);  

  const myObj = { urunAdi: urunadi, fiyat: fiyati, resimUrl: foto };
  let myObj1 =[];
  if (arr != null && arr.length > 0) {
    arr.push(myObj)
    myObj1 = arr;
  }
  else {
    myObj1.push(myObj);
  }
  const myJSON = JSON.stringify(myObj1);
  localStorage.setItem("urunler", myJSON);  
  swal("Ürün Sepete Eklendi", "İyi Günlerde Kullanınız", "success");
  
  /*lUrun
   = localStorage.getItem("urunler");		 
  lUrun = lUrun + ',';
  localStorage.setItem('urunler',lUrun + '{urunAdi:"'+urunadi+'",fiyat:"'+fiyat+'",resimUrl:"'+foto+'"}');*/
};

function sepetUrunleriGetir(key) {
  lUrun = localStorage.getItem("urunler");
  arr = JSON.parse(lUrun);
  return arr;

};
