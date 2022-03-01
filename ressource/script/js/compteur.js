let compteur = document.getElementById("compteur");
xhr("https://api.github.com/repos/TrOllOchamO/BingoLol/releases/latest", (release) => {
    let asset = release?.assets[0];
    let dl = asset?.download_count;
    compteur.innerText = dl ?? "Impossible de trouver le nombre de telechargement | Unable to find number of downloads";
});

/**
    Éxecute une requête GET à une url | Execute a request GET at a url
    @param {string} url L'URL de la ressource | the URL resource
    @param {(response) => void} callback Méthode à éxecuter avec la réponse | Method to execute with response
*/
function xhr(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ev => {
        if (xhr.status !== 200 || xhr.readyState !== 4) return;
        let res = JSON.parse(xhr.responseText);
        callback(res);
    }
    xhr.open("GET", url);
    xhr.send();
}