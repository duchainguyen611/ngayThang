function checkdays(){
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if(month==1 || month==3 ||month==5 ||month==7 ||month==8 ||month==10 ||month==12){
        txt = "Tháng này có 31 ngày";
    }else if(month==4 || month==6 || month==9 ||month==11){
        txt = "Tháng này có 30 ngày";
    }else{
        if(year%4==0 && year%100!=0 || year%400==0){
            txt = "Tháng này có 28 ngày";
        }else{
            txt = "Tháng này có 29 ngày";
        }
    }
    document.getElementById("day").innerHTML = txt;
}