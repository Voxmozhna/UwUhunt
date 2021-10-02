
document.addEventListener('scroll', function(){
    document.querySelectorAll('[role="gridcell"]').forEach(function (el){
        let header = el.getElementsByClassName("hBRZNM")[0];        
        let span = header.getElementsByTagName('span')[0];
        if(!span.hasAttribute('class', 'UwU')){
            let pfpImage = el.getElementsByClassName("Asset--anchor")[0]; 
            src = pfpImage.href;
            let uwuId = src.substring(src.lastIndexOf('/') + 1)
            fetch(`https://rt.quantumly.dev/collectable/score/uwucrew/${uwuId}`)
                .then((r) => r.text())
                .then((text) => {
                    span.innerHTML = `Rarity rank #${text.replace(/\"/g, '').split('-')[0]}`;
                });
            span.setAttribute("class", "UwU"); 
            span.style.color = "#FF66B6";
        }
    });
});



