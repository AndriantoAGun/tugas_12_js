function tampilBuahBuahan(){
  var buah0 = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];
  console.log(buah0);

  var buah1 = buah0.pop();
  console.log(buah0);

  var buah2 = buah0.shift();
  console.log(buah0);

  return tampilBuahBuahan;
}

tampilBuahBuahan();
