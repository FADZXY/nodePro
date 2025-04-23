const {writeFile,readFile}=require('fs');
console.log(`start the task`)
readFile('./content/t.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    let first=result
    //console.log(result);
    writeFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        let second=result;
        //console.log(result);
        writeFile('./content/result-async.txt',`the result is : ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            console.log('done with this task')
        });
    })
})
console.log(`start the next task`);