  
// Chương trình nhập vào năm sinh -> in ra tuổi của bạn
    // dinhvy //

let number = parseInt(prompt("Nhập năm hiện tại bạn đang sống: "));
let namsinh = parseInt(prompt("Nhập năm sinh của bạn: "));
let value = "";
	 if(number = namsinh)
     {
       let thangsinh = parseInt(prompt("Nhập tháng sinh của bạn: "));
       switch (thangsinh)
         {
           case 0:
             alert("Không tồn tại!");
             break;
           case 1:
             alert("Số tuổi hiện tại của bạn là 1 tháng tuổi");
              break;
           case 2:
             alert("Số tuổi hiện tại của bạn là 2 tháng tuổi");
              break;
           case 3:
             alert("Số tuổi hiện tại của bạn là 3 tháng tuổi");
              break;
           case 4:
             alert("Số tuổi hiện tại của bạn là 4 tháng tuổi");
              break;
           case 5:
             alert("Số tuổi hiện tại của bạn là 5 tháng tuổi");
              break;
           case 6:
             alert("Số tuổi hiện tại của bạn là 6 tháng tuổi");
              break;
           case 7:
             alert("Số tuổi hiện tại của bạn là 7 tháng tuổi");
              break;
           case 8:
             alert("Số tuổi hiện tại của bạn là 8 tháng tuổi");
              break;
           case 9:
             alert("Số tuổi hiện tại của bạn là 9 tháng tuổi");
              break;
           case 10:
             alert("Số tuổi hiện tại của bạn là 10 tháng tuổi");
              break;
           case 11:
             alert("Số tuổi hiện tại của bạn là 11 tháng tuổi");
              break;
           case 12:
             alert("Số tuổi hiện tại của bạn là 12 tháng tuổi");
              break;
         }
     }
   else if(number < namsinh)
     {
      value = parseInt(prompt("Vui lòng Nhập năm hiện tại bạn đang sống phải lớn hơn năm sinh của bạn: "));
     }else{
       value = number - namsinh;
       alert("Số tuổi hiện tại của bạn là: " + value + " tuổi");
     }

