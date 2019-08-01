// images from picsum.photo
const xhr = new XMLHttpRequest();
//get JSON file of pics from picsum site
xhr.open('GET', `https://picsum.photos/v2/list?page=2&limit=10`, true);

xhr.onload = function() {
    let output = '';
    if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        response.forEach(function(pic) {
            output += `<div class="pic" style="background-image: url('${pic.download_url}');"/></div>`
        });
    } else {
        output = 'something went wrong';
    }
    // insert pic into dom
    document.querySelector('.pics').innerHTML = output;
}

xhr.send();