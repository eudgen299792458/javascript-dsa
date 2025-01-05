// /**
//  *
//  * PRIOTIY Routine for process managment
//  * Implementing based on min-binary-heap
//  * With 2 methods:
//  *  1. Enqueue
//  *  2. Dequeue
//  *
//  */

// class Node {
//   constructor(value) {
//     this.priorityValue = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class MinBinaryHeap {
//   constructor() {
//     this.root = null;
//     this.size = 0;
//   }

//   //  Enqueue
//   enqueue(value) {
//     if (!this.root) {
//       this.root = new Node(value);
//       this.size++;
//       return;
//     }

//     const newNode = new Node(value);
//     let currentNode = this.root;
//     while (currentNode) {
//       // left
//       if (!currentNode.left) {
//         currentNode.left = newNode;

//         // bubbling up

//         return;
//       }

//       // right
//       if (!currentNode.right) {
//         currentNode.right = newNode;
//         return;
//       }

//       currentNode = currentNode.left;
//     }
//   }
// }

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 1000);
  });
}

function getUserPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, title: "Post 1" },
        { postId: 2, title: "Post 2" },
      ]);
    }, 1000);
  });
}

async function fetchUserAndPosts(userId) {
  try {
    await getUser(userId); // Waits for the user data to be fetched
    console.log("sync manner.1");

    await getUserPosts(userId); // Waits for the posts to be fetched
    console.log("sync manner.2");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserAndPosts(1);
console.log("done");
