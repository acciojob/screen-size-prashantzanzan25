//your JS code here. If required.
function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById("sizeInfo");
    sizeInfo.innerHTML = `<h1>Width: ${width} Height: ${height}</h1>`;
}
window.addEventListener("resize", updateSizeInfo);
window.onload = updateSizeInfo;



