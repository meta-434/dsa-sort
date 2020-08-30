// q1 Understanding merge sort
/*
        On call #1, left is assigned to [21, 1, 26, 45, 29, 28, 2, 9].
        On recursive call #1, left is further divided to be [21, 1, 26, 45].
        On recursive call #2, left is further divided to be [21, 1].
        On recursive call #3 - mergeSort([21, 1]) - left is further divided to be [21].
        On recursive call #4, mergeSort([21]) returns [21]. The algorithm then processes the right-side value of 1.
    On recursive call #5, mergeSort([1]) returns [1].
        On recursive call #6, mergeSort([21, 1]) calls merge ([21], [1], [21, 1]).
        On recursive call #7, merge returns [1, 21]. This causes mergeSort([21, 1]) to return [1, 21].
        On recursive call #8, mergeSort([26, 45]) divides left to be [26] and right to be [45].
        On recursive call #9, mergeSort([26]) returns 26.
    On recursive call #10, mergeSort([45]) returns 45.
    On recursive call #11, merge([26], [45], [26, 45]) returns [26, 45]. This causes mergeSort([26, 45]) to return [26, 45].
        On recursive call #12, mergeSort([21, 1, 26, 45]) calls merge([1, 21], [26, 45], [21, 1, 26, 45]) and returns [1, 21, 26, 45].
        On recursive call #13, mergeSort([29, 28, 2, 9]) subdivides itself into [29, 28] and [2, 9].
        On recursive call #14, mergeSort([29, 28]) subdivides itself into [29] and [28].
        On recursive call #15, mergeSort([29]) returns 29.
    On recursive call #16, mergeSort([28]) returns 28.
*/



// q2 Understanding quicksort
/*
    1)
        *The pivot could have been either 14 or 17
            The array is currently sorted in such a way that all items to the left of 14 are less than 14 and all items to the right of 14 are greater than 14. This also holds true for 17. Therefore, either of these numbers could have been the pivot. No other value in the array meets this criteria.

    2)
        *When using the last item on the list as a pivot
            part #1: (piv = 12)
                [10, 3, 9, 12, 14, 17, 13, 15, 19, 16]
            part #2: (Left-side, piv = 9)
                [3, 9, 10, 12, 14, 17, 13, 15, 19, 16]

        *When using the first item on the list as a pivot
            part #1: (piv = 14)
                [13, 10, 3, 9, 12, 14, 17, 15, 19, 16]
            part #2: (Left-side, piv = 13)
                [10, 3, 9, 12, 13, 14, 17, 15, 19, 16]

 */

//q3 implement quicksort
// const splitData = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 919 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5".split(" ");
// const DATA = splitData.map((n) => parseInt(n, 10));
//
// function qSort(arr, start=0, end=arr.length) {
//     if (start >= end) {
//         return arr;
//     }
//     const middle = partition(arr, start, end);
//     arr = qSort(arr, start, middle);
//     arr = qSort(arr, middle+1, end);
//     return arr;
// }
//
// function partition(arr, start, end) {
//     const pivot = arr[end-1];
//     let j = start;
//     for (let i = start; i < end-1; i++) {
//         if(arr[i] <= pivot) {
//             swap(arr, i, j);
//             j++;
//         }
//     }
//     swap(arr, end-1, j);
//     return j;
// }
//
// function swap (arr, i, j) {
//     const tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }
//
// function main(){
//     const sorted = qSort(DATA);
//     console.log(sorted);
//     let ok = true;
//     for (let i=0; i<sorted.length-1; i++) {
//         if (sorted[i] > sorted[i+1]) ok = false;
//     }
//     console.log('ok: ', ok);
// }
// main();

//q4 implement merge sort
// const splitData = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 919 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5".split(" ");
// const DATA = splitData.map((n) => parseInt(n, 10));
//
// function mSort (arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const middle = Math.floor(arr.length/2);
//     let left = arr.slice(0, middle);
//     let right = arr.slice(middle, arr.length);
//
//     left = mSort (left);
//     right = mSort (right);
//     return merge (left, right, arr);
// }
//
// function merge (left, right, arr) {
//     let leftI = 0;
//     let rightI = 0;
//     let outputI = 0;
//     while (leftI < left.length && rightI < right.length) {
//         if (left[leftI] < right[rightI]) {
//             arr[outputI++] = left[leftI++];
//         }
//         else {
//             arr[outputI++] = right[rightI++];
//         }
//     }
//     for (let i = leftI; i < left.length; i++) {
//         arr[outputI++] = left[i];
//     }
//     for (let i = rightI; i < right.length; i++) {
//         arr[outputI++] = right[i];
//     }
//     return arr;
// }
//
// function main(){
//     const sorted = mSort(DATA);
//     console.log(sorted);
//     let ok = true;
//     for (let i=0; i<sorted.length-1; i++) {
//         if (sorted[i] > sorted[i+1]) ok = false;
//     }
//     console.log('ok: ', ok);
// }
// main();

