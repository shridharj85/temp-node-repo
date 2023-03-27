const {readFile, writeFile } = require('fs');
readFile('./content/subfolder/first.txt',
'utf-8',(err,ans)=>{
    if(err){
        console.log('err');
        return;
    }
    const first = ans;
    console.log(first);

    readFile('./content/subfolder/second.txt',
'utf-8',(err,ans)=>{
    if(err){
        console.log('err');
        return;
    }
    const second = ans;
    console.log(second);
    writeFile('./content/subfolder/result.txt',
    `here is the result: ${first}, ${second}`,
    (err)=>{
        if(err)console.log('err');
    });
})
})