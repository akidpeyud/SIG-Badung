// ===============================
// FILTER LAYER
// ===============================

function toggleLayer(layer, checkboxId) {

    const checkbox = document.getElementById(checkboxId);

    checkbox.addEventListener("change", function () {

        if (this.checked) {
            map.addLayer(layer);
        } else {
            map.removeLayer(layer);
        }

    });

}

// Pasang event ke semua checkbox
toggleLayer(layer_pantai_3, "cbPantai");
toggleLayer(layer_21HotelRekomendasi_4, "cbHotel");
toggleLayer(layer_5RekomendasiResto_6, "cbResto");
toggleLayer(layer_5RekomendasiPura_5, "cbPura");