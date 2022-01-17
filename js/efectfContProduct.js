// funcion efectos sobre imagenes de productos y texto de descripcion
function efectsCont (imagen,shadowOrigin, shadowHover, numeroclass,textoDescript) {
    $(imagen).css({"box-shadow": shadowHover, transition: ".3s ease-in-out"});
    $(imagen).mouseout(()=>{$(imagen).css({"box-shadow": shadowOrigin});}); 
    $(imagen).click(()=> {$(imagen).css({"box-shadow": shadowHover, transition: ".3s ease-in-out"});
    $(".divTextDescr"+numeroclass).slideDown().mouseenter(()=>{
        $(imagen).css({"box-shadow": shadowHover, transition: ".3s ease-in-out"});
    }).mouseout(()=> {$(imagen).css({"box-shadow": shadowOrigin});
});
$(".textDescr"+numeroclass).text(textoDescript).mouseenter(()=>{$(imagen).css({"box-shadow": shadowHover, transition: ".3s ease-in-out"});
});
});
$(".spancloseTextDescr"+numeroclass).click(()=> { $(".divTextDescr"+numeroclass).slideUp("fast");
});
};
// funcion efectos al hover sobre  imagen de cnasta
function effectCarImg(numeroclass) {
    $(".buttonImgCarAdd"+numeroclass).css({transform:"scale(1.05, 1.05)"});
    $(".textAgregar"+numeroclass).show();
    $(".buttonImgCarAdd"+numeroclass).mouseout(()=>{$(".textAgregar"+numeroclass).hide();$(".buttonImgCarAdd"+numeroclass).css({transform:"scale(1, 1)"});})
}
// function efecto al click imagen de canasta
function effectClickCart (numeroclass, filterClick, colortextTimeOut) {
    $(".buttonImgCarAdd"+numeroclass).css({transition:"300ms ease all",filter:filterClick});
    $(".textAgregar"+numeroclass).text("Agregado").css({color:"#47cf73"});
    $(".checked"+numeroclass).fadeIn(500);
    setTimeout(()=> {
        $(".buttonImgCarAdd"+numeroclass).css({transition:"300ms ease all",filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate( 255deg) brightness(103%)contrast(102%)"});
        $(".checked"+numeroclass).fadeOut(500);
        $(".textAgregar"+numeroclass).text("Quiero otro").css({color:colortextTimeOut});
    },1500)
}
// function for money format
// function formatCurrency (locales, divisa, digitosFraccion, number) {
//     var formatted = new Intl.NumberFormat(locales, {
//     style: 'currency',
//     currency: divisa,
//     minimumFractionDigits: digitosFraccion
//     }).format(number);
//     return formatted;
// }