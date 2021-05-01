console.log("This is news website");

// api key: 940c4b5fc8a1436881a6d6f759b434a6
// 728d58d0c9b666512e90cc4cddb05382
console.log("This is my index js file");

// Initialize the news api parameters
let country = 'in';
let apiKey = '940c4b5fc8a1436881a6d6f759b434a6'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/top-headlines?token=728d58d0c9b666512e90cc4cddb05382&lang=en', true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200 ) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <img src="${element["image"]}" class="card-img-top" alt="...">
                                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
