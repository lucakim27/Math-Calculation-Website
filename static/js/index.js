const home = document.getElementById("homeDiv")
const basic = document.getElementById("basicDiv")
const gcdLcm = document.getElementById("gcd&lcmDiv")
const graph = document.getElementById("graphDiv")
const expand = document.getElementById("expandDiv")
const order = document.getElementById("orderDiv")
const enquiry = document.getElementById("enquiryDiv")

home.style.display = "inline"
basic.style.display = "none"
gcdLcm.style.display = "none"
graph.style.display = "none"
expand.style.display = "none"
order.style.display = "none"
enquiry.style.display = "none"


function selection(value) {

    switch(value.innerText) {
        case "Home":
            home.style.display = "inline"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            break
        case "Basic Calculator":
            home.style.display = "none"
            basic.style.display = "inline"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            break
        case "GCD & LCM Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "inline"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            break
        case "Graph Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "inline"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            break
        case "Ordering Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "inline"
            enquiry.style.display = "none"
            break
        case "Expand Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "inline"
            order.style.display = "none"
            enquiry.style.display = "none"
            break
        case "Enquiry":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "inline"
            break
    }
}