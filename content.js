// Hardcoded variables
let CLIENT_ID = "dKlOitL0RUnwHQlupNxvxpIGIZMFvcdUIv4Cj5dh";
let CLIENT_KEY = "xuLPfjd8hd0B7QXBLKaJ5EmWrv5gQPVZTXhjiqJ4CJSOGenzKJw3DxnZaW70jJd6AlRdtXTx1h5PBuSQ4JVkLk78diM2ypTmLrI0y8zGbWGb800xZn0xffuG9mjCadh2";
let BASE_URI = "https://www.udemy.com/api-2.0/";

function getCourseId() {
    // Get course name
    let page_uri = document.documentURI;
    let course_name = page_uri.split("/")[4];

    // Get course ID
    let course_id_uri = BASE_URI + "/courses/" + course_name;

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(CLIENT_ID + ":" + CLIENT_KEY));
    fetch(course_id_uri,
        {
            method: "GET",
            headers: headers,
        })
        .then(response => response.json())
        .then(data => console.log(data));
}

