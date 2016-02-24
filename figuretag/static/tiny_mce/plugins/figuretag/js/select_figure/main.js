define(["jquery", "jquery-ui/autocomplete"], function($) {
    $(function() {
        var parent_id = $( "input#figure_parent_id" );
        var parent_type = $( "input#figure_parent_type" );
        var $select = $("select#figure_ref")
        $.getJSON( "/figures/get/"+parent_type+"/"+parent_id+"/", function( data, status, xhr ) {
            $.each(json, function(key, value) {
                $select.append('<option value="' + key + '"">' + value + '</option>');
            });
            response( data );
        });
       
    });
});