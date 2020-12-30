function showInfo(flag) {
    if (flag) {
        document.getElementById('sub-menu').style.display = "block"

    } else {

        document.getElementById('sub-menu').style.display = "none"
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
    // Change image every 2 seconds
};

let offers = [
    {
        "img_src": "images/offers/1.jpg",
        "old_price": "Rs 1050",
        "new_price": "Rs 950",
        "title": "BUY Vital Tea Zip Pack 950 Gm GET Vital Cardamom Green Tea Bags Box 30 Pcs FREE"
    },
    {
        "img_src": "images/offers/2.jpg",
        "old_price": "Rs 1060",
        "new_price": "Rs 861",
        "title": "BUY 4 Nestle Cerelac 3 Fruits Baby Food 175 Gm GET Nestle Cerelac Bowl FREE"
    },
    {
        "img_src": "images/offers/3.jpg",
        "old_price": "Rs 1005",
        "new_price": "Rs 729",
        "title": "BUY Menu Burger Patties 1075 Gm GET Menu Chicken Nuggets 270 Gm FREE"
    },
    {
        "img_src": "images/offers/4.jpg",
        "old_price": "Rs 360",
        "new_price": "Rs 330",
        "title": "BUY Nestle Pure Life Water 1.5 Ltr X 6 Pcs GET 3 Nestle Everyday Sachet 15 Gm FREEE"
    },
    {
        "img_src": "images/offers/5.jpg",
        "old_price": "Rs 335",
        "new_price": "Rs 315",
        "title": "BUY Nescafe Classic Coffee 50 Gm GET 2 Nestle Everyday Sachet 15 Gm FREE"
    }
        // },
    // {
    //     "img_src": "images/offers/6.jpg",
    //     "old_price": "Rs 399",
    //     "new_price": "Rs 250",
    //     "title": "BUY Dove Intense Repair Conditioner 180 Ml GET Lifebuoy Hand Sanitizer 60 Ml FREE"
    // },
    // {
    //     "img_src": "images/offers/7.jpg",
    //     "old_price": "Rs 160",
    //     "new_price": "Rs 131",
    //     "title": "BUY 2 Rafhan Orange Jelly 80 Gm GET Rafhan Mango Jelly 80 Gm FREEE"
    // },
    // {
    //     "img_src": "images/offers/8.jpg",
    //     "old_price": "Rs 405",
    //     "new_price": "Rs 256",
    //     "title": "BUY Fair & Lovely Moisturising Fairness Lotion 200 Ml GET Lifebuoy Hand Sanitizer 60 Ml FREE"
    // }
  ];


function product(){
    var main = document.getElementById("main");
    var div = document.createElement("div");
    div.setAttribute("class","myProductSt");

    for( i in offers){
    // create

    var divProduct = document.createElement("div");

    var divProduct1 = document.createElement("div");
    var divProduct2 = document.createElement("div");
    var divProduct3 = document.createElement("div");

    var img = document.createElement("img");
    var a = document.createElement("a");
    var del = document.createElement("del");
    var p = document.createElement("p");
    var button = document.createElement("button");
    
    button.setAttribute("class","button4");
   


    img.setAttribute("src",offers[i].img_src)
    var aText = document.createTextNode(offers[i].title);
    var delText = document.createTextNode(offers[i].old_price);
    var pText = document.createTextNode(offers[i].new_price);
    var btnText = document.createTextNode("ADD TO CART");

    a.appendChild(aText);
    del.appendChild(delText);
    p.appendChild(pText);
    button.appendChild(btnText);
  
    divProduct1.appendChild(img)
    divProduct2.appendChild(a)
    divProduct3.appendChild(del)
    divProduct3.appendChild(p)
    divProduct3.appendChild(button)
    divProduct3.setAttribute("class","last-row");

    divProduct.appendChild(divProduct1)
    divProduct.appendChild(divProduct2)
    divProduct.appendChild(divProduct3)

    divProduct.setAttribute("class","outer-divProduct");

    div.appendChild(divProduct)

    main.appendChild(div)
    }  
}