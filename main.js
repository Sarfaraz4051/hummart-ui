let offers = [
    {
        "img_src": "images/offers/2.jpg",
        "old_price": 1050,
        "new_price": 950,
        "title": "BUY Vital Tea Zip Pack 950 Gm GET Vital Cardamom Green Tea Bags Box 30 Pcs FREE"
    },
    {
        "img_src": "images/offers/2.jpg",
        "old_price": 1060,
        "new_price": 861,
        "title": "BUY 4 Nestle Cerelac 3 Fruits Baby Food 175 Gm GET Nestle Cerelac Bowl FREE"
    },
    {
        "img_src": "images/offers/3.jpg",
        "old_price": 1005,
        "new_price": 729,
        "title": "BUY Menu Burger Patties 1075 Gm GET Menu Chicken Nuggets 270 Gm FREE"
    },
    {
        "img_src": "images/offers/4.jpg",
        "old_price": 360,
        "new_price": 330,
        "title": "BUY Nestle Pure Life Water 1.5 Ltr X 6 Pcs GET 3 Nestle Everyday Sachet 15 Gm FREEE"
    },
    {
        "img_src": "images/offers/5.jpg",
        "old_price": 335,
        "new_price": 315,
        "title": "BUY Nescafe Classic Coffee 50 Gm GET 2 Nestle Everyday Sachet 15 Gm FREE"
    },
    {
        "img_src": "images/offers/6.jpg",
        "old_price": 399,
        "new_price": 250,
        "title": "BUY Dove Intense Repair Conditioner 180 Ml GET Lifebuoy Hand Sanitizer 60 Ml FREE"
    },
    {
        "img_src": "images/offers/7.jpg",
        "old_price": 160,
        "new_price": 131,
        "title": "BUY 2 Rafhan Orange Jelly 80 Gm GET Rafhan Mango Jelly 80 Gm FREEE"
    },
    {
        "img_src": "images/offers/8.jpg",
        "old_price": 405,
        "new_price": 256,
        "title": "BUY Fair & Lovely Moisturising Fairness Lotion 200 Ml GET Lifebuoy Hand Sanitizer 60 Ml FREE"
    }
  ]



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
