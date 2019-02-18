
function teste1(){
    fetch('http://localhost:3000/graphql',{ 
    method: 'post', 
    headers:{ 
        'Content-Type': 'application/json'}, 
    body: '{"query":"{allPosts{id titulo}}"}'
    })
}

var query = [
    {"query":"{allPosts{id titulo}}"},
    {"query":"{allPosts{titulo}}"},
    {"query":"{allPosts{id}}"}
]