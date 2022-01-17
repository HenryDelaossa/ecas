// add childrens to create products container
const jsonProducts = "JSON/productos.json"
let f = 0
$("#btnMercar").click(()=> {
    $("#btnMercar").fadeOut(300)
$.getJSON(jsonProducts, function(respuesta, estado) {
    if(estado === "success") {
        let datos = respuesta
        for(const dato of datos) {
            f++
            $("#contFatherBoxProduct").append(
        `<div class="divFather" id="divFather${f}" style="grid-area:div${f}">
            <img class="imgProduct${f} imageOfProduct" src="${dato.img}"> 
            <h3 class="nameProduct"> ${dato.description}</h3>
            <p class="priceProduct"> ${dato.price}</p>
            <div style="position:relative">
                <img  class="buttonImgCarAdd${f} buttonImgAdd" src="img/add.png">
                <img class="checked${f} checkeddd" src="img/check1.png" style="width:40px; display:none">
            </div>
            <div class="divtextAgr">
                <p class="textAgregar${f}"></p>
            </div>
            <div class="divTextDescr${f}">
                <span class="spancloseTextDescr${f}">X</span>
                <p class="textDescr${f}"></p>
            </div>
            <div>
                <p class="cantInd" style="display:none;">1</p>
            </div>
        </div>`);
            // estilos en general divFather
            $(".divFather").css({"text-align": "center", "width": "80%", height:"90%", "margin": "3rem", "margin-bottom": "20px","position": "relative"});
            // estilos en general priceProduct
            $(".priceProduct").css({color: "#f6d454"});
            // estilos en general divcontenedor de texto agregar (le doy una altura para mas adelante al hacer hover no se des-ubiquen los divs inferiones)
            $(".divtextAgr").css({height:"20px", position:"relative"});
            $(".textAgregar"+[f]).css({position:"absolute", left:"50%", top:"50px",transform:"translate(-50%, -50%)",color:"#f6d454",display:"none"}).text("agregar al carrito");
            // estilos en general divTextDescr
            $(".divTextDescr"+[f]).css({position: "absolute", top: "40%", left: "50%",transform: "translate(-50%, -50%)","background-color": "#ffffff80", height: "80%", width: "90%", display: "none", "border-radius": "5px"});
            $(".textDescr"+[f]).css({position:"absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"});
            // estilos en general spancloseTextDescr
            $(".spancloseTextDescr"+[f]).css({position: "absolute", top:"0", left:"0", color:"#f6d454", cursor:"pointer", "text-decoration": "underline"});
            // estilos en general para las imagenes 
            $(".imgProduct"+[f]).css({width: "90%", height: "80%",  "box-shadow": "0px 0px 50px -9px #000000", "border-radius": "5px", cursor: "pointer"});
            // estilos en general para las imagenes 
            $(".buttonImgAdd").css({position:"absolute", left:"40%", "z-index":"1"})    
            $(".buttonImgCarAdd"+[f]).css({cursor: "pointer", display: "block", margin: "0 auto", filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(255deg) brightness(103%) contrast(102%)"});
            $(".checked"+[f]).css({position:"absolute", top:"0", left:"55%", filter:"invert(64%) sepia(52%) saturate(4244%) hue-rotate(79deg) brightness(113%) contrast(126%)"})
            // variable de aspecto sombra original o inicial
            let shadowOrigin = "0px 0px 50px -9px #000000"
            // aplico la funcion de efecto con sus respectivos parametros por separado a cada clase imgProducto[i] ya que en todos es diferente el efecto y el contenido
            $(".imgProduct1").mouseenter(()=> {efectsCont(".imgProduct1",shadowOrigin, "0px 0px 50px -9px #da7336", 1, "Pasta de tomate de 500gr");});
            $(".imgProduct2").mouseenter(()=> {efectsCont(".imgProduct2",shadowOrigin, "0px 0px 50px -9px #da7336", 2, "Pasta de tomate de 750gr")});
            $(".imgProduct3").mouseenter(()=> {efectsCont(".imgProduct3",shadowOrigin, "0px 0px 50px -9px #30BE36", 3, "Mayonesa de cilantro")});
            $(".imgProduct4").mouseenter(()=> {efectsCont(".imgProduct4",shadowOrigin, "0px 0px 50px -9px #888800", 4, "Pasta de tomatillos verdes")});
            $(".imgProduct5").mouseenter(()=> {efectsCont(".imgProduct5",shadowOrigin, "0px 0px 50px -9px #FF5375", 5, "cebollitas encurtidas")});
            $(".imgProduct6").mouseenter(()=> {efectsCont(".imgProduct6",shadowOrigin, "0px 0px 50px -9px #FEFF34", 6, "ghee (mantequilla 100% clarificada)")});
            $(".imgProduct7").mouseenter(()=> {efectsCont(".imgProduct7",shadowOrigin, "0px 0px 50px -9px #E7AC08", 7, "aji yuquitania de la sierra 50gr")});
            $(".imgProduct8").mouseenter(()=> {efectsCont(".imgProduct8",shadowOrigin, "0px 0px 50px -9px #E7AC08", 8, "aji yuquitania de la sierra 25gr")});
            $(".imgProduct9").mouseenter(()=> {efectsCont(".imgProduct9",shadowOrigin, "0px 0px 80px -9px #8c004b", 9, "Mermelada de agraz")});
            $(".imgProduct10").mouseenter(()=> {efectsCont(".imgProduct10",shadowOrigin, "0px 0px 50px -9px #660066", 10, "Mermelada de agraz endulzada con panela")});
            $(".imgProduct11").mouseenter(()=> {efectsCont(".imgProduct11",shadowOrigin, "0px 0px 50px -9px #d95030", 11, "Aromaticas con fruta deshidratada natural mente (al sol)")});
            $(".imgProduct12").mouseenter(()=> {efectsCont(".imgProduct12",shadowOrigin, "0px 0px 50px -9px #804000", 12, "cafe arhuaco organico from colombia")});
            $(".imgProduct13").mouseenter(()=> {efectsCont(".imgProduct13",shadowOrigin, "0px 0px 50px -9px #a18262", 13, "cafe castillo caramelo from colombia")});
            // funcion al hover de imgn carrito
            $(".buttonImgCarAdd1").hover (()=> {effectCarImg(1)});$(".buttonImgCarAdd2").hover (()=> {effectCarImg(2)});$(".buttonImgCarAdd3").hover (()=> {effectCarImg(3)});$(".buttonImgCarAdd4").hover (()=> {effectCarImg(4)});$(".buttonImgCarAdd5").hover (()=> {effectCarImg(5)});$(".buttonImgCarAdd6").hover (()=> {effectCarImg(6)});$(".buttonImgCarAdd7").hover (()=> {effectCarImg(7)});$(".buttonImgCarAdd8").hover (()=> {effectCarImg(8)});$(".buttonImgCarAdd9").hover (()=> {effectCarImg(9)});$(".buttonImgCarAdd10").hover (()=> {effectCarImg(10)});$(".buttonImgCarAdd11").hover (()=> {effectCarImg(11)});$(".buttonImgCarAdd12").hover (()=> {effectCarImg(12)});$(".buttonImgCarAdd13").hover (()=> {effectCarImg(13)});

            // funcion al click imgn carrito 
            $(".buttonImgCarAdd1").click (()=> {effectClickCart(1, "invert(46%) sepia(72%) saturate(493%) hue-rotate(339deg) brightness(99%) contrast(91%)", "#da7336" )});$(".buttonImgCarAdd2").click (()=> {effectClickCart (2, "invert(46%) sepia(72%) saturate(493%) hue-rotate(339deg) brightness(99%) contrast(91%)", "#da7336")});$(".buttonImgCarAdd3").click (()=> {effectClickCart (3,"invert(52%) sepia(82%) saturate(452%) hue-rotate(73deg) brightness(98%) contrast(93%)", "#30BE36")});$(".buttonImgCarAdd4").click (()=> {effectClickCart (4, "invert(38%) sepia(86%) saturate(1355%) hue-rotate(41deg) brightness(96%) contrast(101%)", "#888800")});$(".buttonImgCarAdd5").click (()=> {effectClickCart (5, "invert(42%) sepia(73%) saturate(1038%) hue-rotate(313deg) brightness(100%) contrast(101%)", "#FF5375")});$(".buttonImgCarAdd6").click (()=> {effectClickCart (6, "invert(85%) sepia(78%) saturate(460%) hue-rotate(357deg) brightness(103%) contrast(106%)", "#FEFF34")});$(".buttonImgCarAdd7").click (()=> {effectClickCart (7, "invert(65%) sepia(88%) saturate(1634%) hue-rotate(6deg) brightness(101%) contrast(94%)", "#E7AC08")});$(".buttonImgCarAdd8").click (()=> {effectClickCart (8,"invert(65%) sepia(88%) saturate(1634%) hue-rotate(6deg) brightness(101%) contrast(94%)", "#E7AC08" )});$(".buttonImgCarAdd9").click (()=> {effectClickCart (9, "invert(10%) sepia(88%) saturate(5953%) hue-rotate(320deg) brightness(63%) contrast(102%)", "#8c004b")});$(".buttonImgCarAdd10").click (()=> {effectClickCart (10, "invert(8%) sepia(85%) saturate(6757%) hue-rotate(297deg) brightness(72%) contrast(124%)", "#660066")});$(".buttonImgCarAdd11").click (()=> {effectClickCart (11, "invert(39%) sepia(18%) saturate(6484%) hue-rotate(346deg) brightness(92%) contrast(84%)", "#d95030")});$(".buttonImgCarAdd12").click (()=> {effectClickCart (12, "invert(22%) sepia(98%) saturate(1276%) hue-rotate(18deg) brightness(96%) contrast(104%)", "#804000")});$(".buttonImgCarAdd13").click (()=> {effectClickCart (13, "invert(52%) sepia(11%) saturate(1140%) hue-rotate(350deg) brightness(99%) contrast(91%)", "#a18262")});
        }
        $("#divFather13").css({width: "auto"});
        // evento sobre carritos
        const buttonImgCarAdd = document.querySelectorAll(".buttonImgAdd")
            buttonImgCarAdd.forEach((buttonImgcar) => {
            buttonImgcar.addEventListener("click", ()=> {
                getPropert(event);
            })
        });
    }
});
});
// evento sobre img add to cart
$(".adcar, .divImgLogo").click(()=>{
    $(".contenedorItemsCarito").slideDown();
    $("#body").css({overflow:"hidden"});
    actualPreciosCar()
})
// contenedor de carro
$("#body").append(`<div class="contenedorItemsCarito" id="contenedorItemsCarito"style="display:none;">
                    <div class="caontenidoCar">
                        <div class="infoDescr">
                            <p class="pTumercado">tu canasta esta vacia, agrega minimo 1 producto para realizar tu compra</p>
                        </div>
                        <div class="productosCar" id="productosCar" style="width:100%; height: 450px;overflow:auto"></div>
                        <div class="resumenps">
                            <p>Total a pagar: $<span class="valorTotal">0</span></p>
                            <p> Envio: $<span class="spanEnvio"></span> </p>
                            <i class="iDesctoEnvio" style="display:none;color:yellow">por el valor de esta compra tu costo de envio sera de: $0 pesitos</i>
                        </div>
                    </div>
</div>`);
$(".contenedorItemsCarito").css({position: "fixed", top: "0", left:"0", width:"100%", height:"100%", "background-color": "#00000080", "z-index":"20"});
$(".caontenidoCar").css({position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", "background-color": "#333232", width:"40%", height:"auto"});
$(".productosCar").css({"background-image":`url("img/cestaVacia.png")`, "background-position" :"center", "background-size": "350px", "background-repeat": "no-repeat"})
$(".pTumercado").css({"text-align":"center", "margin-left":"20px", color:"yellow"});
$(".resumenps").css({margin:"1rem"});
const contenedorItemsCarito = document.getElementById("contenedorItemsCarito");
window.addEventListener("click", (event)=> {
    if(event.target === contenedorItemsCarito) {
        $(".contenedorItemsCarito").hide(400)
        $("#body").css({overflow:"visible"})
    }
})
// function principal por la cual obtengo toda la info y datos para el carrito
function getPropert (e) {
    const buttonAdd = e.target
    // obtenndre el contenido mas reelevante de los productos para luego usarlos al hacer append para el carro
    const cont = buttonAdd.closest(".divFather");
    const tit = cont.querySelector(".nameProduct").textContent;
    const price =cont.querySelector(".priceProduct").textContent;
    const imgn = cont.querySelector(".imageOfProduct").src;
    // aumentar cantodad en carro y borrar duplicados
    const divsDuplElementos = document.getElementsByClassName("titProductSelect")
    // console.log(divsDuplElementos)
    // codido que verifica si hay dos titulos repetidos, solo aumento la cantidad del input
    for (let i = 0; i < divsDuplElementos.length; i++) {
        if (divsDuplElementos[i].innerHTML === tit){
            const estoyd = divsDuplElementos[i].parentElement.querySelector(".cantidadProduct");
            estoyd.value++;
            // console.log(estoyd);
            actualPreciosCar();
            return;
        }
    }
    addCarrr(imgn, tit, price );
    // console.log(buttonAdd);
    verifCarproductsTrue ();
    const productosCar = document.querySelectorAll(".ctnsacar");
    productosCar.forEach(click => {
        click.addEventListener("click", (event) => {
            quitarProducto(event);
            actualPreciosCar();
        });
    });
    const productosCarsm = document.querySelectorAll(".cantidadProduct");
    productosCarsm.forEach(click => {
        click.addEventListener("change", (event) => {
            cambCantid(event);
            actualPreciosCar();
        })
    }) 
};
// funcion en que verifico si el carrito hay o no productos para ejecutar animacion en carrito y avisar   
function verifCarproductsTrue () {
    const productosCarsed = document.getElementById("productosCar").childNodes;
    // console.log(productosCarsed);
    
    if (productosCarsed.length >= 1 ) {
        $(".pTumercado").text("tu mercado:");
        $(".productosCar").css({"background-image":"none"})
        let carrr = $(".adcar")
        startAnimation();
        function startAnimation(){
            carrr.animate({height: "auto", width:"60px"}, 400);
            carrr.animate({height:"auto", width: "70px"}, 400, startAnimation);
        };
        // console.log("yes!")
    } else {
        // console.log("paila!")
        let carrr = $(".adcar")
        $(carrr).stop(true);
        $(".pTumercado").text("tu canasta esta vacia, agrega minimo 1 producto para realizar tu compra");
        $(".productosCar").css({"background-image":`url("img/cestaVacia.png")`})

        
    }
}
// funcion para agregar la info de lo seleccionado al carrito 
function addCarrr (imgn, tit, price ) {
    // console.log("algopasa")
    $(".productosCar").append(`<div class="contCar" style="margin: 0 auto;">
                                    <img class="imgreduc" src="${imgn}" style="width:60px; height:80px"> </img>
                                    <h4 class="titProductSelect">${tit}</h4>
                                    <div class="divCatn">
                                        <input class="cantidadProduct" type="number" max="10" value="1" name="inptc">
                                    </div>
                                    <div class="divpres">
                                        <h6 class="h6preciounitario">precio unitario:</h6>
                                        <p class="priceincar">${price}</p>
                                    </div>
                                    <div class="ctnsacar" style="cursor: pointer">
                                        <img class="quitarProducto" src="img/remove.png" style="cursor: pointer; width:30px; margin: 0 auto; text-align:center" name="henry">
                                        <p class="pelim">eliminar</p>
                                    </div>
                                </div>`)
    $(".contCar").css({display: "flex", "justify-content": "space-between", "align-items": "center", width:"100%",height:"auto", "background-color":"#f6d454", margin:"10px 0 0 0"});
    $(".titProductSelect").css({width:"150px"});
    $(".divpres").css({display:"flex", "flex-direction":"column", "justify-content":"center"})
    $(".cantidadProduct").css({width:"40px", height:"50px", "text-align":"center","border-radius":"10%"});
    $(".substract, .addsuma").css({width:"30px", cursor:"pointer"});
    
}
// funcion actualizar precio total
function actualPreciosCar () {
    let totalprice = 0;
    const valorTotal = document.querySelector(".valorTotal");
    const itemcar = document.querySelectorAll(".contCar");
    itemcar.forEach(click => {
        // get dates from html elements - obtengo datos desde elementos html
        const priceproduct = Number(click.querySelector(".priceincar").textContent.replace("$", ""));
        const plusAmount = Number(click.querySelector(".cantidadProduct").value);
        totalprice = totalprice + priceproduct * plusAmount;
        // console.log(totalprice)
    });
    $(valorTotal).text(new Intl.NumberFormat().format(totalprice));
    if(totalprice >= 100000) {
        $(".spanEnvio").text(0);
        $(".iDesctoEnvio").show();

    } else{
        $(".spanEnvio").text(new Intl.NumberFormat().format(8000));
        $(".iDesctoEnvio").hide();
    }
    
}
// funcion para quitar div de producto, la acciono al dar click en el elemento .ctnSacar
function quitarProducto (event) {
    const btnremv = event.target;
    btnremv.closest(".contCar").remove();
    verifCarproductsTrue ()
    actualPreciosCar();
}
// quito elemento si la cantidad en el inptcantidad es 0, bueno mejor solo dejo que quede en 1 siempre y maximo 10
function cambCantid (event) {
    const inptcant = event.target;
    if (inptcant.value <= 0) {
        inptcant.value = 1;
    }
    if (inptcant.value >= 10) {
        inptcant.value = 10;
    }
    actualPreciosCar();
}