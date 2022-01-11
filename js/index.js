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
            <b class="priceProduct"> ${formatCurrency("es-Co", "COP", 0, dato.price)}</b>
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
        $("#divFather13").css({width: "30%"})
        const buttonImgCarAdd = document.querySelectorAll(".buttonImgAdd")
            buttonImgCarAdd.forEach((buttonImgcar) => {
            buttonImgcar.addEventListener("click", ()=> {
                getPropert(event)
            })
        })


    }
});
})
function getPropert (event) {
    const buttonAdd = event.target
    const cont = buttonAdd.closest("#divFather");
    const tit = cont.querySelector(".nameProduct").textContent;
    const price = cont.querySelector(".priceProduct").textContent;
    const imgn = cont.querySelector(".imageOfProduct").src;
    addToCar(tit, price, imgn)
    console.log(tit+price+imgn)

}
function addToCar() {
    
}


