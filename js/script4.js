let a = 0;
const arr = [1, 2, 3, 4, 5];
for (i = 0; i <= arr.length - 1; i++){
    a += arr[i];
};
   console.log(a);
//5.


for (i = 0; i <= arr.length - 1; i++){
    a += Math.pow(arr[i],2);
};
   console.log(a);