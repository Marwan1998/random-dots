
// generateDots();
generateDotsS();


function generateDotsS() {

    const posArr = [];

    for (let i = 0; i < 1000; i++) {
        let dot = document.createElement("div");
        dot.className = "dot";
        let marTop = Math.floor(Math.random() * 600);
        let marLef = Math.floor(Math.random() * 1300);
        // console.log(posArr.find(e => e == marTop || e == marLef));
        if(posArr.find(e => e == marTop || e == marLef) != undefined){
            console.log("Yeah");
        }
        posArr.push(marTop, marLef);
        
        dot.style.marginTop = marTop + "px";
        dot.style.marginLeft = marLef + "px";
        document.body.appendChild(dot);
      }


}



function generateDots() {
    for (let i = 0; i < 1000; i++) {
        let dot = document.createElement("div");
        dot.className = "dot";
        dot.style.marginTop = Math.floor(Math.random() * 600) + "px";
        dot.style.marginLeft = Math.floor(Math.random() * 1300) + "px";
        document.body.appendChild(dot);
      }
}