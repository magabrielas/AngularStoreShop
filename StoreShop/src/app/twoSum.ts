function twoSum(nums: number[], target: number): number[] {
    let indice:number[]=[];
    for(let i of nums){ 
            let j:number = 0;
            while(j<=nums.length){
                if(j!=nums.indexOf(i)&&i+nums[j]==target){
                        indice[0]=nums.indexOf(i);
                        indice[1]=j;
                        console.log(indice[0],indice[1]);
                        return indice;
                    }
                j++;
        }
    }
    return indice;
};