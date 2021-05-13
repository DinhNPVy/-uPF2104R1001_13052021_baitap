// Chương trình nhập vào năm sinh -> in ra tuổi của bạn
    // dinhvy //

    let number = parseInt(prompt("Nhập năm hiện tại bạn đang sống: "));
let namsinh = parseInt(prompt("Nhập năm sinh của bạn: "));
let value = "";
   if(number < namsinh)
     {
      value = parseInt(prompt("Vui lòng Nhập năm hiện tại bạn đang sống phải lớn hơn năm sinh của bạn: "));
     }else{
       value = number - namsinh;
     }
alert("Số tuổi hiện tại của bạn là: " + value + " tuổi");