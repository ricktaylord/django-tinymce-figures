define(["jquery", "jquery-ui/autocomplete"], function($) {
    $(function() {
        var parent_id = $( "input#figure_parent_id" ).val();
        var parent_type = $( "input#figure_parent_type" ).val();
        var $select = $("select#figure_refs");
        console.debug("Stuff and things");
        console.debug(parent_id);
        console.debug(parent_type);
        console.debug($select);
        $.getJSON( "/figures/get/"+parent_type+"/"+parent_id+"/", function( data, status, xhr ) {
            console.debug(data);
            $.each(data, function(key, value) {
                $select.append('<option value="' + key + '"">' + value + '</option>');
            });
        });
       
    });
});