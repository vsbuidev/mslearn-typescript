// Indexable types :
// You can use interfaces that describe array types that you can index into.
// Indexable types have an index signature that describes the type you can use to index into the object,
// along with the corresponding return types when indexing.

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCream[0];
console.log(myStr);

// You can also use the built-in array type or create a type alias for a custom array, but by using an interface,
// you can define your own array type so that anyone who wants to work with that interface can apply it consistently.

// Example with JS API :
// The fetch API is a native JavaScript function that you can use to interact with web services.
// This example declares an interface called Post for the return types in a JSON file and then uses fetch with async and await to generate a strongly typed response.

const fetchURL = "https://jsonplaceholder.typicode.com/posts";

// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

async function showPost() {
  let posts = await fetchPosts(fetchURL);

  // Display the contents of the first item in the response
  let post = posts[0];
  console.log("Post #" + post.id);

  // If the userId is 1, then display a note that it's an administrator
  console.log(
    "Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString())
  );
  console.log("Title: " + post.title);
  console.log("Body: " + post.body);
}

showPost();
