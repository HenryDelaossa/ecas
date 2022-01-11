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
// funcion efectos sobre imagen de carrito
function effectCarImg(numeroclass) {
    $(".textAgregar"+numeroclass).show();
    $(".buttonImgCarAdd"+numeroclass).mouseout(()=>{$(".textAgregar"+numeroclass).hide();
})
}
// function for money format
function formatCurrency (locales, currency, fractionDigits, number) {
    var formatted = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: fractionDigits
    }).format(number);
    return formatted;
}