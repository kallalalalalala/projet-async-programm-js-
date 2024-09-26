// cteration de fonction iterateWithAsyncAwait

async function iterateWithAsyncAwait(array, callback) {

    for (let i = 0; i < array.length; i++) {
        await callback(array[i]);
    }

}

//afficher un element apres chaque uen seconde 

async function afficherElement(element) {

    console.log(element);

    await new Promise(resolve => setTimeout(resolve, 0));

}

//test avec un tableau

const array = [1, 2, 3, 4, 5];

iterateWithAsyncAwait(array, afficherElement);


//Attendre un appel: Créer une fonction asynchrone awaitCall qui simule l'obtention de données à partir d'une API. Utilisez await pour attendre la réponse de l'API, puis enregistrez les données.

async function awaitCall() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);

        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error('Error:', error);

    }

} awaitCall();


//Gérer les erreurs avec Async/Await:Modifiez la fonction awaitCall pour gérer les erreurs de manière élégante. Si l'appel à l'API échoue, attrapez l'erreur et enregistrez un message d'erreur convivial.

async function awaitCallWithErrorHandling() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/post');

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);

        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error('Error:', error.message);

    }

} awaitCallWithErrorHandling();

//Chaîner Async/Await: Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d'une seconde. Enchaînez ces fonctions en utilisant await.

async function chainedAsyncFunctions() {

    console.log('Start');

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('First function');

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Second function');

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('End');

} chainedAsyncFunctions();

//Attente de requêtes simultanées: Créez une fonction asynchrone concurrentRequests qui effectue deux appels API simultanément en utilisant Promise.all(). Enregistrez les résultats combinés une fois les deux requêtes résolues.

async function concurrentRequests() {

    const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments'];

    const [postsResponse, commentsResponse] = await Promise.all(urls.map(url => fetch(url)));

    if (!postsResponse.ok ||!commentsResponse.ok) {

        throw new Error(`HTTP error! status: ${postsResponse.status} || ${commentsResponse.status}`);

    }

    const posts = await postsResponse.json();

    const comments = await commentsResponse.json();

    console.log('Posts:', posts);

    console.log('Comments:', comments);

} concurrentRequests();

//Attente des appels parallèles:Écrivez une fonction parallelCalls qui prend un tableau d'URL et récupère les données de chaque URL simultanément en utilisant Promise.all(). Enregistrez les réponses une fois que toutes les requêtes sont terminées.

async function parallelCalls(urls) {

    const responses = await Promise.all(urls.map(url => fetch(url)));

    if (!responses.every(response => response.ok)) {

        throw new Error(`HTTP error! status: ${responses.map(response => response.status).join(', ')}`);

    }

    const data = await Promise.all(responses.map(response => response.json()));

    console.log(data);

}

const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments', 'https://jsonplaceholder.typicode.com/albums'];

parallelCalls(urls);