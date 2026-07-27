const input = document.getElementById("searchInput");
const result = document.getElementById("searchResult");

let semuaData = [];

// =====================
// Ambil semua marker
// =====================

function tambahLayer(layer, icon) {

    layer.eachLayer(function (l) {

        let nama = "";

        if (l.feature.properties.name)
            nama = l.feature.properties.name;

        else if (l.feature.properties.nama)
            nama = l.feature.properties.nama;

        else if (l.feature.properties["nama pura"])
            nama = l.feature.properties["nama pura"];

        else if (l.feature.properties["nama resto"])
            nama = l.feature.properties["nama resto"];

        if (nama != "") {

            semuaData.push({

                nama: nama,

                layer: l,

                icon: icon

            });

        }

    });

}

tambahLayer(layer_pantai_3,"🏖");
tambahLayer(layer_21HotelRekomendasi_4,"🏨");
tambahLayer(layer_5RekomendasiPura_5,"⛩");
tambahLayer(layer_5RekomendasiResto_6,"🍽");

// =====================
// Search realtime
// =====================

input.addEventListener("input", function(){

    let keyword = this.value.toLowerCase();

    result.innerHTML="";

    if(keyword==""){

        result.style.display="none";
        return;

    }

    let ditemukan = semuaData.filter(function(item){

        return item.nama.toLowerCase().includes(keyword);

    });

    if(ditemukan.length==0){

        result.style.display="none";
        return;

    }

    result.style.display="block";

    ditemukan.forEach(function(item){

        let div=document.createElement("div");

        div.className="search-item";

        div.innerHTML=item.icon+" "+item.nama;

        div.onclick=function(){

            map.setView(item.layer.getLatLng(),17);

            item.layer.openPopup();

            result.style.display="none";

            input.value=item.nama;

        }

        result.appendChild(div);

    });

});

// klik luar = tutup daftar

document.addEventListener("click",function(e){

    if(!document.getElementById("sidebar").contains(e.target))

        result.style.display="none";

});