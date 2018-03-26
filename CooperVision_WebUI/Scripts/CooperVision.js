    var param = [], hash;
    var hashes = window.location.href.slice(window.location.href.lastIndexOf('/')).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        param.push(hash[0]);
        param[hash[0]] = hash[1];
    }
    console.log(param);


$(document).ready(function () {
    jQuery.support.cors = true;
    if (param = "/") {
        $.ajax({
            type: "GET",
            url: "https://localhost/ServiceAPI/api/blog/getAll",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // alert(JSON.stringify(data));                  
                $("#DIV").html('');
                var DIV = '';
                $.each(data, function (i, item) {
                    var rows = "<h2>" + item.title + "</h2>" + "<p>" + item.blogID + "</p>" +
                        "<h6>" + item.created_On + "</h6>" +
                        `<p class="blog-detail">` + item.detail + "</p>" +
                        `<p class="btn btn-default"><a href=/Blog/BlogDetail/` + item.blogID + ">Continue Reading &raquo;</a></p>";

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
    }
});

$(document).ready(function () {
    jQuery.support.cors = true;
    if (window.location.href.indexOf("BlogDetail") > -1) {
        var param = [], hash;
        var hashes = window.location.href.slice(window.location.href.lastIndexOf('/')).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            param.push(hash[0]);
            param[hash[0]] = hash[1];
        }
        console.log(param);

        $.ajax({
            type: "GET",
            url: `https://localhost/ServiceAPI/api/blog` + param,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // alert(JSON.stringify(data));                  
                $(".bog-detail-section").html('');
                $.each(data, function (i, item) {
                    var rows = "<h2>" + item.title + "</h2>" + "<p>" + item.blogID + "</p>" +
                        "<h6>" + item.created_On + "</h6>" +
                        `<p>` + item.detail + "</p>";
                    $('.bog-detail-section').append(rows);
                });
                console.log(data);
                getBlogComments(param);
            },
            //failure: function (data) {
            //    alert(data.responseText);
            //},
            error: function (data) {
                alert(data.responseText);
            }
        })
    }
});

function AddBlog() {
    if (param = "/CreateNewBlog") {
        var blog = {
            title: $('#Title').val(),
            detail: $('#Detail').val()
        };

        $.ajax({
            url: 'https://localhost/ServiceAPI/api/blog/createBlog',
            type: 'POST',
            data: JSON.stringify(blog),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                // alert(JSON.stringify(data));                  
                $("#DIV").html('');
                var DIV = '';
                alert("successfully inserted");
                console.log(data);
            },
            error: function (data) {
                alert(data.responseText);
            }
        });
    }
}

function getBlogComments(Id) {
    console.log('ID= ', Id);
    $.ajax({
        url: `https://localhost/ServiceAPI/api/blog/getComments` + Id,
        type: 'GET',
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            // alert(JSON.stringify(data));
            $(".comment-section").html('');
            //var DIV = '';
            $.each(data, function (i, item) {
                var rows = "<div class=user-comment><h6>" + item.created_On+ "</h6>" +
                    `<p>` + item.comment + "</p></div>";
                $('.comment-section').append(rows);
            });
            console.log(data);
        },
        error: function (data) {
            alert(data.responseText);
        }
    });
}

function AddComment() {
    var param = [], hash;
    var hashes = window.location.href.slice(window.location.href.lastIndexOf('/')).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        param.push(hash[0]);
        param[hash[0]] = hash[1];
    }
    console.log(param);

    var blogComment = {
        comment: $('#Comment').val()
    };

    $.ajax({
        url: 'https://localhost/ServiceAPI/api/blog/postComment/' + param,
        type: 'POST',
        data: JSON.stringify(blogComment),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            // alert(JSON.stringify(data));                  
            $("#DIV").html('');
            var DIV = '';
            alert("Your Comment Is Successfully Inserted");
            getBlogComments(param)    // refresh at this point
            console.log(data);
        },
        error: function (data) {
            alert(data.responseText);
        }
    });
}