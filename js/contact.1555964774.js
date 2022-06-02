var validEmail = true;

function validForm(f) {
        var errorFields = [];
        var notAllNumFields = ["name", "email", "subject","message"];
        var allNumFields = ["imageId"];

        jQuery.each($(f).serializeArray(), function(i, field) {
            //remove previous field highlights            
            removeHighLightField(field.name);
            if(field.value.length == 0) {
                errorFields.push(field.name);
            }
            if(field.value.length > 0) {
                /*shoul not accept ALL number input
                 *should accept number input only*/
                if((jQuery.inArray(field.name, notAllNumFields) > -1 && !isNaN(field.value))
                    || (jQuery.inArray(field.name, allNumFields) > -1 && isNaN(field.value))){
                    errorFields.push(field.name);
                }
                
            }
        });
        $.each(errorFields, function(index, fieldname) {
            highLightField(fieldname);
        });
        if(errorFields.length > 0) {
            return false;
        }
	return true;
}

function checkNotAllNumFields(id) {
    var value = ($("#"+id).val());
    if(value.length == 0 || !isNaN(value)) highLightField(id);
    else removeHighLightField(id);
}

function checkAllNumFields(id) {
    var value = ($("#"+id).val());
    if(value.length == 0 || isNaN(value)) highLightField(id);
    else removeHighLightField(id);
}

function highLightField(id) {
    $('#'+id).addClass("highlight_field");
}

function removeHighLightField(id) {
    $('#'+id).removeClass("highlight_field");
}


$(document).ready(function() {
    $('#name').blur(function() {
        checkNotAllNumFields("name");
    });
    $('#email').blur(function() {
        checkNotAllNumFields("email");
    });
    $('#subject').blur(function() {
        checkNotAllNumFields("subject");
    });
    $('#message').blur(function() {
        checkNotAllNumFields("message");
    });
});

function setImageSelection(id) {
    $('#imageId').val(id);
    for(i = 1; i <= 5; i++) {
        $('#img'+i).removeClass("highlight_img");
    }
    $('#img'+id).addClass("highlight_img");
}

