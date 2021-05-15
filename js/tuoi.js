  
// Chương trình nhập vào năm sinh -> in ra tuổi của bạn
    // dinhvy //

let number = parseInt(prompt("Nhập năm hiện tại bạn đang sống: "));
let namsinh = parseInt(prompt("Nhập năm sinh của bạn: "));
let value = "";
let tmp = "";
	if(number == namsinh)
        {
       let getthanght = parseInt(prompt("Nhập tháng hiện tại trong năm: " + number + " là: "));
       let thangsinh = parseInt(prompt("Nhập tháng sinh của bạn: "));
       
       switch (thangsinh)
         {
           case 0:
             alert("Không tồn tại!");
             break;
           case 1:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 2:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 3:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 4:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 5:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 6:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 7:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 8:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 9:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 10:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 11:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
           case 12:
             tmp = getthanght - thangsinh;
             alert("Số tuổi hiện tại là: " + tmp + " tháng tuổi");
              break;
         }
     }else if(number < namsinh)
     {
      value = parseInt(prompt("Vui lòng Nhập năm hiện tại bạn đang sống phải lớn hơn năm sinh của bạn: "));
     }else{
       value = number - namsinh;
       alert("Số tuổi hiện tại của bạn là: " + value + " tuổi");
     }