//q5 LL merge sort
// const LinkedList = require('./LL');
// const {display} = require('./LL-methods');
//
// function mSortList (list) {
//     let currNode = list.head;
//     if (currNode.next === null) {
//         return list;
//     }
//     let length = 1;
//     while (currNode.next !== null) {
//         length++;
//         currNode = currNode.next;
//     }
//     const middleI = Math.floor(length/2);
//     // console.log(`middleI is ${middleI}`);
//
//     //make a new right-hand list with the second half of the nodes in the list
//     let leftList = splitList(list, 0, middleI);
//     // console.log('displaying left-hand list');
//     // display(leftList);
//
//     //make a new left-hand list
//     // console.log('##################################');
//     let rightList = splitList(list, middleI, length);
//     // console.log('displaying right-hand list');
//     // display(rightList);
//     //add all of the values up to and including the middle node to leftList
//     leftList = mSortList(leftList);
//     rightList = mSortList(rightList);
//
//     return mergeLists (leftList, rightList);
//
// }
//
// function splitList (list, startI, endI) {
//     //make a new list of all nodes between startI and endI, including startI but not endI.
//     let currNode = list.head;
//     if (currNode === null) return;
//     const returnList = new LinkedList();
//     let i = 0;
//     while (currNode !== null) {
//         if (i >= startI && i < endI) {
//             returnList.insertLast(currNode.value);
//         }
//         i++;
//         currNode = currNode.next;
//     }
//     return returnList;
// }
//
// function mergeLists (leftList, rightList) {
//     //given two sorted lists, return a sorted list
//     //containing all values of the two component lists, in ascending order
//
//     //create a new empty linked list
//     const mergedList = new LinkedList();
//     let currLeft = leftList.head;
//     let currRight = rightList.head;
//
//     //while we still have nodes in both lists
//     while (currLeft && currRight) {
//         //if the value of the left list is lower, append it to the end of mergedList
//         //and move currLeft forward one node
//         if (currLeft.value <= currRight.value) {
//             mergedList.insertLast(currLeft.value);
//             currLeft = currLeft.next;
//         }
//             //otherwise append the value of currRight to mergedList
//         //and move currRight forward one node
//         else {
//             mergedList.insertLast(currRight.value);
//             currRight = currRight.next;
//         }
//     }
//     //once we've reached the end of one list
//     //append values from the remaining single list until none remain
//     while (currLeft) {
//         mergedList.insertLast(currLeft.value);
//         currLeft = currLeft.next;
//     }
//     while (currRight) {
//         mergedList.insertLast(currRight.value);
//         currRight = currRight.next;
//     }
//     //return the merged list
//     return mergedList;
// }
//
// function main(){
//     const LL = new LinkedList();
//     LL.insertFirst(7);
//     LL.insertFirst(8);
//     LL.insertFirst(3);
//     LL.insertFirst(6);
//     LL.insertFirst(4);
//     LL.insertFirst(1);
//     LL.insertFirst(2);
//     LL.insertFirst(5);
//
//     const sorted = mSortList(LL);
//     display(sorted);
// }
// main();


//q6 bucket sort
// function bucketSort (arr, min, max) {
//     const numMap = new Map();
//     for (let i=0; i< arr.length; i++) {
//         if (numMap.get(arr[i]) === undefined) {
//             numMap.set(arr[i], 1);
//         }
//         else {
//             numMap.set(arr[i], numMap.get(arr[i])+1);
//         }
//     }
//
//     let arrI = 0;
//     for (let i = min; i <= max; i++) {
//         let numAppearing = numMap.get(i);
//         while (numAppearing) {
//             arr[arrI] = i;
//             numAppearing--;
//             arrI++;
//         }
//     }
//     return arr;
// }
//
// function main () {
//     const ARR = [3, 7, 4, 9, 12, 5, 19];
//     const MAX = Math.max(...ARR);
//     const MIN = Math.min(...ARR);
//
//     bucketSort(ARR, MIN, MAX);
//     console.log(ARR);
// }
// main();

//q7 sort in place (shuffle)
// ordered
// const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function shuffle (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let randomIndex = Math.floor(Math.random() * arr.length);
//         swap(i, randomIndex, arr);
//     }
//     return arr;
// }
// // hold the val @ random index as well as val @ curr index and swap
// function swap (i, j, arr) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
//
// function main(){
//     shuffle(DATA);
//     console.log(DATA);
// }
// main();

//q8 sorting books
const books = ["In Search of Lost Time", "Ulysses", "Don Quixote", "The Great Gatsby", "One Hundred Years of Solitude", "Moby Dick",
                "War and Peace", "Lolita", "Hamlet", "The Catcher in the Rye", "The Odyssey", "The Brothers Karamazov",
                "Crime and Punishment", "Madame Bovary", "The Divine Comedy", "The Adventures of Huckleberry Finn", "Alice\'s Adventures in Wonderland", "Pride and Prejudice",
                "Wuthering Heights", "To the Lighthouse", "Catch-22", "Fahrenheit 451", "1984", "A Confederacy of Dunces"];

// helper fn, determine sorting between 2 strings
const charCompare = (str1, str2, idx = 0) => {
    if (str1 === str2) return true;
    if (str1.toLowerCase().charCodeAt(idx) < str2.toLowerCase().charCodeAt(idx)) return true;
    else if (str1.toLowerCase().charCodeAt(idx) > str2.toLowerCase().charCodeAt(idx)) return false;
    else return charCompare(str1, str2, idx+1);
}

const bookSort = (books) => {
    if (books.length <= 1) return books;

    const mid = Math.floor(books.length / 2);
    let left = books.slice(0, mid);
    let right = books.slice(mid, books.length);

    left = bookSort(left);
    right = bookSort(right);
    return bookMerge(left, right, books);
}

const bookMerge = (left, right, books) => {
    let lIdx = 0;
    let rIdx = 0;
    let outIdx = 0;

    while(lIdx < left.length && rIdx < right.length) {
        if ( charCompare(left[lIdx], right[rIdx]) ) books[outIdx++] = left[lIdx++];
        else books[outIdx++] = right[rIdx++];
    }
    for (let i = lIdx; i < left.length; i++) {
        books[outIdx++] = left[i];
    }
    for (let j = rIdx; j < right.length; j++) {
        books[outIdx++] = right[j]
    }
    return books;
}

function main() {
    bookSort(books);
    console.log(books);
}

main();