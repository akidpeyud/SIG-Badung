window.onload = function () {
    updateStatistic();
};

function updateStatistic() {

    let pantai = 0;
    let hotel = 0;
    let resto = 0;
    let pura = 0;

    if (typeof layer_pantai_3 !== "undefined") {
        layer_pantai_3.eachLayer(function () {
            pantai++;
        });
    }

    if (typeof layer_21HotelRekomendasi_4 !== "undefined") {
        layer_21HotelRekomendasi_4.eachLayer(function () {
            hotel++;
        });
    }

    if (typeof layer_5RekomendasiResto_6 !== "undefined") {
        layer_5RekomendasiResto_6.eachLayer(function () {
            resto++;
        });
    }

    if (typeof layer_5RekomendasiPura_5 !== "undefined") {
        layer_5RekomendasiPura_5.eachLayer(function () {
            pura++;
        });
    }

    document.getElementById("jumlahPantai").innerHTML = "Pantai : " + pantai;
    document.getElementById("jumlahHotel").innerHTML = "Hotel : " + hotel;
    document.getElementById("jumlahResto").innerHTML = "Resto : " + resto;
    document.getElementById("jumlahPura").innerHTML = "Pura : " + pura;
}