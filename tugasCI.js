//=====task1======

//palindrom
let cekPalindrom = (input) => {
       let cek = input.toLowerCase().split('').reverse().join('');

       if ( input.toLowerCase() == cek){
              console.log(`${input} adalah palindrom`)
       } else{
              console.log(`${input} bukan palindrom`)
       } 
}

cekPalindrom('Malam');
cekPalindrom('siang');
cekPalindrom('Ini');
cekPalindrom('tidak');


//reverse Words
let reverseWords = (kata) => {
       let inputKata = kata.toLowerCase().split(' ').reverse().join(' ');
       console.log(inputKata);
}

reverseWords('Saya Belajar Javascript');







//=====task2=====

let AplikasiPijarFood = (harga,voucer,jarak,pajak) => {
    //harga dan voucer
       if (voucer = 'PIJAR FOOD' && harga >= 50000) {
              var maxDiskon = harga * 50/100
              if (maxDiskon >= 50000) {
              maxDiskon = 50000
              }
              console.log(`harga : ${harga}`)
              console.log(`potongan : ${maxDiskon}` )
       } else if (voucer = 'DITRAKTIRPIJAR' && harga >= 25000) {
              var maxDiskon = harga * 60/100
              if (maxDiskon >= 30000) {
              maxDiskon = 30000
              }
              console.log(`harga : ${harga}`)
              console.log(`potongan : ${maxDiskon}` )
       } else {
              console.log(`harga : ${harga}`)
              console.log(`potongan : - ` )
       }
       
    //jarak (biaya Antar)   
       if (jarak <= 2) {
              var hargaJarak = 5000
              console.log(`jarak : ${hargaJarak}`)
       } else if(jarak > 2){
              let sr = 0
              for (let i = 2; i< jarak; i++) {
                     sr += 3000
              }
              let hargaAwalJarak= 5000
              var hargaJarak = hargaAwalJarak + sr  
              console.log(`biaya antar : ${hargaJarak} `)
       }   

    //pajak
       if (pajak == true) {
              var bpajak = 5/100 * harga
              console.log( `pajak : ${bpajak}`)
       }  else if (pajak == false) {
              console.log( `pajak : -`) 
              var bpajak = 0
              console.log( `pajak : ${bpajak}`)
       }

    //total
       let totalHarga = harga
       let potonganHarga = maxDiskon
       let biayaAntar = hargaJarak
       let biayaPajak = bpajak
       let subTotal = totalHarga - potonganHarga + biayaAntar +biayaPajak
       console.log(`subTotal : ${subTotal}`)
}

AplikasiPijarFood(75000,'PIJAR FOOD',5,true)





// =====task3=====

let divideAndSort = (number) => {
    let ubah = number.toString().split('0').map((item) => item.split('').sort().join('')).join('');
    console.log(parseInt(ubah))
 
  }
  divideAndSort(5956560159466056);



  






























































  

