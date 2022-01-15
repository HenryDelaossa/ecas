// const cli = require("nodemon/lib/cli");

// add childrens to create products container
const jsonProducts = "JSON/productos.json"
let f = 0
$("#btnMercar").click(()=> {
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
            <img  class="buttonImgCarAdd${f} buttonImgAdd" src="img/add.png"> 
            <div class="divtextAgr">
                <p class="textAgregar${f}"></p>
            </div>
            <div class="divTextDescr${f}">
                <span class="spancloseTextDescr${f}">X</span>
                <p class="textDescr${f}"></p>
            </div>
        </div>`);
            // estilos en general divFather
            $(".divFather").css({"text-align": "center", "width": "90%", "margin": "0 auto", "margin-bottom": "20px","position": "relative"});
            // estilos en general priceProduct
            $(".priceProduct").css({color: "#f6d454"});
            // estilos en general divcontenedor de texto agregar (le doy una altura para mas adelante al hacer hover no se des-ubiquen los divs inferiones)
            $(".divtextAgr").css({height:"20px"});
            $(".textAgregar"+[f]).css({color:"#f6d454",display:"none"}).text("agregar al carrito");
            // estilos en general divTextDescr
            $(".divTextDescr"+[f]).css({position: "absolute", top: "40%", left: "50%",transform: "translate(-50%, -50%)","background-color": "#ffffff80", height: "80%", width: "90%", display: "none", "border-radius": "5px"});
            $(".textDescr"+[f]).css({position:"absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"});
            // estilos en general spancloseTextDescr
            $(".spancloseTextDescr"+[f]).css({position: "absolute", top:"0", left:"0", color:"#f6d454", cursor:"pointer", "text-decoration": "underline"});
            // estilos en general para las imagenes 
            $(".imgProduct"+[f]).css({width: "90%", height: "80%",  "box-shadow": "0px 0px 50px -9px #000000", "border-radius": "5px", cursor: "pointer"});
            // estilos en general para las imagenes        
            $(".buttonImgCarAdd"+[f]).css({cursor: "pointer", display: "block", margin: "0 auto", filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(255deg) brightness(103%) contrast(102%)"});
            // variable de aspecto sombra original o inicial
            let shadowOrigin = "0px 0px 50px -9px #000000"
            // aplico la funcion de efecto con sus respectivos parametros por separado a cada clase imgProducto[i] ya que en todos es diferente el efecto y el contenido
            $(".imgProduct1").mouseenter(()=> {efectsCont(".imgProduct1",shadowOrigin, "0px 0px 50px -9px #da7336", 1, "Pasta de tomate de 500gr")});
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
            $(".imgProduct13").mouseenter(()=> {efectsCont(".imgProduct13",shadowOrigin, "0px 0px 50px -9px #a18262", 13, "cafe castillo caramelo from colombia")});;
            // 
            $(".buttonImgCarAdd1").hover (()=> {effectCarImg(1)});$(".buttonImgCarAdd2").hover (()=> {effectCarImg(2)});$(".buttonImgCarAdd3").hover (()=> {effectCarImg(3)});$(".buttonImgCarAdd4").hover (()=> {effectCarImg(4)});$(".buttonImgCarAdd5").hover (()=> {effectCarImg(5)});$(".buttonImgCarAdd6").hover (()=> {effectCarImg(6)});$(".buttonImgCarAdd7").hover (()=> {effectCarImg(7)});$(".buttonImgCarAdd8").hover (()=> {effectCarImg(8)});$(".buttonImgCarAdd9").hover (()=> {effectCarImg(9)});$(".buttonImgCarAdd10").hover (()=> {effectCarImg(10)});$(".buttonImgCarAdd11").hover (()=> {effectCarImg(11)});$(".buttonImgCarAdd12").hover (()=> {effectCarImg(12)});$(".buttonImgCarAdd13").hover (()=> {effectCarImg(13)});;
        }
        $("#divFather13").css({width: "30%"});
        // evento sobre carritos
        const buttonImgCarAdd = document.querySelectorAll(".buttonImgAdd")
            buttonImgCarAdd.forEach((buttonImgcar) => {
            buttonImgcar.addEventListener("click", ()=> {
                getPropert(event)
            })
        })
    }
});
});
// evento sobre img add to cart
$(".logo, .divImgLogo").click(()=>{
    $(".contenedorItemsCarito").slideDown();
    $("#body").css({overflow:"hidden"});
    actualPreciosCar()
})
// contenedor de carro
$("#body").append(`<div class="contenedorItemsCarito" style="display: none;">
                    <div class="caontenidoCar">
                    <div class="infoDescr">
                        <p class="pindodesc">Tu mercado</p>
                    </div>
                        <div class="productosCar" style="width:100%; height:90%;overflow:auto"></div>
                        <div>
                            <p>Total a pagar: $<span class="valorTotal">0</span>
                        </div>
                    </div>
</div>`);
$(".contenedorItemsCarito").css({position: "fixed", top: "0", left:"0", width:"100%", height:"100%", "background-color": "#00000050"});
$(".caontenidoCar").css({position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", "background-color": "lightslategray", width:"50%", height:"70%"});
$(".pindodesc").css({"text-align":"center", "margin-left":"20px"});


// function principal piloto de carro
function getPropert (e) {
    const buttonAdd = e.target
    // obtenndre el contenido mas reelevante de los productos para luego usarlos al hacer append para el carro
    const cont = buttonAdd.closest(".divFather");
    const tit = cont.querySelector(".nameProduct").textContent;
    const price =cont.querySelector(".priceProduct").textContent;
    const imgn = cont.querySelector(".imageOfProduct").src;
    
    // uso el contenido anteriorpara hacer append dentro de cada elemento que se vaya a agregar al carrito
    $(".productosCar").append(`<div class="contCar" style="margin: 0 auto;">
                        <img src="${imgn}" style="width:60px; height:80px"> </img>
                        <h4>${tit}</h4>
                        <img src="/img/substract.png" class="substract">
                        <input class="cantidadProduct" type="number" max="100"value="1">
                        <img src="/img/addsuma.png" class="addsuma">
                        <p class="priceincar">${price}</p>
                        <b class="quitarProducto" style="cursor: pointer;">quitar</b>
                    </div>`)
                    $(".contCar").css({display: "flex", "justify-content": "space-between", "align-items": "center", width:"100%",height:"auto", "background-color":"white", margin:"10px 0 0 0"});
                    $(".substract, .addsuma").css({width:"30px", cursor:"pointer"});
    const productosCar = document.querySelectorAll(".quitarProducto");
    productosCar.forEach(click => {
        click.addEventListener("click", (event) => {
            quitarProducto(event);
            actualPreciosCar()
            // console.log("clickie btn btn quitar"+event.target)
        });
    })
    const productosCarsm = document.querySelectorAll(".cantidadProduct");
    productosCarsm.forEach(click => {
        click.addEventListener("change", (event) => {
            cambCantid(event);
            actualPreciosCar()
        })
    })
}

function actualPreciosCar () {
    let totalprice = 0;
    const valorTotal = document.querySelector(".valorTotal");
    // console.log(valorTotal);

    const itemcar = document.querySelectorAll(".contCar");
    // console.log(itemcar);

    itemcar.forEach(click => {
        // get dates from html elements - obtengo datos desde elementos html
        const priceproduct = Number(click.querySelector(".priceincar").textContent.replace("$", ""));
        const plusAmount = Number(click.querySelector(".cantidadProduct").value);
        // console.log(plusAmount);
        totalprice = totalprice + priceproduct * plusAmount
    })
    $(valorTotal).text(totalprice)
    // $(".valorTotal").text(totl);
}

function quitarProducto (event) {
    const btnremv = event.target
    // console.log(btnremv)
    btnremv.closest(".contCar").remove();
    actualPreciosCar()
}
// quito elemento si la cantidad en el inptcantidad es 0
function cambCantid (event) {
    const inptcant = event.target;
    // inptcant.value <= 0? (event.target.closest(".contCar").remove(), actualPreciosCar()) : null
    if (inptcant.value <= 0) {
        inptcant.closest(".contCar").remove();
    }
    actualPreciosCar();
}


