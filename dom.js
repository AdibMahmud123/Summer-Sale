document.addEventListener("DOMContentLoaded", function() {
    var cards = document.getElementsByClassName("card");
    var total = 0;
    var tot = 0;
    var itemsList = [];
    var reset = false;
    var couponBtn = document.getElementsByClassName("cpn")[0];
    var inputField = document.getElementsByClassName("cpn-inp")[0];
    var mod = document.getElementsByClassName("mod")[0];

    couponBtn.disabled = true;
    mod.disabled = true;

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function(event) {
            var items = event.currentTarget.querySelector(".item-" + i).textContent;
            itemsList.push(items);
            updateItemsList();
            var price = parseFloat(event.currentTarget.querySelector(".price-" + i).textContent, 10);
            total += price;
            updateTotal();
        });
    }

    function updateItemsList() {
        var itemsText = "";
        for (let j = 0; j < itemsList.length; j++) {
            itemsText += (j + 1) + ". " + itemsList[j] + "\n";
        }
        document.getElementById("items").innerText = itemsText;
    }
    var disc = 0
    var total_s = 0
    function updateTotal() {
        if(total > 0){
            mod.disabled = false;
        }
        document.getElementById("total").innerText = total.toFixed(2) + " Tk";
        var go_home = document.getElementsByClassName("reset")[0];
        if (total > 0){
            go_home.addEventListener("click", function(){
                itemsText = "";
                total = 0;
                disc = 0;
                total_s = 0;
                itemsList = [];
                document.getElementById("items").innerText = itemsText;
                document.getElementById("total").innerText = total.toFixed(2) + " Tk";
                document.getElementById("discount").innerText = disc.toFixed(2) + "TK";
                document.getElementById("Total_s").innerText = total_s.toFixed(2) + "TK";
                mod.disabled = true;
            })
        }
        console.log(reset)
        if (total > 200) {
            couponBtn.disabled = false;

            couponBtn.addEventListener("click", function() {

                if (inputField.value === "SELL200") {
                    tot = total
                    disc = total;
                    tot *= 0.8; 
                    disc -= tot;
                    total_s = total - disc;
                    updateTotal();
                    document.getElementById("discount").innerText = disc.toFixed(2) + "TK";
                    document.getElementById("Total_s").innerText = total_s.toFixed(2) + "TK";
                    
                } else {
                    
                }
            });
        } else {
           
            couponBtn.disabled = true;
        }
    }
});
