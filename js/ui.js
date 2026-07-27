// ===============================
// UI SIDEBAR
// ===============================

const sidebar = document.getElementById("sidebar");

// Tombol buka/tutup sidebar
const btn = L.control({ position: "topleft" });

btn.onAdd = function () {

    const div = L.DomUtil.create("div");

    div.innerHTML = `
        <button id="toggleSidebar"
        style="
            background:#111;
            color:white;
            border:none;
            padding:10px 15px;
            border-radius:8px;
            cursor:pointer;
            font-size:18px;">
            ☰
        </button>
    `;

    return div;

};

btn.addTo(map);

// Event
document.addEventListener("click",function(e){

    if(e.target.id==="toggleSidebar"){

        sidebar.classList.toggle("hide");

    }

});