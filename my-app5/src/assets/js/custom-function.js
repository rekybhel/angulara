function customAddFunction(a) {
    var oid = a;
    var str = '<div><label>Documents</label><input formControlName="itemname" name=docsfile[' + a + '][] type="file" class="form-control"><button type="button" id="vvv" onclick="customRemoveFunction(this);">-</button></div> ';
    $("#docsec" + oid).append(str);
}

function customRemoveFunction(a) {
    $(a).parent('div').remove();
}

$(document).ready(function () {
  var str1 = '<div class="alert alert-success"><strong>Success!</strong> User add successfully.</div>';
  var str2 = '<div class="alert alert-info"><strong>Technical error!</strong>  Please try again.</div>';
 
    $(".formsmulti").submit(function (event) {        
        var formData = new FormData(this);
        $.ajax({
            type: 'POST',
            url: "http://192.168.0.1:8183/anurag/users/add",
            data: formData,
            success: function (response) {
                  obj = JSON.parse(response);
                  if(obj.code == 'success'){
                    $(".showmsg").show();
                    $(".showmsg").append(str1);
                     }else{
                      $(".showmsg").show();
                    $(".showmsg").append(str2);
                     }
                  setTimeout(function(){
                      $(".showmsg").hide();
                   },3000);
                console.log(obj.code);
            },
            cache: false,
            contentType: false,
            processData: false

        });
    });
    
      $(".editusers").submit(function (event) {    
        var str3 = '<div class="alert alert-success"><strong>Success!</strong>Details edit successfully.</div>';    
        var formData = new FormData(this);
        $.ajax({
            type: 'POST',
            url: "http://192.168.0.1:8183/anurag/users/edit",
            data: formData,
            success: function (response) {
             obj = JSON.parse(response);
                  if(obj.code == 'success'){
                    $(".editshowmsg").show();
                    $(".editshowmsg").append(str3);
                     }else{
                      $(".editshowmsg").show();
                    $(".editshowmsg").append(str2);
                     }
                  setTimeout(function(){
                      $(".editshowmsg").hide();
                   },3000);
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                console.log(obj.code);
                
            },
            cache: false,
            contentType: false,
            processData: false

        });
    });
});
