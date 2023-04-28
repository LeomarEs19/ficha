var successTable = document.getElementById('successTable')
successTable.style.display = "none"

function getFicha() {
    var $ = selector => document.getElementById(selector);
    var bodyTable = $("informationTable")
    // Campos del formulario
    var name_product = $("name_product").value;
    var line_product = $("line_product").value;
    var version_before = $("version_before").value;
    var version_after = $("version_after").value;
    var module_product = $("module_product").value;
    var desc_product = $("desc-product").value;
    var arq_product = $("arq-product").value;
    var hardware = $("hardware").value;
    var software = $("software").value;
    var others = $("others").value;
    var hardware_client = $("hardware-client").value;
    var software_client = $("software-client").value;
    var others_client = $("others-client").value;
    var funcional_requirements = $("funcional-requirements").value;
    var adicional_requirements = $("adicional-requirements").value;
    var clients_products = $("clients-products").value;
    
    var container = $("container");
    dataBody = [
        {
            "name": "Nombre del producto",
            "result": name_product
        },
        {
            "name": "Línea del producto",
            "result": line_product
        },
        {
            "name": "Versiones anteriores",
            "result": version_before
        },
        {
            "name": "Versión actual",
            "result": version_after
        },
        {
            "name": "Módulo",
            "result": module_product
        }, 
        {
            "name": "Descripción general del producto",
            "result": desc_product
        },
        {
            "name": "Arquitectura",
            "result": arq_product
        },
        {
            "name": "Hardware del servidor",
            "result": hardware
        },
        {
            "name": "Software del servidor",
            "result": software
        },
        {
            "name": "Otros requisitos del servidor",
            "result": others
        },
        {
            "name": "Hardware del cliente",
            "result": hardware_client
        },
        {
            "name": "Software del cliente",
            "result": software_client
        },
        {
            "name": "Otros requisitos del cliente",
            "result": others_client
        },
        {
            "name": "Requerimientos funcionales",
            "result": funcional_requirements
        },
        {
            "name": "Requerimientos adicionales",
            "result": adicional_requirements
        },
        {
            "name": "Clientes del producto",
            "result": clients_products
        }
    ]
    dataBody.map(function(data) {
        var tr = "<tr>" 
        var li = `<td class='description'>${data.name}</td>`
        li += `<td class='information'>${data.result}</td>`
        tr += li
        tr += "</tr>"
        bodyTable.innerHTML += tr
    })

    container.style.display = "none"
    successTable.style.display = "flex"

}





