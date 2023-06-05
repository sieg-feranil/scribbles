const tree = {

    "value": "Arwen",

    "left": {
        "value": "Eärendil",
        "left": {
            "value": "Nimloth the Fair",
            "left": null,
            "right": null
        },
        "right": {
            "value": "Galadriel",
            "left": {
                "value": "Eowyn",
                "left": null,
                "right": null
            }, "right": null
        }
    },
    "right": {
        "value": "Shelob",
        "left": null,
        "right": null
    }

}

let i=0
function waldo(obj,name) {
    for (const [key, value] of Object.entries(obj)) {
        if (value==name) {
            return name
        }
        else if (key=='left')
        waldo
      }
}




  console.log(waldo(tree, 'Arwen'));