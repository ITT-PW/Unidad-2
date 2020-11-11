$(document).ready(function() {
    // $("#parrafo").click(function(){
    //     $(this).hide();
    // });

    $("#parrafo").click(function(){
            $(this).addClass("parrafo");
     });
     $('#op').change(function(){
        var valor=$('#op').val();
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        switch (valor) {
            case '+':
                var res=parseFloat(n1)+parseFloat(n2);
                break;
            default:
                break;
        }
        $("#Res").val(res);
     });
})