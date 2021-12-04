const home = document.getElementById("homeDiv")
const basic = document.getElementById("basicDiv")
const gcdLcm = document.getElementById("gcdLcmDiv")
const graph = document.getElementById("graphDiv")
const expand = document.getElementById("expandDiv")
const order = document.getElementById("orderDiv")
const enquiry = document.getElementById("enquiryDiv")

const homeLi = document.getElementById("homeLi")
const basicLi = document.getElementById("basicLi")
const glLi = document.getElementById("glLi")
const graphLi = document.getElementById("graphLi")
const expandLi = document.getElementById("expandLi")
const orderLi = document.getElementById("orderLi")
const enquiryLi = document.getElementById("enquiryLi")

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
            homeLi.setAttribute("class", "active")
            basicLi.setAttribute("class", "")
            glLi.setAttribute("class", "")
            graphLi.setAttribute("class", "")
            expandLi.setAttribute("class", "")
            orderLi.setAttribute("class", "")
            enquiryLi.setAttribute("class", "")
            break
        case "Basic Calculator":
            home.style.display = "none"
            basic.style.display = "inline"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            homeLi.setAttribute("class", "")
            basicLi.setAttribute("class", "active")
            glLi.setAttribute("class", "")
            graphLi.setAttribute("class", "")
            expandLi.setAttribute("class", "")
            orderLi.setAttribute("class", "")
            enquiryLi.setAttribute("class", "")
            break
        case "GCD & LCM Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "inline"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            homeLi.setAttribute("class", "")
            basicLi.setAttribute("class", "")
            glLi.setAttribute("class", "active")
            graphLi.setAttribute("class", "")
            expandLi.setAttribute("class", "")
            orderLi.setAttribute("class", "")
            enquiryLi.setAttribute("class", "")
            break
        case "Graph Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "inline"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "none"
            homeLi.setAttribute("class", "")
            basicLi.setAttribute("class", "")
            glLi.setAttribute("class", "")
            graphLi.setAttribute("class", "active")
            expandLi.setAttribute("class", "")
            orderLi.setAttribute("class", "")
            enquiryLi.setAttribute("class", "")
            break
        case "Ordering Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "inline"
            enquiry.style.display = "none"
            homeLi.setAttribute("class", "")
            basicLi.setAttribute("class", "")
            glLi.setAttribute("class", "")
            graphLi.setAttribute("class", "")
            expandLi.setAttribute("class", "")
            orderLi.setAttribute("class", "active")
            enquiryLi.setAttribute("class", "")
            break
        case "Expand Calculator":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "inline"
            order.style.display = "none"
            enquiry.style.display = "none"
            homeLi.setAttribute("class", "")
            basicLi.setAttribute("class", "")
            glLi.setAttribute("class", "")
            graphLi.setAttribute("class", "")
            expandLi.setAttribute("class", "active")
            orderLi.setAttribute("class", "")
            enquiryLi.setAttribute("class", "")
            break
        case "Enquiry":
            home.style.display = "none"
            basic.style.display = "none"
            gcdLcm.style.display = "none"
            graph.style.display = "none"
            expand.style.display = "none"
            order.style.display = "none"
            enquiry.style.display = "inline"
            homeLi.setAttribute("class", "")
            basicLi.setAttribute("class", "")
            glLi.setAttribute("class", "")
            graphLi.setAttribute("class", "")
            expandLi.setAttribute("class", "")
            orderLi.setAttribute("class", "")
            enquiryLi.setAttribute("class", "active")
            break
    }
}
