var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload = function(){

    var res=JSON.parse(request.response);

    //Table Head content codes starts here:

    var container=document.createElement("div");
    container.className="container";

    var row_1=document.createElement("div");
    row_1.className="row";

    var col_1=document.createElement("div");
    col_1.className="col-md-12";

    var table=document.createElement("table");
    table.className="table table-striped"

    var thead=document.createElement("thead");
    thead.className="thead-dark"

    var tbody=document.createElement("tbody");
    tbody.id="tbody_data"

    function row_create(){
    var row=document.createElement("tr");
    return row;
    }

    var th_row=row_create();

    function th_create(tagname,attrname,attrvalue,content){
    var th=document.createElement(tagname);
    th.setAttribute(attrname,attrvalue);
    th.innerHTML=content;
    return th;
    }

    var th1=th_create("th","scope","col","Id")
    var th2=th_create("th","scope","col","Name")
    var th3=th_create("th","scope","col","Email")

    th_row.append(th1,th2,th3)
    thead.append(th_row)
    table.append(thead,tbody)
    col_1.append(table)
    row_1.append(col_1);
    container.append(row_1);
    document.body.append(container);

    // Codes for the initial table body data:

        var tabledata="";
        for (var i=0;i<10;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;

    //Page Buttons codes starts here:

    var col_2=document.createElement("div");
    col_2.className="col-lg-12";

    var button_toolbar = document.createElement("div");
    button_toolbar.className="btn-toolbar";
    button_toolbar.setAttribute("role","toolbar");
    button_toolbar.setAttribute("aria-label","Toolbar with button groups");

    var button_group = document.createElement("div");
    button_group.className="btn-group mr-2";
    button_group.setAttribute("role","group");
    button_group.setAttribute("aria-label","Third group");

    function button_create(tagname,attr1name,attr1value,content1,content2){
        var button = document.createElement(tagname);
        button.setAttribute(attr1name,attr1value);
        button.className=content1;
        button.innerHTML=content2;
        return button;
    }

    var button_1=button_create("button","type","button","btn btn-secondary","1");
    var button_2=button_create("button","type","button","btn btn-secondary","2");
    var button_3=button_create("button","type","button","btn btn-secondary","3");
    var button_4=button_create("button","type","button","btn btn-secondary","4");
    var button_5=button_create("button","type","button","btn btn-secondary","5");
    var button_6=button_create("button","type","button","btn btn-secondary","6");
    var button_7=button_create("button","type","button","btn btn-secondary","7");
    var button_8=button_create("button","type","button","btn btn-secondary","8");
    var button_9=button_create("button","type","button","btn btn-secondary","9");
    var button_10=button_create("button","type","button","btn btn-secondary","10");

    button_group.append(button_1,button_2,button_3,button_4,button_5,button_6,button_7,button_8,button_9,button_10);
    button_toolbar.append(button_group);
    col_2.append(button_toolbar)
    row_1.append(col_2);
    container.append(row_1);
    document.body.append(container);

    //Buttons EventListener codes starts here:

    button_1.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=0;i<10;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_2.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=10;i<20;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_3.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=20;i<30;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_4.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=30;i<40;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_5.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=40;i<50;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_6.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=50;i<60;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_7.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=60;i<70;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_8.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=70;i<80;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_9.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=80;i<90;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

      button_10.addEventListener("click", function (e) {
        var tabledata="";
        for (var i=90;i<100;i++){
            tabledata +=`<tr>
                            <td>${res[i].id}</td>
                            <td>${res[i].name}</td>
                            <td>${res[i].email}</td>
                        </tr>`
        }
        document.getElementById("tbody_data").innerHTML=tabledata;
      });

}






 








