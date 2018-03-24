

    //$(document).ready(function () {
    //    $.ajax({
    //        type: "GET",
    //        url: "https://localhost/ServiceAPI/api/MyBlog/blogDetail",
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (data) {
    //            // alert(JSON.stringify(data));                  
    //            $("#DIV").html('');
    //            var DIV = '';
    //            $.each(data, function (i, item) {
    //                var rows = "<tr>" +
    //                    "<td id='BlogID'>" + item.blogID + "</td>" +
    //                    "<td id='Title'>" + item.title + "</td>" +
    //                    "<td id='Detail'>" + item.detail + "</td>" +
    //                    "<td id='Created_On'>" + item.created_On + "</td>" +
    //                    "</tr>";
    //                $('#Table').append(rows);
    //            }); //End of foreach Loop   
    //            console.log(data);
    //        }, //End of AJAX Success function  

    //        failure: function (data) {
    //            alert(data.responseText);
    //        }, //End of AJAX failure function  
    //        error: function (data) {
    //            alert(data.responseText);
    //        } //End of AJAX error function  
    //    })         
    //});



$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://localhost/ServiceAPI/api/MyBlog/blogDetail",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            // alert(JSON.stringify(data));                  
            $("#DIV").html('');
            var DIV = '';
            $.each(data, function (i, item) {
                //var rows = "<tr>" +
                //    "<td id='BlogID'>" + item.blogID + "</td>" +
                //    "<td id='Title'>" + item.title + "</td>" +
                //    "<td id='Detail'>" + item.detail + "</td>" +
                //    "<td id='Created_On'>" + item.created_On + "</td>" +
                //    "</tr>";
                //$('#Table').append(rows);

                var rows = "<h2>" + item.title + "</h2>" + "<p>" + item.blogID + "</p>" +
                    "<h6>" + item.created_On + "</h6>" +
                    `<p class="blog-detail">` + item.detail + "</p>" +
                    `<p><a class="btn btn-default" href=` + "https://nepflexlocalhost.com/blogId=" + item.blogID + ">Continue Reading &raquo;</a></p>";
                $('.col-md-12').append(rows);
              
            });
            console.log(data);
        },
        failure: function (data) {
            alert(data.responseText);
        },
        error: function (data) {
            alert(data.responseText);
        }
    })
});